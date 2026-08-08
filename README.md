# Peek

Privacy-first web analytics for personal sites. A cookieless, sub-2KB JavaScript
snippet beacons pageviews to a single-process Node server that hashes visitors
daily, never stores raw IPs, sessionizes with a 30-minute idle cutoff, and serves
a dark basic-auth dashboard with inline-SVG charts.

Built as a judged exercise: the dashboard was iterated against Plausible's own
live public dashboard (plausible.io/plausible.io) until blind critics picked
ours. Verdict logs in `progress.json` history / `refs/`.

## Honest ceiling

This is a personal-site tool, not Plausible. At serious traffic (say, tens of
thousands of pageviews per day) the in-memory session map, single-process
design, and geoip-lite lookup stop scaling, and you should self-host the real
[Plausible](https://plausible.io) instead. Peek exists to give a personal site
its own private analytics with zero external requests and a handful of files.

## What gets stored

Per event, one row in SQLite: site, UTC day, timestamp, a **daily-rotating
visitor hash**, session start, path, referrer host, screen class, country.

Never stored: raw IP addresses, full user agents, referrer URLs (only the host),
query strings, cookies, fingerprints. The visitor hash is
`HMAC-SHA256(daySalt, ip|ua)` where `daySalt` derives from `SALT` plus the
calendar date, so the same visitor produces a *different* hash every day and
cannot be correlated across days. Raw IP and UA are consumed by the hash and
discarded.

Obvious bots (crawlers, curl, headless browsers, monitoring agents) are dropped
by user-agent regex before anything is written, and get the same 204 response
as real visitors so the filter is not detectable.

## Quickstart

```bash
cp .env.example .env   # set DASH_USER / DASH_PASS / SALT
npm install
npm run seed           # optional: 30 days of demo traffic for the dashboard
npm start              # one process on :8000
```

Add the snippet to any page, pointing `src` at the Peek host:

```html
<script defer src="https://analytics.example.com/s.js" data-site="demo"></script>
```

The snippet beacons path, referrer host, screen class (mobile/tablet/desktop)
and site id via an image GET. No cookies, no localStorage, no fingerprinting.
It fires once per page load (no SPA route tracking yet; add it if your site is
a single-page app).

Dashboard: http://localhost:8000/dashboard (basic auth). Ranges: today / 7d / 30d.

## Privacy properties

| Property | How |
| --- | --- |
| No cookies | snippet uses a bare `<img>` GET |
| No raw IP stored | hashed with a per-day salt, then discarded |
| No cross-day correlation | hash changes daily by construction |
| No user agent stored | consumed by the hash, never persisted |
| Bounce rate | sessions with exactly one pageview / all sessions |
| Sessionization | server-side idle cutoff of 30 minutes (in-memory) |

Known privacy ceilings, stated honestly: (1) the operator of this instance can
correlate a visitor across *their own* sites (same IP+UA hashes identically on
the same day) - fine for a personal site, not a shared service; (2) the
visitor hash is daily, so 30-day unique counts are per-day uniques summed by
SQLite's `COUNT(DISTINCT)` semantics only within a day; (3) `trust proxy` is
set to `loopback` so a reverse proxy on the same host (nginx/caddy) is honored
but remote `X-Forwarded-For` spoofing is rejected.

## Checks

```bash
npm test
```

Verifies: snippet gzip size < 2 KB, daily hash rotation, bot filtering,
30-minute session cutoff, bounce math, no ip/ua columns in the schema,
HTTP ingest (204, country resolution, silent bot drop), and dashboard auth.

## Measured against the bar

| Metric | Peek | Plausible (plausible.io) |
| --- | --- | --- |
| Snippet, gzipped | see `npm test` output (target < 2 KB) | ~1 KB |
| Dashboard TTFB (same connection, localhost vs public host) | see `refs/measure.txt` | measured |

The dashboard is compared blind against plausible.io/plausible.io at desktop
(1440x900) and mobile (390x844) in `refs/`. Screenshot ours with:

```bash
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu \
  --user-data-dir=/tmp/p1 --window-size=1440,900 --virtual-time-budget=8000 \
  --screenshot="C:/Users/Spoidy/peek/refs/ours-desktop.png" \
  "http://admin:peek-admin-2026@localhost:8000/dashboard?range=7d"
```

## Files

```
lib.js               core: db, hash, bot filter, sessions, queries, SVG chart
server.js            one process: snippet, ingest, dashboard, progress
public/snippet.js    the client snippet (minified)
views/dashboard.html dark dashboard template
views/progress.html  live build-progress page (served at /progress)
seed.js              backfill demo traffic through the real hash + session rules
test.mjs             self-check
progress.json        live state for /progress
```
