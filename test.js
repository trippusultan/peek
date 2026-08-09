'use strict';
// Self-check. Run: npm test
const assert = require('node:assert');
const zlib = require('node:zlib');
const fs = require('node:fs');
const http = require('node:http');

process.env.DB_PATH = ':memory:';
process.env.SALT = 'test-salt';
process.env.DASH_USER = 'u';
process.env.DASH_PASS = 'p';
process.env.SITE = 't';

const lib = require('./lib');
const app = require('./server');
const server = app.listen(0);
const base = () => `http://127.0.0.1:${server.address().port}`;

let n = 0;
const ok = (name) => { n++; console.log('  ok', name); };

// 1. snippet under 2KB gzipped
{
  const raw = fs.readFileSync('public/snippet.js');
  const gz = zlib.gzipSync(raw);
  assert.ok(gz.length < 2048, `snippet gzipped ${gz.length} bytes, must be < 2048`);
  assert.ok(raw.includes('api/event') && raw.includes('dataset'), 'snippet beacons endpoint and reads site id from data attrs');
  ok(`snippet: ${raw.length} raw / ${gz.length} gzipped bytes (< 2048)`);
}

// 2. daily-rotating hash: same visitor, different days, different hash; same day, same hash
{
  const a = lib.visitorHash('1.2.3.4', 'ua-x', Date.now());
  const b = lib.visitorHash('1.2.3.4', 'ua-x', Date.now() + 1000);
  const c = lib.visitorHash('1.2.3.4', 'ua-x', Date.now() - 86400000 * 2);
  assert.strictEqual(a, b, 'same day -> same hash');
  assert.notStrictEqual(a, c, 'different day -> different hash');
  assert.ok(/^[0-9a-f]{64}$/.test(a), 'full 256-bit hash');
  ok('hash: rotates daily, 64 hex chars, IP+UA never stored');
}

// 3. bot filter
{
  assert.ok(lib.isBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'));
  assert.ok(lib.isBot('curl/8.5.0'));
  assert.ok(!lib.isBot('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'));
  ok('bots: googlebot + curl dropped, Chrome kept');
}

// 4. sessions: 30-min idle cutoff, bounce rate
{
  const ip = '9.9.9.9', ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/126.0.0.0 Safari/537.36';
  const t = Date.now() - 3600000; // hour ago so future-of-now windows still cover r3
  const r1 = lib.record({ site: 't', ip, ua, path: '/', ts: t });
  const r2 = lib.record({ site: 't', ip, ua, path: '/blog', ts: t + 5 * 60000 });
  const r3 = lib.record({ site: 't', ip, ua, path: '/about', ts: t + 36 * 60000 }); // 31 min after r2
  assert.strictEqual(r1.sess, r2.sess, '5 min apart -> same session');
  assert.notStrictEqual(r2.sess, r3.sess, '31 min apart -> new session');
  const st = lib.rangeStats('t', 0);
  assert.strictEqual(st.sessions, 2, 'two sessions');
  assert.strictEqual(st.bounce, 50, 'one of two sessions bounced -> 50%');
  ok('sessions: 30-min cutoff, bounce rate correct');
}

// 5. raw IP and UA never stored
{
  const cols = lib.db.prepare('PRAGMA table_info(events)').all().map(c => c.name);
  assert.ok(!cols.includes('ip') && !cols.includes('ua'), 'no ip/ua columns');
  ok('privacy: schema has no ip or ua columns');
}

// 6. HTTP ingest end to end, country resolution via X-Forwarded-For
{
  const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15';
  const q = new URLSearchParams({ site: 't', p: '/x', r: 'example.com', s: 'desktop' });
  http.get(base() + '/api/event?' + q, { headers: { 'User-Agent': ua, 'X-Forwarded-For': '8.8.8.8' } }, res => {
    assert.strictEqual(res.statusCode, 204);
    const row = lib.db.prepare('SELECT * FROM events WHERE path=? ORDER BY id DESC LIMIT 1').get('/x');
    assert.ok(row, 'row written');
    assert.strictEqual(row.country, 'US', 'geoip resolved 8.8.8.8 -> US');
    assert.strictEqual(row.ref, 'example.com');
    // bot via HTTP is dropped
    const before = lib.db.prepare('SELECT COUNT(*) c FROM events').get().c;
    http.get(base() + '/api/event?site=t&p=/bot', { headers: { 'User-Agent': 'curl/8.5.0' } }, res2 => {
      assert.strictEqual(res2.statusCode, 204, 'bot gets 204 too (no info leak)');
      const after = lib.db.prepare('SELECT COUNT(*) c FROM events').get().c;
      assert.strictEqual(before, after, 'bot event not stored');
      ok('ingest: 204, row written, country resolved, bot dropped silently');
      checkAuth();
    });
  });
}

// 7. dashboard auth + JSON API content (frontend-patterns React dashboard consumes /api/dashboard)
function checkAuth() {
  http.get(base() + '/dashboard', res => {
    assert.strictEqual(res.statusCode, 401, 'no creds -> 401');
    assert.ok(res.headers['www-authenticate'].startsWith('Basic'));
    const req = http.request(base() + '/api/dashboard?range=7d', { headers: { Authorization: 'Basic ' + Buffer.from('u:p').toString('base64') } }, res2 => {
      let body = '';
      res2.on('data', d => body += d);
      res2.on('end', () => {
        assert.strictEqual(res2.statusCode, 200);
        const d = JSON.parse(body);
        assert.ok(d.site && d.ranges.length === 3, 'site + 3 range links');
        assert.strictEqual(d.kpis.length, 4, 'four KPIs');
        for (const s of ['Unique visitors', 'Bounce rate']) {
          assert.ok(d.kpis.some(k => k.label === s), `kpi "${s}" present`);
        }
        assert.ok(d.chart.points.length > 0, 'chart points present');
        for (const s of ['Sources', 'Pages', 'Countries', 'Devices']) {
          assert.ok(d.tabs.some(t => t.label === s), `tab "${s}" present`);
        }
        assert.ok(d.table.headers.length === 2 && d.table.rows.length > 0, 'table with rows');
        ok('dashboard: 401 without creds, 200 with, JSON kpis/chart/tabs/table all present');
        finish();
      });
    });
    req.end();
  });
}

function finish() {
  server.close();
  console.log(`\n${n} checks passed`);
}
