import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import FadeUp from '../components/FadeUp'

export default function Contact() {
  return (
    <div>

      <section style={{ padding: '80px 32px 64px' }}>
        <SectionBadge label="• CONTACTO" />
        <FadeUp>
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
            Empecemos una conversación.
          </h1>
        </FadeUp>
        <FadeUp delay={0.15}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text)', maxWidth: 520 }}>
            Respondemos en menos de 24h hábiles. No mandes "hola ¿estás?" — cuéntanos del proyecto directo.
          </p>
        </FadeUp>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
