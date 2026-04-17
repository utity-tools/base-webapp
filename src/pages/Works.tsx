import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import FadeUp from '../components/FadeUp'
import { projects } from '../data'

export default function Works() {
  return (
    <div>

      <section style={{ padding: '80px 32px 64px' }}>
        <SectionBadge label="• PORTAFOLIO SELECTO" />
        <h1
          style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: 'var(--heading)',
            margin: '24px 0 20px',
          }}
        >
          Proyectos que salieron al mundo.
        </h1>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: 'var(--text)',
            maxWidth: 560,
          }}
        >
          Una selección curada de los últimos 24 meses. Cada uno empezó con una conversación de dos horas y un café.
        </p>
      </section>

      <section style={{ borderTop: '1px solid var(--border)' }}>
        {projects.map((p, index) => (
          <FadeUp key={p.slug} delay={index * 0.08}>
            <Link
              to={`/works/${p.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 48px',
                alignItems: 'center',
                gap: 24,
                padding: '28px 32px',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#f5f3ef'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  color: 'var(--text)',
                  fontWeight: 500,
                }}
              >
                {p.number}
              </span>
              <span
                style={{
                  fontSize: 'clamp(22px, 3vw, 36px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--heading)',
                }}
              >
                {p.name}
              </span>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  color: 'var(--heading)',
                  flexShrink: 0,
                }}
              >
                ↗
              </span>
            </Link>
          </FadeUp>
        ))}
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
