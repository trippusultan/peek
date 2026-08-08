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

function rangeStats(site, startTs, endTs = Math.floor(Date.now() / 1000)) {
  const s = db.prepare(
    'SELECT COUNT(*) pv, COUNT(DISTINCT visitor) uv, COUNT(DISTINCT sess) sessions FROM events WHERE site=? AND ts>=? AND ts<?'
  ).get(site, startTs, endTs);
  const bounced = db.prepare(
    'SELECT COUNT(*) c FROM (SELECT sess FROM events WHERE site=? AND ts>=? AND ts<? GROUP BY sess HAVING COUNT(*)=1)'
  ).get(site, startTs, endTs).c;
  s.bounced = bounced;
  s.bounce = s.sessions ? Math.round((bounced / s.sessions) * 1000) / 10 : 0;
  return s;
}

function topPages(site, startTs, n = 10, endTs = Math.floor(Date.now() / 1000)) {
  return db.prepare(
    'SELECT path, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND ts<? GROUP BY path ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, endTs, n);
}

function topRefs(site, startTs, n = 10, endTs = Math.floor(Date.now() / 1000)) {
  return db.prepare(
    'SELECT ref, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND ts<? GROUP BY ref ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, endTs, n);
}

function topCountries(site, startTs, n = 10, endTs = Math.floor(Date.now() / 1000)) {
  return db.prepare(
    'SELECT country, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND ts<? AND country!=\'\' GROUP BY country ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, endTs, n);
}

function topScr(site, startTs, n = 5, endTs = Math.floor(Date.now() / 1000)) {
  return db.prepare(
    'SELECT scr, COUNT(*) pv, COUNT(DISTINCT visitor) uv FROM events WHERE site=? AND ts>=? AND ts<? AND scr!=\'\' GROUP BY scr ORDER BY pv DESC LIMIT ?'
  ).all(site, startTs, endTs, n);
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

// distinct visitors with an event in the last 5 minutes (live now)
function currentVisitors(site) {
  const since = Math.floor((Date.now() - 5 * 60000) / 1000);
  const r = db.prepare('SELECT COUNT(DISTINCT visitor) c FROM events WHERE site = ? AND ts >= ?').get(site, since);
  return r ? r.c : 0;
}

// nice step for y-axis: rounds to 1/2/5 x 10^n so gridline values are clean
function niceStep(v) {
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const m = v / p;
  return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * p;
}

function fmtDay(d) { // '2026-08-02' -> '2 Aug' (Plausible style, day-first)
  const [y, m, dd] = d.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, dd)).toLocaleString('en-US', { day: 'numeric', month: 'short', timeZone: 'UTC' });
}

// Inline SVG area chart (Plausible-style), zero client JS. mode: 'day' or 'hour'.
// Emits TWO svgs: a 900-wide desktop viewBox and a 400-wide mobile viewBox. SVG text
// scales with its viewBox, so a single svg would rasterize labels to ~4px on mobile;
// the mobile variant keeps them ~10px real. CSS shows one per media query.
// Label color #a1a1aa (zinc-400) for contrast on the #18181b panel.
function chartSVG(points, mode) {
  return buildChart(points, mode, { w: 900, h: 244, padL: 56, padR: 28, padT: 14, padB: 38, cls: 'chart-d', gid: 'fill', nX: 6 }) +
         buildChart(points, mode, { w: 400, h: 140, padL: 44, padR: 14, padT: 12, padB: 32, cls: 'chart-m', gid: 'fillm', nX: 4 });
}

function buildChart(points, mode, { w, h, padL, padR, padT, padB, cls, gid, nX }) {
  const rawMax = Math.max(1, ...points.map(p => p.uv));
  const step = niceStep(rawMax / 4);            // 4 divisions, clean numbers
  const max = Math.ceil(rawMax / step) * step;  // e.g. 79 -> step 20 -> max 80
  const iw = w - padL - padR, ih = h - padT - padB;
  const X = i => padL + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw);
  const Y = v => padT + ih - (v / max) * ih;
  let out = '';
  out += `<line x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + ih}" stroke="#3a3a42" stroke-width="1"/>`;
  for (let g = 0; g * step <= max; g++) {
    const v = step * g, y = Y(v);
    out += `<line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="#3a3a42" stroke-width="1"/>`;
    out += `<text x="${padL - 9}" y="${y + 4}" text-anchor="end">${fmt(v)}</text>`;
  }
  const pts = points.map((p, i) => [X(i), Y(p.uv)]);
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2[0]} ${p2[1]}`;
  }
  const area = `${d} L ${pts[pts.length - 1][0]} ${padT + ih} L ${pts[0][0]} ${padT + ih} Z`;
  out += `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3085fe" stop-opacity="0.32"/><stop offset="1" stop-color="#3085fe" stop-opacity="0"/></linearGradient></defs>`;
  out += `<path d="${area}" fill="url(#${gid})"/>`;
  out += `<path d="${d}" fill="none" stroke="#3085fe" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
  points.forEach((p, i) => {
    const label = mode === 'hour' ? `${String(p.h).padStart(2, '0')}:00` : p.day;
    out += `<circle cx="${X(i)}" cy="${Y(p.uv)}" r="3" fill="transparent"><title>${label} - ${fmt(p.uv)} visitors</title></circle>`;
  });
  const stepX = Math.max(1, Math.floor(points.length / nX));
  for (let i = 0; i < points.length; i += stepX) {
    const p = points[i];
    const label = mode === 'hour' ? `${String(p.h).padStart(2, '0')}h` : fmtDay(p.day);
    out += `<text x="${X(i)}" y="${h - 12}" text-anchor="middle">${label}</text>`;
  }
  return `<svg class="chart ${cls}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Visitors per ${mode}">${out}</svg>`;
}

module.exports = { db, SESSION_IDLE_MS, dayKey, visitorHash, isBot, record, insertRow, rangeStats, topPages, topRefs, topCountries, topScr, perDay, perHour, chartSVG, currentVisitors, fmt };
