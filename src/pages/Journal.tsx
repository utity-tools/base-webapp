import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import SectionBadge from '../components/SectionBadge'
import TextureCard from '../components/TextureCard'
import { journalPosts } from '../data'

export default function Journal() {
  return (
    <div>
      <Nav pageName="JOURNAL" pageNumber="06" />

      <section style={{ padding: '80px 32px 64px' }}>
        <SectionBadge label="• JOURNAL" />
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
          Notas del estudio.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text)', maxWidth: 520 }}>
          Ensayos, experimentos y aprendizajes en público. Publicamos cuando tenemos algo que decir — no por calendario editorial.
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 24,
          padding: '0 32px 80px',
        }}
      >
        {journalPosts.map((post) => (
          <article key={post.slug}>
            <TextureCard color={post.color} height={280} style={{ marginBottom: 20 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <SectionBadge label={`• ${post.category}`} />
              <span style={{ fontSize: 11, color: 'var(--text)', letterSpacing: '0.08em' }}>
                {post.readTime}
              </span>
            </div>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                color: 'var(--heading)',
                cursor: 'pointer',
              }}
            >
              {post.title}
            </h2>
          </article>
        ))}
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
