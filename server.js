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
const INDEX = fs.readFileSync(path.join(__dirname, 'public', 'index.html'), 'utf8');

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
  const TINTS = [['#242424', '#f5f5f5'], ['#1e1e1e', '#d4d4d4'], ['#2c2c2c', '#e8e8e8'], ['#181818', '#c0c0c0'], ['#303030', '#ededed'], ['#141414', '#b5b5b5']];
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

// country centroids for the landing globe (matches COUNTRIES keys)
const COORDS = { IN: [20.6, 79.0], US: [37.1, -95.7], GB: [54.0, -2.5], DE: [51.2, 10.4], FR: [46.6, 2.2], NL: [52.1, 5.3], IE: [53.1, -8.2], BR: [-10.3, -51.9], AU: [-25.3, 133.8], SG: [1.35, 103.8], MY: [4.2, 101.9], RU: [61.5, 105.3], ZA: [-29.0, 24.7], JP: [36.2, 138.3], CA: [56.1, -106.3], AE: [24.0, 54.0], PK: [30.4, 69.3], BD: [23.7, 90.4], NG: [9.1, 8.7], KE: [-0.02, 37.9], ES: [40.5, -3.7], IT: [42.8, 12.8], SE: [60.1, 18.6], CH: [46.8, 8.2], PL: [51.9, 19.1], UA: [48.4, 31.2], TR: [39.0, 35.2], ID: [-0.8, 113.9], TH: [15.9, 101.0], VN: [14.1, 108.3], PH: [12.9, 121.8], KR: [36.5, 127.8], TW: [23.7, 121.0], HK: [22.3, 114.2], NZ: [-40.9, 174.9], MX: [23.6, -102.5], AR: [-38.4, -63.6], CO: [4.6, -74.3], EG: [26.8, 30.8], IL: [31.0, 34.9], FI: [61.9, 25.7], NO: [60.5, 8.5], DK: [56.3, 9.5], AT: [47.6, 14.6], BE: [50.5, 4.5], PT: [39.4, -8.2], CZ: [49.8, 15.5], RO: [45.9, 24.9], GR: [39.1, 21.8], HU: [47.2, 19.5] };

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

app.get('/dashboard', (req, res) => {
  if (!authOk(req)) {
    res.set('WWW-Authenticate', 'Basic realm="peek"');
    return res.status(401).end();
  }
  res.set('Cache-Control', 'no-store');
  res.send(fs.readFileSync(path.join(__dirname, 'public', 'dashboard.html'), 'utf8').replaceAll('{{SITE}}', esc(SITE)));
});

// JSON for the React dashboard (auth-gated; frontend-patterns useQuery consumer)
app.get('/api/dashboard', (req, res) => {
  if (!authOk(req)) {
    res.set('WWW-Authenticate', 'Basic realm="peek"');
    return res.status(401).end();
  }
  const range = req.query.range === 'today' ? 'today' : req.query.range === '30d' ? '30d' : '7d';
  const tab = req.query.tab === 'pages' ? 'pages' : req.query.tab === 'countries' ? 'countries' : req.query.tab === 'devices' ? 'devices' : 'sources';
  const now = Date.now();
  const DAY = 86400000;
  const ranges = {
    today: { start: new Date(new Date().toISOString().slice(0, 10)).getTime(), len: DAY, label: 'Today' },
    '7d': { start: now - 6 * DAY, len: 7 * DAY, label: 'Last 7 days' },
    '30d': { start: now - 29 * DAY, len: 30 * DAY, label: 'Last 30 days' }
  };
  const { start, len } = ranges[range];
  const s = Math.floor(start / 1000), e = Math.floor(now / 1000);
  const cur = lib.rangeStats(SITE, s, e);
  const prev = lib.rangeStats(SITE, Math.floor((start - len) / 1000), s);
  const jt = (v, p, inv = false) => {
    const pct = p ? Math.round(((v - p) / p) * 100) : 0;
    if (inv) return { dir: pct > 0 ? 'down' : pct < 0 ? 'up' : 'flat', pct: Math.abs(pct) };
    return { dir: pct > 0 ? 'up' : pct < 0 ? 'down' : 'flat', pct: Math.abs(pct) };
  };
  const table = tab === 'pages'
    ? { headers: ['Page', 'Pageviews'], rows: lib.topPages(SITE, s).map(r => ({ name: r.path, count: r.pv })) }
    : tab === 'countries'
      ? { headers: ['Country', 'Visitors'], rows: lib.topCountries(SITE, s).map(r => ({ name: cname(r.country), count: r.pv })) }
      : tab === 'devices'
        ? { headers: ['Device', 'Visitors'], rows: lib.topScr(SITE, s).map(r => ({ name: r.scr[0].toUpperCase() + r.scr.slice(1), count: r.pv })) }
        : { headers: ['Source', 'Visitors'], rows: lib.topRefs(SITE, s).map(r => ({ name: r.ref || 'Direct / None', count: r.pv })) };
  const max = Math.max(1, table.rows[0]?.count || 1);
  table.rows = table.rows.map(r => ({ ...r, pct: Math.round((r.count / max) * 100) }));
  res.set('Cache-Control', 'no-store');
  res.json({
    site: SITE,
    range,
    ranges: Object.entries(ranges).map(([k, v]) => ({ k, label: v.label, on: k === range })),
    live: lib.currentVisitors(SITE),
    kpis: [
      { label: 'Unique visitors', val: lib.fmt(cur.uv), trend: jt(cur.uv, prev.uv) },
      { label: 'Pageviews', val: lib.fmt(cur.pv), trend: jt(cur.pv, prev.pv) },
      { label: 'Bounce rate', val: cur.bounce + '%', trend: jt(cur.bounce, prev.bounce, true) },
      { label: 'Sessions', val: lib.fmt(cur.sessions), trend: jt(cur.sessions, prev.sessions) }
    ],
    chart: {
      mode: range === 'today' ? 'hour' : 'day',
      points: range === 'today'
        ? lib.perHour(SITE, s, e).map(p => ({ label: `${String(p.h).padStart(2, '0')}:00`, uv: p.uv }))
        : lib.perDay(SITE, s, e).map(p => ({ label: p.day, uv: p.uv }))
    },
    tabs: [['sources', 'Sources'], ['pages', 'Pages'], ['countries', 'Countries'], ['devices', 'Devices']].map(([k, label]) => ({ k, label, on: k === tab })),
    table
  });
});

app.get('/progress', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send(PROGRESS);
});
app.use('/progress.json', express.static(path.join(__dirname, 'progress.json'), { maxAge: 0 }));
// live visitor count for the landing chip (auth-free, real data)
app.get('/api/live', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.json({ n: lib.currentVisitors(SITE) });
});
// 7d stats for the landing band (auth-free, real data)
app.get('/api/stats', (req, res) => {
  const now = Math.floor(Date.now() / 1000);
  const wk = lib.rangeStats(SITE, now - 6 * 86400, now);
  res.set('Cache-Control', 'no-store');
  res.json({ live: lib.currentVisitors(SITE), pv: wk.pv, uv: wk.uv, bounce: wk.bounce, sessions: wk.sessions });
});
// 7d countries with centroids for the landing globe (auth-free, real data)
app.get('/api/countries', (req, res) => {
  const now = Math.floor(Date.now() / 1000);
  const rows = lib.topCountries(SITE, now - 6 * 86400);
  res.set('Cache-Control', 'no-store');
  res.json(rows.map(r => ({ code: r.country, name: cname(r.country), pv: r.pv, lat: COORDS[r.country]?.[0] ?? null, lng: COORDS[r.country]?.[1] ?? null })));
});
// landing page served with the tracking snippet (real data: every visit beacons to /api/event)
app.get('/', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send(INDEX.replace('{{SITE}}', esc(SITE)));
});
// landing page + product screenshots (html never cached so updates show instantly)
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 3600,
  setHeaders: (res, p) => { if (p.endsWith('.html')) res.setHeader('Cache-Control', 'no-store'); }
}));

app.get('/health', (req, res) => res.send('ok'));

if (require.main === module) {
  app.listen(PORT, () => console.log(`peek running on http://localhost:${PORT} (dashboard: /dashboard)`));
}
module.exports = app;
