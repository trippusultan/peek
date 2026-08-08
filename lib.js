'use strict';
// Peek core: db, daily-rotating visitor hash, bot filter, sessions, queries.
const { DatabaseSync } = require('node:sqlite');
const crypto = require('node:crypto');

const SALT = process.env.SALT || 'dev-salt-change-me';
const SESSION_IDLE_MS = 30 * 60 * 1000;

const db = new DatabaseSync(process.env.DB_PATH || 'analytics.db');
db.exec(`
CREATE TABLE IF NOT EXISTS events(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  site TEXT NOT NULL,
  day TEXT NOT NULL,
  ts INTEGER NOT NULL,
  visitor TEXT NOT NULL,
  sess INTEGER NOT NULL,
  path TEXT NOT NULL DEFAULT '/',
  ref TEXT NOT NULL DEFAULT '',
  scr TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_site_day ON events(site, day);
CREATE INDEX IF NOT EXISTS idx_site_ts ON events(site, ts);
`);

const insert = db.prepare(
  'INSERT INTO events (site,day,ts,visitor,sess,path,ref,scr,country) VALUES (?,?,?,?,?,?,?,?,?)'
);

// Crawlers and non-browser clients. Not exhaustive; see README for the honest ceiling.
const BOT_RE = /bot|crawl|spider|slurp|curl|wget|headless|phantom|puppeteer|playwright|scrapy|python-requests|python-urllib|java\/|monitor|pingdom|uptime|facebookexternalhit|whatsapp|telegram|twitterbot|linkedinbot|bingbot|googlebot|duckduckbot|baiduspider|yandex|semrush|ahrefs|mj12|petalbot|bytespider|applebot|gptbot|ccbot|claude|feedfetcher|go-http-client/i;

// Live session map: site|visitor -> {last, sess}.
// ponytail: in-memory, lost on restart; swap for a sessions table if restarts matter.
const sessions = new Map();

function dayKey(d) {
  return d.toISOString().slice(0, 10);
}

// Daily-rotating hash: keyed with (SALT + calendar day), so the same visitor
// hashes differently every day. IP and UA are consumed here and never stored.
function visitorHash(ip, ua, ts) {
  const key = crypto.createHash('sha256').update(SALT + dayKey(new Date(ts))).digest();
  return crypto.createHmac('sha256', key).update(ip + '|' + ua).digest('hex');
}

function isBot(ua) {
  return BOT_RE.test(ua || '');
}

// Full ingest pipeline for one live event. Returns the row, or null for bots.
function record({ site, ip, ua, path, ref, scr, country, ts = Date.now() }) {
  if (!site || isBot(ua)) return null;
  const visitor = visitorHash(ip, ua, ts);
  const key = site + '|' + visitor;
  const s = sessions.get(key);
  let sess = ts;
  if (s && ts - s.last <= SESSION_IDLE_MS) sess = s.sess;
  sessions.set(key, { last: ts, sess });
  const row = {
    site, day: dayKey(new Date(ts)), ts: Math.floor(ts / 1000),
    visitor, sess: Math.floor(sess / 1000),
    path: path || '/', ref: ref || '', scr: scr || '', country: country || ''
  };
  insert.run(row.site, row.day, row.ts, row.visitor, row.sess, row.path, row.ref, row.scr, row.country);
  return row;
}

// Direct row insert (used by seed.js for backfilled demo data, same schema).
function insertRow(row) {
  insert.run(row.site, row.day || dayKey(new Date(row.ts)), Math.floor(row.ts / 1000), row.visitor, Math.floor(row.sess / 1000),
    row.path || '/', row.ref || '', row.scr || '', row.country || '');
}

function rangeStats(site, startTs) {
  const s = db.prepare(
    'SELECT COUNT(*) pv, COUNT(DISTINCT visitor) uv, COUNT(DISTINCT sess) sessions FROM events WHERE site=? AND ts>=?'
  ).get(site, startTs);
  const bounced = db.prepare(
    'SELECT COUNT(*) c FROM (SELECT sess FROM events WHERE site=? AND ts>=? GROUP BY sess HAVING COUNT(*)=1)'
  ).get(site, startTs).c;
  s.bounced = bounced;
  s.bounce = s.sessions ? Math.round((bounced / s.sessions) * 1000) / 10 : 0;
  return s;
}

function topPages(site, startTs, n = 10) {
  return db.prepare(
    'SELECT path, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? GROUP BY path ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, n);
}

function topRefs(site, startTs, n = 10) {
  return db.prepare(
    'SELECT ref, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? GROUP BY ref ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, n);
}

function topCountries(site, startTs, n = 10) {
  return db.prepare(
    'SELECT country, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND country!=\'\' GROUP BY country ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, n);
}

function topScr(site, startTs, n = 5) {
  return db.prepare(
    'SELECT scr, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND scr!=\'\' GROUP BY scr ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, n);
}

function perDay(site, startTs, endTs) {
  const rows = db.prepare(
    'SELECT day, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND ts<=? GROUP BY day ORDER BY day'
  ).all(site, startTs, endTs);
  const m = new Map(rows.map(r => [r.day, r]));
  const out = [];
  for (let d = startTs * 1000; d <= endTs * 1000; d += 86400000) {
    const k = dayKey(new Date(d));
    out.push(m.get(k) || { day: k, pv: 0, uv: 0 });
  }
  return out;
}

function perHour(site, startTs, endTs) {
  const rows = db.prepare(
    "SELECT CAST(strftime('%H', ts, 'unixepoch') AS INTEGER) h, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND ts<=? GROUP BY h ORDER BY h"
  ).all(site, startTs, endTs);
  const m = new Map(rows.map(r => [r.h, r]));
  const out = [];
  for (let h = 0; h < 24; h++) out.push(m.get(h) || { h, pv: 0, uv: 0 });
  return out;
}

const fmt = n => n >= 10000 ? (n / 1000).toFixed(1) + 'k' : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Inline SVG bar chart, zero client JS. mode: 'day' or 'hour'.
function chartSVG(points, mode) {
  const W = 900, H = 220, padB = 26, padT = 14, padL = 44;
  const max = Math.max(1, ...points.map(p => p.uv));
  const bw = (W - padL) / points.length;
  const hgt = v => (v / max) * (H - padB - padT);
  let out = '';
  for (let i = 0; i <= 3; i++) {
    const y = H - padB - (i / 3) * (H - padB - padT);
    out += `<line x1="${padL}" y1="${y}" x2="${W}" y2="${y}" stroke="#222228" stroke-width="1"/>`;
    out += `<text x="0" y="${y + 3}" fill="#52525b" font-size="10">${fmt(Math.round((max * i) / 3))}</text>`;
  }
  points.forEach((p, i) => {
    const x = padL + i * bw + bw * 0.18, w = bw * 0.64, h = hgt(p.uv), y = H - padB - h;
    const label = mode === 'hour' ? `${String(p.h).padStart(2, '0')}:00` : p.day;
    out += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#3085fe" opacity="${p.uv ? 0.92 : 0.12}"><title>${label} - ${fmt(p.uv)} visitors</title></rect>`;
  });
  const ticks = 6;
  const step = Math.max(1, Math.floor(points.length / ticks));
  for (let i = 0; i < points.length; i += step) {
    const p = points[i];
    const label = mode === 'hour' ? `${String(p.h).padStart(2, '0')}h` : p.day.slice(5);
    const x = padL + i * bw + bw * 0.5;
    out += `<text x="${x}" y="${H - 8}" fill="#52525b" font-size="10" text-anchor="middle">${label}</text>`;
  }
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Visitors per ${mode}">${out}</svg>`;
}

module.exports = { db, SESSION_IDLE_MS, dayKey, visitorHash, isBot, record, insertRow, rangeStats, topPages, topRefs, topCountries, topScr, perDay, perHour, chartSVG, fmt };
