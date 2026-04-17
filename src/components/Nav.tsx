import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'

const links = [
  { label: 'Works', to: '/works' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        height: 56,
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: 800,
          fontSize: 15,
          letterSpacing: '-0.02em',
          color: 'var(--heading)',
          textDecoration: 'none',
        }}
      >
        utity®
      </Link>

      <ul
        style={{
          display: 'flex',
          gap: 4,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map(({ label, to }) => {
          const active = pathname === to || (to !== '/' && pathname.startsWith(to))
          return (
            <li key={to}>
              <Link
                to={to}
                style={{
                  display: 'block',
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--heading)' : 'var(--text)',
                  background: active ? 'var(--border)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                }}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      <Link
        to="/contact"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 18px',
          borderRadius: 999,
          background: 'var(--heading)',
          color: '#fff',
          fontSize: 13,
          fontWeight: 500,
          textDecoration: 'none',
        }}
      >
        Comenzar proyecto <span style={{ fontSize: 16 }}>↗</span>
      </Link>
    </motion.nav>
  )
}
