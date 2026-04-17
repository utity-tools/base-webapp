import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#111111',
        color: 'rgba(255,255,255,0.5)',
        padding: '64px 32px 32px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 48,
          marginBottom: 64,
        }}
      >
        <div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.03em',
              marginBottom: 12,
            }}
          >
            ◆ utity ®
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, maxWidth: 240 }}>
            Agencia 360 para marcas que toman en serio su historia.
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            ESTUDIO
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { to: '/works', label: 'Works' },
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            CONTACTO
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
            <a
              href="mailto:hello@utityagency.com"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            >
              hello@utityagency.com
            </a>
            <a
              href="tel:+5493510000000"
              style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            >
              +54 9 351 000 0000
            </a>
            <Link
              to="/contact"
              style={{
                color: 'white',
                textDecoration: 'underline',
                textUnderlineOffset: 4,
              }}
            >
              Comenzar proyecto ↗
            </Link>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 20,
              fontWeight: 600,
            }}
          >
            REDES
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
            {['Instagram', 'LinkedIn', 'Behance', 'Are.na'].map((social) => (
              <a
                key={social}
                href="#"
                style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: 24,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: 'rgba(255,255,255,0.08)',
            letterSpacing: '-0.03em',
          }}
        >
          utity®
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', textAlign: 'center' }}>
          © 2026 UTITY AGENCY · ALL RIGHTS RESERVED
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          CBA · MAD · REMOTO
        </div>
      </div>
    </footer>
  )
}
