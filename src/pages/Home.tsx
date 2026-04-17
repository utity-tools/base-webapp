import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import TextureCard from '../components/TextureCard'
import FadeUp from '../components/FadeUp'
import { projects, stats } from '../data'

export default function Home() {
  const heroProjects = projects.slice(0, 3)
  const secondRowProjects = projects.slice(3, 5)

  return (
    <div>

      {/* Hero */}
      <section style={{ padding: '80px 32px 64px' }}>
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            fontSize: 'clamp(52px, 8vw, 88px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.0,
            color: 'var(--heading)',
            maxWidth: 700,
            marginBottom: 24,
          }}
        >
          Agencia 360 con foco en lo esencial.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          style={{
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--text)',
            marginBottom: 32,
          }}
        >
          CÓRDOBA · MADRID · REMOTO · EST. 2019
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <Link
            to="/contact"
            style={{
              fontSize: 15,
              color: 'var(--heading)',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              fontWeight: 500,
            }}
          >
            Comenzar proyecto ↗
          </Link>
        </motion.div>

        {/* Project cards row 1 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginTop: 64,
          }}
        >
          {heroProjects.map((p, index) => (
            <FadeUp key={p.slug} delay={index * 0.1}>
              <Link to={`/works/${p.slug}`} style={{ textDecoration: 'none' }}>
                <TextureCard color={p.color} label={p.name} aspectRatio="4/3" />
              </Link>
            </FadeUp>
          ))}
        </div>

        {/* Project cards row 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            marginTop: 16,
          }}
        >
          {secondRowProjects.map((p, index) => (
            <FadeUp key={p.slug} delay={index * 0.1}>
              <Link to={`/works/${p.slug}`} style={{ textDecoration: 'none' }}>
                <TextureCard color={p.color} label={p.name} aspectRatio="16/7" />
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '64px 32px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }}
      >
        {stats.map((s, index) => (
          <FadeUp key={s.number} delay={index * 0.1}>
            <div>
              <div
                style={{
                  fontSize: 64,
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color: 'var(--heading)',
                  lineHeight: 1,
                  marginBottom: 12,
                }}
              >
                {s.number}
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text)' }}>
                {s.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Services intro */}
      <section
        style={{
          padding: '80px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'start',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div>
          <SectionBadge label="• SERVICIOS" />
          <FadeUp>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginTop: 20,
                color: 'var(--heading)',
              }}
            >
              Todo lo que necesita una marca viva.
            </h2>
          </FadeUp>
        </div>
        <div style={{ paddingTop: 8 }}>
          <FadeUp delay={0.1}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text)' }}>
              Somos una agencia 360: estrategia, identidad, producción y media bajo un mismo techo. Sin ping-pong entre proveedores. Sin reuniones para coordinar reuniones.
            </p>
            <Link
              to="/services"
              style={{
                display: 'inline-block',
                marginTop: 24,
                fontSize: 14,
                color: 'var(--heading)',
                textDecoration: 'underline',
                textUnderlineOffset: 4,
                fontWeight: 500,
              }}
            >
              Ver servicios ↗
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '80px 32px' }}>
        <div style={{ marginBottom: 32 }}>
          <SectionBadge label="• TESTIMONIO" />
        </div>
        <FadeUp>
          <blockquote
            style={{
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              color: 'var(--heading)',
              margin: '0 0 32px',
              maxWidth: 750,
            }}
          >
            "Se tomaron el tiempo de entender nuestra marca como si fueran parte del equipo. El resultado habla solo."
          </blockquote>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: '#d6d2cc',
                flexShrink: 0,
              }}
            />
            <div>
              <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--heading)' }}>
                Carla Mendes
              </div>
              <div style={{ fontSize: 12, color: 'var(--text)', marginTop: 2 }}>
                Art Director · Lumen Skin
              </div>
            </div>
          </div>
        </FadeUp>
        <TextureCard color="#ede8df" height={400} label="LUMEN SKIN · ART DIRECTION" />
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
