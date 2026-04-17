import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import FadeUp from '../components/FadeUp'
import { services, processSteps } from '../data'

export default function Services() {
  return (
    <div>

      {/* Header */}
      <section style={{ padding: '80px 32px 64px' }}>
        <SectionBadge label="• SERVICIOS" />
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
          Un estudio. Seis disciplinas.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text)', maxWidth: 560 }}>
          Diseñamos, producimos y medimos bajo un mismo techo. Eso significa menos reuniones, briefs más cortos y ejecuciones consistentes entre canales.
        </p>
      </section>

      {/* Services grid */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 0,
          borderTop: '1px solid var(--border)',
        }}
      >
        {services.map((s, i) => (
          <FadeUp key={s.name} delay={i * 0.1}>
            <div
              style={{
                padding: '40px 32px',
                border: '1px solid var(--border)',
                borderTop: 'none',
                borderLeft: i % 2 === 0 ? 'none' : '1px solid var(--border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 24,
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
                  {s.number}
                </span>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 18,
                    color: 'var(--text)',
                    cursor: 'pointer',
                  }}
                >
                  +
                </span>
              </div>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--heading)',
                  marginBottom: 12,
                }}
              >
                {s.name}
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text)' }}>
                {s.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Process */}
      <section style={{ padding: '80px 32px' }}>
        <SectionBadge label="• PROCESO" />
        <FadeUp>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: 'var(--heading)',
              margin: '20px 0 16px',
            }}
          >
            Pasos simples para llegar lejos.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text)', maxWidth: 500, marginBottom: 48 }}>
            No perdemos tu tiempo en iteraciones infinitas — trabajamos en sprints semanales con entregas reales.
          </p>
        </FadeUp>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}
        >
          {processSteps.map((step, i) => (
            <FadeUp key={step.badge} delay={i * 0.1}>
              <div
                style={{
                  background: '#f0ede8',
                  borderRadius: 12,
                  padding: '36px 32px',
                }}
              >
                <SectionBadge label={step.badge} />
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--heading)',
                    margin: '16px 0 10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text)' }}>
                  {step.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
