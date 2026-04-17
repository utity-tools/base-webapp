import { useParams, Link, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import TextureCard from '../components/TextureCard'
import { projects } from '../data'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/works" replace />

  const nextProject = projects.find((p) => p.slug === project.nextSlug)

  return (
    <div>


      {/* Header */}
      <section style={{ padding: '80px 32px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <SectionBadge label="• CASE STUDY" />
            <h1
              style={{
                fontSize: 'clamp(40px, 7vw, 80px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.0,
                color: 'var(--heading)',
                margin: '20px 0 16px',
              }}
            >
              {project.name}
            </h1>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text)', maxWidth: 480 }}>
              {project.description}
            </p>
          </div>
          <a
            href="#"
            style={{
              fontSize: 14,
              color: 'var(--heading)',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              fontWeight: 500,
              whiteSpace: 'nowrap',
              paddingTop: 8,
            }}
          >
            Visitar sitio ↗
          </a>
        </div>

        {/* Meta */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            marginTop: 48,
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          {[
            { label: 'DURACIÓN', value: project.duration },
            { label: 'INDUSTRIA', value: project.industry },
            { label: 'CLIENTE', value: project.client },
          ].map(({ label, value }, i) => (
            <div
              key={label}
              style={{
                padding: '20px 0',
                paddingLeft: i > 0 ? 24 : 0,
                borderLeft: i > 0 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {label}
              </div>
              <div style={{ fontWeight: 600, color: 'var(--heading)', fontSize: 15 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hero image */}
      <div style={{ padding: '0 32px' }}>
        <TextureCard color={project.color} height={500} label="HERO · BRAND IDENTITY" />
      </div>

      {/* Art direction 2-col */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          padding: '16px 32px',
        }}
      >
        <TextureCard color={project.color} height={320} label="ART DIRECTION · 01" />
        <TextureCard color={project.color} height={320} label="BRAND · 02" />
      </div>

      {/* El Desafío */}
      <section
        style={{
          padding: '80px 32px',
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: 48,
          borderTop: '1px solid var(--border)',
        }}
      >
        <div>
          <span
            style={{
              fontSize: 10,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text)',
              fontWeight: 600,
            }}
          >
            EL DESAFÍO
          </span>
        </div>
        <p
          style={{
            fontSize: 'clamp(18px, 2.5vw, 26px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.4,
            color: 'var(--heading)',
            margin: 0,
          }}
        >
          {project.name} venía de un proceso de reposicionamiento que no llegó a aterrizar. Construimos una plataforma de marca nueva, desarrollamos el sitio, y corrimos la primera campaña — todo en {project.duration}.
        </p>
      </section>

      {/* Full-bleed */}
      <div style={{ padding: '0 32px' }}>
        <TextureCard color={project.color} height={460} label="FULL-BLEED SHOT" />
      </div>

      {/* Testimonial */}
      <section style={{ padding: '80px 32px' }}>
        <SectionBadge label="• TESTIMONIO" />
        <blockquote
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            color: 'var(--heading)',
            margin: '24px 0 32px',
            maxWidth: 640,
          }}
        >
          "Se tomaron el tiempo de entender nuestra marca como si fueran parte del equipo. El resultado habla solo."
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
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
      </section>

      {/* Next project */}
      {nextProject && (
        <section
          style={{
            padding: '0 32px 80px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 48,
              alignItems: 'center',
              paddingTop: 48,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                PRÓXIMO PROYECTO
              </div>
              <Link
                to={`/works/${nextProject.slug}`}
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  color: 'var(--heading)',
                  textDecoration: 'underline',
                  textUnderlineOffset: 6,
                }}
              >
                {nextProject.name} ↗
              </Link>
            </div>
            <Link to={`/works/${nextProject.slug}`} style={{ textDecoration: 'none' }}>
              <TextureCard color={nextProject.color} height={240} />
            </Link>
          </div>
        </section>
      )}

      <ContactSection />
      <Footer />
    </div>
  )
}
