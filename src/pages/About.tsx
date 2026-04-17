import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import TextureCard from '../components/TextureCard'
import FadeUp from '../components/FadeUp'
import { team, awards, values } from '../data'

export default function About() {
  return (
    <div>

      {/* Header */}
      <section style={{ padding: '80px 32px 64px' }}>
        <SectionBadge label="• ABOUT" />
        <FadeUp>
          <div
            style={{
              fontSize: 'clamp(60px, 12vw, 120px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: 'var(--heading)',
              margin: '24px 0 28px',
            }}
          >
            utity®
          </div>
        </FadeUp>
        <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--text)', maxWidth: 560, marginBottom: 40 }}>
          Somos un equipo pequeño movido por la curiosidad y la artesanía. Creemos en marcas útiles — de ahí el nombre.
        </p>

        {/* Team indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ display: 'flex' }}>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: ['#ede8df', '#c5b49e', '#d6d2cc', '#a8bfb8', '#e0d5c8'][i],
                  border: '2px solid var(--bg)',
                  marginLeft: i > 0 ? -10 : 0,
                }}
              />
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600 }}>
              CORE TEAM
            </div>
            <div style={{ fontSize: 13, color: 'var(--text)', marginTop: 2 }}>
              12 personas · 4 disciplinas
            </div>
          </div>
        </div>
      </section>

      {/* Studio shot */}
      <div style={{ padding: '0 32px' }}>
        <TextureCard color="#d6d2cc" height={480} label="STUDIO SHOT · CBA 2024" />
      </div>

      {/* How we work */}
      <section style={{ padding: '80px 32px' }}>
        <div
          style={{
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            fontWeight: 600,
            marginBottom: 40,
          }}
        >
          CÓMO TRABAJAMOS
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
          {values.map((v, index) => (
            <FadeUp key={v.title} delay={index * 0.08}>
              <div
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: 'var(--heading)',
                    marginBottom: 10,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text)' }}>
                  {v.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Team */}
      <section
        style={{
          padding: '80px 32px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <SectionBadge label="• EQUIPO" />
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--heading)',
            margin: '20px 0 48px',
          }}
        >
          Personas detrás del trabajo.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {team.map((member, index) => (
            <FadeUp key={member.name} delay={index * 0.07}>
              <div>
                <TextureCard color={member.color} height={180} style={{ marginBottom: 12 }} />
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--heading)' }}>
                  {member.name}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text)', marginTop: 3 }}>
                  {member.role}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section
        style={{
          padding: '80px 32px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <SectionBadge label="• TESTIMONIO" />
        <blockquote
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            color: 'var(--heading)',
            margin: '24px 0 32px',
            maxWidth: 680,
          }}
        >
          "Pasamos de 40 conversiones al mes a 340 en un trimestre. Sin sacrificar la estética, que era mi miedo."
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              backgroundColor: '#a8bfb8',
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--heading)' }}>
              Lucas Pereira
            </div>
            <div style={{ fontSize: 12, color: 'var(--text)', marginTop: 2 }}>
              Founder · Órbita Pay
            </div>
          </div>
        </div>
        <TextureCard color="#a8bfb8" height={360} label="ÓRBITA PAY · GROWTH CAMPAIGN" />
      </section>

      {/* Awards */}
      <section
        style={{
          padding: '80px 32px',
          borderTop: '1px solid var(--border)',
        }}
      >
        <SectionBadge label="• RECONOCIMIENTO" />
        <h2
          style={{
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: 'var(--heading)',
            margin: '20px 0 40px',
          }}
        >
          Premios & menciones.
        </h2>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {awards.map((a, index) => (
            <FadeUp key={a.award} delay={index * 0.08}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr auto',
                  gap: 24,
                  padding: '20px 0',
                  borderBottom: '1px solid var(--border)',
                  alignItems: 'center',
                }}
              >
                <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--heading)' }}>
                  {a.award}
                </span>
                <span style={{ fontSize: 14, color: 'var(--text)' }}>
                  {a.project}
                </span>
                <span style={{ fontSize: 13, color: 'var(--text)', letterSpacing: '0.04em' }}>
                  {a.year}
                </span>
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
