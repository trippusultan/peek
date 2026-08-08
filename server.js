'use strict';
// Peek: one process serving the snippet, the ingest endpoint, and the dashboard.
const express = require('express');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const geoip = require('geoip-lite');
const lib = require('./lib');

const PORT = process.env.PORT || 8000;
const SITE = process.env.SITE || 'demo';
const app = express();
app.set('trust proxy', 'loopback'); // trust nginx/caddy on this host only; remote XFF spoofing is rejected
app.disable('x-powered-by');

const SNIPPET = fs.readFileSync(path.join(__dirname, 'public', 'snippet.js'));
const DASH = fs.readFileSync(path.join(__dirname, 'views', 'dashboard.html'), 'utf8');
const PROGRESS = fs.readFileSync(path.join(__dirname, 'views', 'progress.html'), 'utf8');

function authOk(req) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Basic ')) return false;
  const b = Buffer.from(h.slice(6), 'base64').toString('utf8');
  const want = (process.env.DASH_USER || '') + ':' + (process.env.DASH_PASS || '');
  return crypto.timingSafeEqual(
    crypto.createHash('sha256').update(b).digest(),
    crypto.createHash('sha256').update(want).digest()
  );
}

app.get('/s.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.set('Cache-Control', 'public, max-age=86400');
  res.send(SNIPPET);
});

app.get('/api/event', (req, res) => {
  res.set('Cache-Control', 'no-store');
  const ip = req.ip || '';
  lib.record({
    site: String(req.query.site || '').slice(0, 64),
    ip,
    ua: req.get('user-agent') || '',
    path: String(req.query.p || '/').slice(0, 256),
    ref: String(req.query.r || '').slice(0, 128),
    scr: String(req.query.s || '').slice(0, 16),
    country: (geoip.lookup(ip) || {}).country || ''
  });
  res.status(204).end();
});

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function trend(cur, prev, invert) {
  if (!prev) return '<span class="tr flat">no data</span>';
  const pct = Math.round(((cur - prev) / prev) * 1000) / 10;
  if (pct === 0) return '<span class="tr flat">\u25CF 0%</span>';
  const up = invert ? pct < 0 : pct > 0; // bounce: rising is bad
  const cls = up ? 'up' : 'down';
  const arrow = pct > 0 ? '\u25B2' : '\u25BC';
  return `<span class="tr ${cls}">${arrow} ${Math.abs(pct)}%</span>`;
}

function rows(data, nameKey, countKey = 'pv', headers = ['Source', 'Visitors']) {
  if (!data.length) return `<div class="empty">Nothing yet</div>`;
  const max = Math.max(1, data[0][countKey]);
  const TINTS = [['#2d3a4f', '#9cc2ff'], ['#3a2d4f', '#c9a6ff'], ['#2d4f3a', '#9fe8b0'], ['#4f3a2d', '#ffcf9e'], ['#4f2d3a', '#ffa8c0'], ['#3a4f2d', '#d2e89f']];
  return `<table><thead><tr><th>${headers[0]}</th><th>${headers[1]}</th></tr></thead><tbody>` +
    data.map((r, i) => {
      const name = r[nameKey] || 'Direct / None';
      const pct = Math.round((r[countKey] / max) * 100);
      const [bg, fg] = TINTS[i % TINTS.length];
      return `<tr${i === 0 ? ' class="top"' : ''}><td><span class="bar" style="width:${pct}%"></span><span class="mono" style="background:${bg};border-color:${bg};color:${fg}">${esc((name[0] || '?').toUpperCase())}</span><span class="nm">${esc(name)}</span></td><td class="n">${lib.fmt(r[countKey])}</td></tr>`;
    }).join('') + '</tbody></table>';
}

const COUNTRIES = { IN: 'India', US: 'United States', GB: 'United Kingdom', DE: 'Germany', FR: 'France', NL: 'Netherlands', IE: 'Ireland', BR: 'Brazil', AU: 'Australia', SG: 'Singapore', MY: 'Malaysia', RU: 'Russia', ZA: 'South Africa', JP: 'Japan', CA: 'Canada', AE: 'UAE', PK: 'Pakistan', BD: 'Bangladesh', NG: 'Nigeria', KE: 'Kenya', ES: 'Spain', IT: 'Italy', SE: 'Sweden', CH: 'Switzerland', PL: 'Poland', UA: 'Ukraine', TR: 'Turkey', ID: 'Indonesia', TH: 'Thailand', VN: 'Vietnam', PH: 'Philippines', KR: 'South Korea', TW: 'Taiwan', HK: 'Hong Kong', NZ: 'New Zealand', MX: 'Mexico', AR: 'Argentina', CO: 'Colombia', EG: 'Egypt', IL: 'Israel', FI: 'Finland', NO: 'Norway', DK: 'Denmark', AT: 'Austria', BE: 'Belgium', PT: 'Portugal', CZ: 'Czechia', RO: 'Romania', GR: 'Greece', HU: 'Hungary' };
const cname = c => COUNTRIES[c] || c;

function renderDashboard(req, res) {
  if (!authOk(req)) {
    res.set('WWW-Authenticate', 'Basic realm="peek"');
    return res.status(401).end();
  }
  const range = req.query.range === 'today' ? 'today' : req.query.range === '30d' ? '30d' : '7d';
  const now = Date.now();
  const DAY = 86400000;
  const ranges = {
    today: { start: new Date(new Date().toISOString().slice(0, 10)).getTime(), len: DAY, label: 'Today' },
    '7d': { start: now - 6 * DAY, len: 7 * DAY, label: 'Last 7 days' },
    '30d': { start: now - 29 * DAY, len: 30 * DAY, label: 'Last 30 days' }
  };
  const { start, len } = ranges[range];
  const cur = lib.rangeStats(SITE, Math.floor(start / 1000), Math.floor(now / 1000));
  const prev = lib.rangeStats(SITE, Math.floor((start - len) / 1000), Math.floor(start / 1000));
  const links = Object.entries(ranges).map(([k, v]) =>
    `<a href="/dashboard?range=${k}"${k === range ? ' class="on"' : ''}>${v.label}</a>`).join('');

  let chart;
  if (range === 'today') {
    const h = lib.perHour(SITE, Math.floor(start / 1000), Math.floor(now / 1000));
    chart = lib.chartSVG(h, 'hour');
  } else {
    chart = lib.chartSVG(lib.perDay(SITE, Math.floor(start / 1000), Math.floor(now / 1000)), 'day');
  }

  const tab = req.query.tab === 'pages' ? 'pages' : req.query.tab === 'countries' ? 'countries' : req.query.tab === 'devices' ? 'devices' : 'sources';
  const tabs = [['sources', 'Sources'], ['pages', 'Pages'], ['countries', 'Countries'], ['devices', 'Devices']]
    .map(([k, label]) => `<a href="/dashboard?range=${range}&tab=${k}"${k === tab ? ' class="on"' : ''}>${label}</a>`).join('');

  const table = tab === 'pages'
    ? rows(lib.topPages(SITE, Math.floor(start / 1000)), 'path', 'pv', ['Page', 'Pageviews'])
    : tab === 'countries'
      ? rows(lib.topCountries(SITE, Math.floor(start / 1000)).map(r => ({ ...r, country: cname(r.country) })), 'country', 'pv', ['Country', 'Visitors'])
      : tab === 'devices'
        ? rows(lib.topScr(SITE, Math.floor(start / 1000)).map(r => ({ ...r, scr: r.scr[0].toUpperCase() + r.scr.slice(1) })), 'scr', 'pv', ['Device', 'Visitors'])
        : rows(lib.topRefs(SITE, Math.floor(start / 1000)), 'ref', 'pv', ['Source', 'Visitors']);

  const html = DASH
    .replaceAll('{{SITE}}', esc(SITE))
    .replaceAll('{{RANGE_LINKS}}', links)
    .replaceAll('{{UV}}', lib.fmt(cur.uv)).replaceAll('{{UV_TREND}}', trend(cur.uv, prev.uv))
    .replaceAll('{{PV}}', lib.fmt(cur.pv)).replaceAll('{{PV_TREND}}', trend(cur.pv, prev.pv))
    .replaceAll('{{BOUNCE}}', cur.bounce + '%').replaceAll('{{BOUNCE_TREND}}', trend(cur.bounce, prev.bounce, true))
    .replaceAll('{{SESSIONS}}', lib.fmt(cur.sessions)).replaceAll('{{SESSIONS_TREND}}', trend(cur.sessions, prev.sessions))
    .replaceAll('{{LIVE}}', lib.currentVisitors(SITE))
    .replaceAll('{{CHART}}', chart)
    .replaceAll('{{TABS}}', tabs)
    .replaceAll('{{TABLE}}', table);
  res.set('Cache-Control', 'no-store');
  res.send(html);
}

app.get('/dashboard', renderDashboard);

app.get('/progress', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send(PROGRESS);
});
app.use('/progress.json', express.static(path.join(__dirname, 'progress.json'), { maxAge: 0 }));

app.get('/health', (req, res) => res.send('ok'));

if (require.main === module) {
  app.listen(PORT, () => console.log(`peek running on http://localhost:${PORT} (dashboard: /dashboard)`));
}
module.exports = app;
