'use strict';
// Backfill 30 days of demo traffic through the REAL hashing + session rules.
// Inserts directly (not via HTTP) because live ingest hashes on wall-clock time.
const lib = require('./lib');

const SITE = process.env.SITE || 'demo';
const DAYS = 30;


const PATHS = ['/', '/blog', '/blog/privacy-first-analytics', '/blog/cookieless-tracking', '/blog/self-hosting-plausible', '/blog/sessionization', '/docs', '/docs/install', '/docs/dashboard', '/docs/privacy', '/pricing', '/about', '/changelog', '/stats'];
const REFS = ['', '', '', '', 'google.com', 'github.com', 'reddit.com', 'news.ycombinator.com', 'x.com', 'duckduckgo.com', 'lobste.rs', 'dev.to'];
const SCRS = ['desktop', 'desktop', 'desktop', 'mobile', 'mobile', 'tablet'];

// ip, country, weight (more active visitors)
const IPOOL = [
  ['49.36.1.10', 'IN', 1], ['103.21.58.1', 'IN', 1], ['152.58.0.1', 'IN', 1], ['27.0.0.1', 'IN', 1], ['14.139.0.1', 'IN', 0.7],
  ['8.8.8.8', 'US', 1], ['23.23.23.23', 'US', 1], ['52.0.0.1', 'US', 0.8], ['104.28.0.1', 'US', 0.9], ['151.101.0.1', 'US', 0.7],
  ['1.1.1.1', 'AU', 0.8], ['13.107.42.1', 'US', 0.7], ['77.88.8.8', 'RU', 0.7], ['62.210.0.1', 'FR', 0.8],
  ['88.198.0.1', 'DE', 0.8], ['5.45.192.0', 'NL', 0.7], ['31.13.24.1', 'IE', 0.7], ['203.0.113.5', 'SG', 0.8],
  ['114.119.10.1', 'MY', 0.7], ['194.66.0.1', 'GB', 0.8], ['91.198.174.192', 'GB', 0.7], ['200.1.1.1', 'BR', 0.7],
  ['196.10.1.1', 'ZA', 0.6], ['146.112.61.1', 'US', 0.7], ['93.184.216.34', 'US', 0.6], ['113.53.0.1', 'TH', 0.7]
];
const UAS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
];

// Deterministic pseudo-random
let seedN = 42;
const rnd = () => (seedN = (seedN * 1103515245 + 12345) % 2147483648) / 2147483648;
const pick = a => a[Math.floor(rnd() * a.length)];
const irnd = n => Math.floor(rnd() * n);

// visitor pool: ~1200 deterministic ip+ua combos
const POOL = [];
for (let i = 0; i < 1200; i++) {
  const [ip, cc] = IPOOL[i % IPOOL.length];
  POOL.push({ ip, cc, ua: UAS[irnd(UAS.length)], w: IPOOL[i % IPOOL.length][2] });
}

let total = 0, visitors = 0;
lib.db.prepare('DELETE FROM events WHERE site=?').run(SITE);
const now = new Date();
const todayStart = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
const nowHour = now.getUTCHours();
for (let d = DAYS - 1; d >= 0; d--) {
  const dayStart = todayStart - d * 86400000;
  const day = lib.dayKey(new Date(dayStart));
  const dow = new Date(dayStart).getUTCDay();
  const weekend = dow === 0 || dow === 6;
  // organic-ish volume: weekday up, weekend down, growth trend, occasional spikes
  let vol = 70 + rnd() * 40;
  if (weekend) vol *= 0.7;
  vol *= (1 + (DAYS - d) * 0.02); // stronger growth toward today: mixed green/red deltas vs prev window
  if (rnd() < 0.08) vol *= 1.7; // mild spike, keeps trends sane (no -55% shock deltas)
  const n = Math.round(vol);
  const daySessions = [];
  for (let v = 0; v < n; v++) {
    const p = POOL[irnd(POOL.length)];
    if (rnd() > p.w) continue; // weighted activity
    let hourSpan = 17;
    if (d === 0 && nowHour < 23) hourSpan = Math.max(0, nowHour - 6); // today: no future hours
    if (hourSpan < 1) continue;
    const dayTs = dayStart + (6 + rnd() * hourSpan) * 3600000;
    const nSess = rnd() < 0.7 ? 1 : 2;
    for (let si = 0; si < nSess; si++) {
      const sStart = dayTs + si * (30 + irnd(240)) * 60000;
      const nPv = rnd() < 0.55 ? 1 : 1 + irnd(4);
      let t = sStart;
      for (let pi = 0; pi < nPv; pi++) {
        daySessions.push({
          ip: p.ip, ua: p.ua, ts: t, sess: sStart,
          path: pick(PATHS), ref: pick(REFS), scr: pick(SCRS), cc: p.cc
        });
        t += 20 + irnd(150) * 1000; // 20s-2.5min between pageviews
      }
    }
  }
  for (const e of daySessions) {
    if (e.ts > now.getTime()) continue; // never backfill into the future
    lib.insertRow({
      site: SITE, ts: e.ts, sess: e.sess,
      visitor: lib.visitorHash(e.ip, e.ua, e.ts),
      path: e.path, ref: e.ref, scr: e.scr, country: e.cc
    });
  }
  total += daySessions.length;
  visitors += n;
}
const uv30 = lib.db.prepare('SELECT COUNT(DISTINCT visitor) c FROM events WHERE site=?').get(SITE).c;
console.log(`seeded ${total} events over ${DAYS} days (${visitors} visitor-days, ${uv30} unique visitors in 30d) for site "${SITE}"`);
