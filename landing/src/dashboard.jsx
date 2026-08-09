// frontend-patterns rebuild: the Peek dashboard as a React app.
// useQuery (data), compound Tabs (traffic), composition, React.memo, ErrorBoundary.
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useQuery } from './hooks.js'
import { Tabs, TabList, Tab } from './components/Tabs.jsx'
import { ErrorBoundary } from './components/ErrorBoundary.jsx'
import './dash.css'

const fmt = n => n.toLocaleString('en-US')
const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

// ---- composition: KpiCard -------------------------------------------------
const KpiCard = React.memo(function KpiCard({ kpi, first }) {
  const { dir, pct } = kpi.trend
  const arrow = dir === 'up' ? '\u25B2' : dir === 'down' ? '\u25BC' : ''
  return (
    <div className={`kpi${first ? ' hl' : ''}`}>
      <h3>{kpi.label}</h3>
      <div className="valrow">
        <div className="num">{kpi.val}</div>
        {dir !== 'flat' && <span className={`tr ${dir}`}>{arrow} {pct}%</span>}
      </div>
    </div>
  )
})

// ---- chart (SVG, memoized) ------------------------------------------------
const Chart = React.memo(function Chart({ points, mode }) {
  const W = 900, H = 244, padL = 56, padR = 28, padT = 14, padB = 38
  const iw = W - padL - padR, ih = H - padT - padB
  const max = Math.max(1, ...points.map(p => p.uv))
  const step = max > 0 ? Math.ceil(max / 4) : 1
  const X = i => points.length === 1 ? padL + iw / 2 : padL + (i / (points.length - 1)) * iw
  const Y = v => padT + ih - (v / max) * ih
  const d = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${X(i)} ${Y(p.uv)}`).join(' ')
  const area = points.length ? `${d} L ${X(points.length - 1)} ${padT + ih} L ${X(0)} ${padT + ih} Z` : ''
  const every = Math.max(1, Math.ceil(points.length / 6))
  return (
    <svg className="chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Visitors per day">
      <line x1={padL} y1={padT} x2={padL} y2={padT + ih} stroke="#2a2a2a" strokeWidth="1" />
      {[0, 1, 2, 3, 4].map(g => {
        const v = step * g
        return (
          <g key={g}>
            <line x1={padL} y1={Y(v)} x2={W - padR} y2={Y(v)} stroke="#2a2a2a" strokeWidth="1" />
            <text x={padL - 9} y={Y(v) + 4} textAnchor="end" fontSize="12" fill="#a3a3a3">{fmt(v)}</text>
          </g>
        )
      })}
      {area && <path d={area} fill="url(#dashFill)" />}
      {d && <path d={d} fill="none" stroke="#f5f5f5" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />}
      {points.map((p, i) => i % every === 0 && (
        <text key={i} x={X(i)} y={H - 14} textAnchor="middle" fontSize="12" fill="#a3a3a3">{p.label}</text>
      ))}
      <defs>
        <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5f5f5" stopOpacity="0.32" />
          <stop offset="1" stopColor="#f5f5f5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
})

// ---- table rows (memoized per row) ----------------------------------------
const Row = React.memo(function Row({ row, glyph, top }) {
  return (
    <tr className={top ? 'top' : ''}>
      <td>
        <span className="bar" style={{ width: `${row.pct}%` }} />
        <span className="mono" style={glyph}>{row.name[0].toUpperCase()}</span>
        <span className="nm">{row.name}</span>
      </td>
      <td className="n">{fmt(row.count)}</td>
    </tr>
  )
})

const TINTS = [
  ['#242424', '#f5f5f5'], ['#1e1e1e', '#d4d4d4'], ['#2c2c2c', '#e8e8e8'],
  ['#181818', '#c0c0c0'], ['#303030', '#ededed'], ['#141414', '#b5b5b5']
]

// ---- app ------------------------------------------------------------------
function Dashboard() {
  const [range, setRange] = useState('7d')
  const [tab, setTab] = useState('sources')

  const fetcher = useCallback(
    () => fetch(`/api/dashboard?range=${range}&tab=${tab}`).then(r => {
      if (!r.ok) throw new Error(r.status === 401 ? 'Unauthorized' : `HTTP ${r.status}`)
      return r.json()
    }),
    [range, tab]
  )
  const { data, loading, error, refetch } = useQuery(`dash:${range}:${tab}`, fetcher)

  const [live, setLive] = useState('0')
  useEffect(() => {
    let alive = true
    const tick = () => fetch('/api/live').then(r => r.ok ? r.json() : null).then(d => { if (d && alive) setLive(d.n) }).catch(() => {})
    tick()
    const iv = setInterval(tick, 30000)
    return () => { alive = false; clearInterval(iv) }
  }, [])

  const table = data?.table
  const maxNameWidth = useMemo(() => table?.rows.length ? Math.max(...table.rows.map(r => r.name.length)) : 0, [table])

  return (
    <div className="wrap">
      <div className="brand"><span className="mark">P</span>Peek</div>
      {error ? (
        <div className="empty">Failed to load: {error.message} <button onClick={refetch}>Retry</button></div>
      ) : (
        <>
          <div className="sitebar">
            <div className="sitename">{data?.site || '\u00A0'} <span className="live"><i></i>{live} current visitors</span></div>
            <nav className="ranges" aria-label="Date range">
              {data?.ranges.map(r => (
                <a key={r.k} href={`?range=${r.k}`} className={r.on ? 'on' : ''} onClick={e => { e.preventDefault(); setRange(r.k) }}>{r.label}</a>
              ))}
            </nav>
          </div>

          <div className="kpis">
            {data?.kpis.map((k, i) => <KpiCard key={k.label} kpi={k} first={i === 0} />)}
            {!data && loading && [0, 1, 2, 3].map(i => <div className="kpi sk" key={i} />)}
          </div>

          <div className="card">
            <h2>Visitors per day</h2>
            {data?.chart && <Chart points={data.chart.points} mode={data.chart.mode} />}
          </div>

          <div className="card">
            <div className="cardhead">
              <h2>Traffic</h2>
              <Tabs defaultTab={tab} onTabChange={setTab}>
                <TabList>
                  {data?.tabs.map(t => <Tab key={t.k} id={t.k}>{t.label}</Tab>)}
                </TabList>
              </Tabs>
            </div>
            {table?.rows.length ? (
              <table>
                <thead><tr><th>{table.headers[0]}</th><th>{table.headers[1]}</th></tr></thead>
                <tbody>
                  {table.rows.map((r, i) => (
                    <Row key={r.name} row={r} top={i === 0} glyph={{ background: TINTS[i % TINTS.length][0], borderColor: TINTS[i % TINTS.length][0], color: TINTS[i % TINTS.length][1] }} />
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="empty">Nothing yet</div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Dashboard />
    </ErrorBoundary>
  </React.StrictMode>
)
