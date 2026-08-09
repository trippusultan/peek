// Navbar — adapted from 21st.dev "Navbar Section 2" (solaceui, xAI-style):
// same animated mega-menu mechanics (spring height expand, chevron rotate,
// AnimatePresence panel), re-skinned to peek's matte B&W with real content.
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const NAV = [
  { label: 'Product', panel: 'product' },
  { label: 'GitHub', href: 'https://github.com/trippusultan/peek' },
  { label: 'Dashboard', href: '/dashboard' },
]

const PRODUCT_ITEMS = [
  { title: 'Cookieless by design', desc: 'Daily-rotating identity hash. No cookies, no banners.' },
  { title: '353 B snippet', desc: 'One line of JS from your own domain, gzipped.' },
  { title: 'One process', desc: 'Express, geoip-lite and SQLite in a single server.' },
  { title: 'Realtime', desc: 'Live counter and daily chart update per request.' },
]

export default function Navbar({ live }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav21">
      <div className="nav21-inner">
        <a className="brand" href="/"><i></i>peek</a>

        <div className="nav21-center">
          {NAV.map(item => item.panel ? (
            <div className="nav21-item" key={item.label}>
              <button
                className={`nav21-link${open ? ' on' : ''}`}
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
              >
                {item.label}
                <ChevronDown className={`nav21-chev${open ? ' rot' : ''}`} size={14} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <a className="nav21-link" key={item.label} href={item.href}>{item.label}</a>
          ))}
        </div>

        <div className="nav21-right">
          <span className="chip" title="Visitors on the dashboard right now"><i></i><b>{live}</b> live</span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav21-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="nav21-panel-inner">
              {PRODUCT_ITEMS.map(item => (
                <a className="nav21-card" href="/#features" key={item.title}>
                  <span className="nav21-card-t">{item.title}</span>
                  <span className="nav21-card-d">{item.desc}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
