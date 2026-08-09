import React, { useEffect, useState } from 'react'
import OrigamiUnfold from './components/3d-text-unfold.tsx'
import MagneticButton from './components/magnetic-hover-button.tsx'
import AsciiImage from './components/ascii-reveal.tsx'
import ProximityHover from './components/reactivegrid.tsx'
import TextPath from './components/textpath.tsx'
import ElectricBorder from './components/ElectricBorder.tsx'
import DirectionHover from './components/DirectionHover.tsx'
import ScrollHighlight from './components/scroll-text-highlight.tsx'
import ShinyPill from './components/ShinyPill.tsx'
import SpotlightText from './components/SpotlightText.tsx'
import Globe from './components/globe.tsx'

const fmt = n => n.toLocaleString('en-US')
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
const SANS = 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'

function useLiveStats() {
  const [stats, setStats] = useState(null)
  const [live, setLive] = useState('0')
  useEffect(() => {
    let alive = true
    const tick = () =>
      fetch('/api/stats').then(r => r.ok ? r.json() : null).then(d => { if (d && alive) setStats(d) }).catch(() => {})
    fetch('/api/live').then(r => r.ok ? r.json() : null).then(d => { if (d && alive) setLive(d.n) }).catch(() => {})
    tick()
    const iv = setInterval(tick, 30000)
    return () => { alive = false; clearInterval(iv) }
  }, [])
  return { stats, live }
}

function CountUp({ to, dec = 0, suffix = '' }) {
  const [v, setV] = useState(0)
  const ref = React.useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || to == null) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(to); return }
    const io = new IntersectionObserver(es => {
      if (!es[0].isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const dur = 900
      ;(function tick(t) {
        const p = Math.min(1, (t - t0) / dur)
        setV(to * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(tick)
      })(t0)
    }, { threshold: .3 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  const txt = dec ? v.toFixed(dec) : fmt(Math.round(v))
  return <span ref={ref}>{txt}{suffix}</span>
}

function Stat({ label, value, dec = 0, suffix = '' }) {
  return (
    <div className="stat">
      <span className="sl">{label}</span>
      <span className="sv"><CountUp to={value} dec={dec} suffix={suffix} /></span>
    </div>
  )
}

const FEATURES = [
  { h: 'Cookieless by design', p: 'Visitor identity is a daily-rotating hash of IP and user agent, kept entirely server-side. No cookies, no consent banners, no fingerprinting.', mono: 'identity = hash(ip + ua + salt) / rotates daily' },
  { h: '353 B snippet', p: 'One line of JavaScript loaded from your own domain. It never touches a third-party server, ever.', mono: 'one line of JS / gzipped / server-relative' },
  { h: 'One process', p: 'Express, geoip-lite and SQLite in a single Node server. Nothing to orchestrate, no queue, no warehouse.', mono: 'node server.js / SQLite on disk' },
  { h: 'Realtime', p: 'The live counter and the daily chart update on every request. No batch jobs, no polling, no stale numbers.', mono: 'current visitors / updates per request' },
]

const STEPS = [
  { n: '1', h: 'Add the snippet', p: 'Paste one script tag into any page. It beacons back to wherever it was loaded from.' },
  { n: '2', h: 'Visit your site', p: 'Each request is counted as a real visit. No JavaScript is needed on the visitor side.' },
  { n: '3', h: 'Watch it live', p: 'The dashboard updates with current visitors, sources, pages and devices.' },
]

export default function App() {
  const { stats, live } = useLiveStats()
  const [countries, setCountries] = useState(null)

  useEffect(() => {
    let alive = true
    fetch('/api/countries').then(r => r.ok ? r.json() : null).then(d => { if (d && alive) setCountries(d.filter(c => c.lat != null)) }).catch(() => {})
    return () => { alive = false }
  }, [])
  const markers = (countries || []).map(c => ({ lat: c.lat, lng: c.lng }))

  return (
    <div className="page">
      <nav>
        <div className="nav-inner">
          <a className="brand" href="/"><i></i>peek</a>
          <div className="nav-links">
            <span className="chip" title="Visitors on the dashboard right now"><i></i><b>{live}</b> live</span>
            <a href="https://github.com/trippusultan/peek">GitHub</a>
            <a href="/dashboard">Dashboard</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg" aria-hidden="true"><ProximityHover particleColor="rgba(245,245,245,0.5)" backgroundColor="#0a0a0a" maxSize={22} minSize={8} gap={6} influence={240} /></div>
        <div className="hero-copy">
          <p className="eyebrow"><SpotlightText text="COOKIELESS WEB ANALYTICS" brightColor="#f5f5f5" dimColor="rgba(245,245,245,0.28)" maskSize={120} /></p>
          <OrigamiUnfold
            tag="h1"
            text="Website analytics without the cookies."
            color="#f5f5f5"
            font={{ fontFamily: SANS, fontWeight: 800, fontSize: 72, lineHeight: '1.02em', letterSpacing: '-0.045em', textAlign: 'left' }}
            stagger={0.022}
            startRotateY={-90}
            startOpacity={0}
            perspective={1400}
          />
          <p className="sub">One process, one snippet, zero tracking scripts. Real visitors, private by default.</p>
          <div className="hero-ctas">
            <MagneticButton label="View dashboard" link="/dashboard" fill="#f5f5f5" textColor="#0a0a0a" sweepColor="#e8e8e8" sweepTextColor="#0a0a0a" paddingX={26} paddingY={14} radius={8} border={false} font={{ fontFamily: SANS, fontWeight: 650, fontSize: 15, lineHeight: '1em', letterSpacing: '-0.01em', textAlign: 'left' }} />
            <a className="btn btn-ghost" href="https://github.com/trippusultan/peek">GitHub</a>
          </div>
        </div>
        <div className="hero-art" aria-label="The peek dashboard rendered as live ASCII art; move the cursor to reveal the real screenshot">
          <AsciiImage
            image="/peek-dashboard.png"
            columns={130}
            invert={false}
            contrast={1.1}
            inkColor="#f5f5f5"
            reveal
            revealOptions={{ size: 190, softness: 24 }}
            style={{ width: '100%', height: '100%', borderRadius: 16 }}
          />
        </div>
      </header>

      <section className="marquee" aria-hidden="true">
        <TextPath
          text="COOKIELESS WEB ANALYTICS"
          separator="  /  "
          textColor="rgba(245,245,245,0.16)"
          speed={1.4}
          reversed={false}
          waveFrequency={0.035}
          waveHeight={26}
          width="100%"
          height={110}
          className="mq"
        />
      </section>

      <section className="product container">
        <ElectricBorder color="#3a3a3a" glowColor="rgba(245,245,245,0.55)" glowIntensity={3} chaos={2.5} thickness={1.5} speed={0.8} borderRadius={18}>
          <div className="browser">
            <div className="b-bar">
              <span className="b-dot"></span><span className="b-dot"></span><span className="b-dot"></span>
              <span className="b-url">peek-a6sg.onrender.com/dashboard</span>
            </div>
            <img src="/peek-dashboard.png" alt="The peek dashboard: visitor trend chart, four KPI cards and a traffic table" width="1440" height="900" fetchpriority="high" />
          </div>
        </ElectricBorder>
        <p className="pcap">The live dashboard. Same screen behind the auth gate.</p>
      </section>

      <section className="stats">
        <div className="stats-inner">
          <Stat label="Current visitors" value={stats ? stats.live : 0} />
          <Stat label="Pageviews (7d)" value={stats ? stats.pv : 0} />
          <Stat label="Visitors (7d)" value={stats ? stats.uv : 0} />
          <Stat label="Bounce rate (7d)" value={stats ? stats.bounce : 0} dec={1} suffix="%" />
        </div>
      </section>

      <section className="features container">
        <h2>Built to ask for nothing.</h2>
        <div className="fgrid">
          {FEATURES.map((f, i) => (
            <div className="fcell" key={f.h}>
              <DirectionHover title={f.h} textColor="#f5f5f5" hoverColor="#f5f5f5" fontSize={19} fontWeight={700} duration={0.3} />
              <p>{f.p}</p>
              <div className="mono">{f.mono}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="how container">
        <h2>Live in three steps.</h2>
        <div className="steps">
          {STEPS.map(s => (
            <div className="step" key={s.n}>
              <span className="n">{s.n}</span>
              <div><h3>{s.h}</h3><p>{s.p}</p>
                {s.n === '1' && (
                  <pre className="code"><code>{'<script defer data-site="your-site-name" src="https://YOUR-RENDER-URL/s.js"></script>'}</code></pre>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="globe-section container">
        <h2>Traffic around the world.</h2>
        <div className="globe-wrap">
          <div className="globe" aria-label="3D globe with markers at the countries your visitors came from">
            <Globe
              speed={1.6}
              dots={{ color: '#3a3a3a', size: 5, density: 7, allDots: false }}
              fill="dots"
              fillColor="#f5f5f5"
              oceanColor="#0a0a0a"
              outlineColor="#2a2a2a"
              showOutline
              graticuleColor="#2e2e2e"
              showGrid
              markerConfig={{ markers, color: '#f5f5f5', size: 34 }}
              initialLatitude={20}
              initialLongitude={-10}
              stopOnHover
            />
          </div>
          <div className="country-list">
            {(countries || []).slice(0, 8).map((c, i) => (
              <div className="crow" key={c.code}>
                <span className="cn">{String(i + 1).padStart(2, '0')}</span>
                <span className="nm2">{c.name}</span>
                <span className="cv">{fmt(c.pv)}</span>
              </div>
            ))}
            {(!countries || countries.length === 0) && <p className="empty">No traffic yet. Visit the landing page to light up your first marker.</p>}
          </div>
        </div>
      </section>

      <section className="white">
        <div className="w-inner">
          <h2>Your data stays yours.</h2>
          <p className="w-statement">
            <ScrollHighlight text="No account, no cloud, no cookies, no third-party scripts. Every record lives in a SQLite file on your own server." dimColor="rgba(10,10,10,0.38)" highlightColor="#0a0a0a" splitBy="word" scrub />
          </p>
          <div className="w-cta">
            <ShinyPill text="View dashboard" link="/dashboard" textColor="#f5f5f5" shineColor="#0a0a0a" speed={1.8} style={{ background: '#0a0a0a', padding: '14px 30px', borderRadius: 8, fontSize: 16, fontWeight: 650 }} />
          </div>
          <figure className="w-phone">
            <img src="/peek-mobile.png" alt="The peek dashboard on a phone" width="390" height="844" loading="lazy" />
          </figure>
        </div>
      </section>

      <footer>
        <div className="foot">
          <span>peek - privacy-first analytics</span>
          <span>built by <a href="https://github.com/trippusultan">trippusultan</a></span>
        </div>
      </footer>
    </div>
  )
}
