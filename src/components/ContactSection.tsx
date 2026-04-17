import { useState } from 'react'
import SectionBadge from './SectionBadge'

const serviceOptions = ['Branding', 'Web', 'Paid Media', 'Social', 'SEO', 'Strategy']
const budgetOptions = ['< 10k', '10–30k', '30–80k', '80k+']

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedBudget, setSelectedBudget] = useState<string>('')

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    padding: '12px 0',
    color: 'white',
    fontSize: 16,
    outline: 'none',
    fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    color: 'rgba(255,255,255,0.35)',
    fontWeight: 600,
    display: 'block',
    marginBottom: 4,
    marginTop: 32,
  }

  return (
    <section
      style={{
        backgroundColor: '#111111',
        borderRadius: 16,
        padding: '64px 48px',
        margin: '64px 32px',
        color: 'rgba(255,255,255,0.6)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <SectionBadge label="• CONTACTO" dark />
          <h2
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.03em',
              margin: '24px 0 16px',
              lineHeight: 1.1,
            }}
          >
            Contemos una buena historia.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 40 }}>
            Respondemos en menos de 24h hábiles. Si tu proyecto no encaja, te diremos con quién sí — prometido.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
            <a
              href="mailto:hello@utityagency.com"
              style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
            >
              hello@utityagency.com
            </a>
            <a
              href="tel:+5493510000000"
              style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
            >
              +54 9 351 000 0000
            </a>
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>
              Rivadavia 512, Córdoba · Gran Vía 30, Madrid
            </p>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <label style={labelStyle}>NOMBRE</label>
          <input style={inputStyle} type="text" placeholder="Tu nombre" />

          <label style={labelStyle}>EMAIL</label>
          <input style={inputStyle} type="email" placeholder="tu@empresa.com" />

          <label style={labelStyle}>EMPRESA</label>
          <input style={inputStyle} type="text" placeholder="Compañía / Proyecto" />

          <label style={labelStyle}>SERVICIOS QUE TE INTERESAN</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
            {serviceOptions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => toggleService(s)}
                style={{
                  border: `1px solid ${selectedServices.includes(s) ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)'}`,
                  borderRadius: 9999,
                  padding: '6px 14px',
                  fontSize: 12,
                  background: selectedServices.includes(s) ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: selectedServices.includes(s) ? 'white' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s',
                }}
              >
                {s}
              </button>
            ))}
          </div>

          <label style={labelStyle}>PRESUPUESTO ESTIMADO (USD)</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
            {budgetOptions.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBudget(selectedBudget === b ? '' : b)}
                style={{
                  border: `1px solid ${selectedBudget === b ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)'}`,
                  borderRadius: 9999,
                  padding: '6px 14px',
                  fontSize: 12,
                  background: selectedBudget === b ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: selectedBudget === b ? 'white' : 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.15s',
                }}
              >
                {b}
              </button>
            ))}
          </div>

          <label style={labelStyle}>CUÉNTANOS DEL PROYECTO</label>
          <textarea
            style={{
              ...inputStyle,
              resize: 'none',
              minHeight: 100,
              borderBottom: '1px solid rgba(255,255,255,0.15)',
            }}
            placeholder="Qué te gustaría construir…"
          />

          <button
            type="submit"
            style={{
              marginTop: 32,
              width: '100%',
              background: 'white',
              color: '#0d0d0d',
              border: 'none',
              borderRadius: 9999,
              padding: '16px 32px',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
              letterSpacing: '-0.01em',
            }}
          >
            Enviar mensaje ↗
          </button>
        </form>
      </div>
    </section>
  )
}
