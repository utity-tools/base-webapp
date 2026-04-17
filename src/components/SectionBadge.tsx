interface SectionBadgeProps {
  label: string
  dark?: boolean
}

export default function SectionBadge({ label, dark = false }: SectionBadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: `1px solid ${dark ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
        borderRadius: '9999px',
        padding: '4px 12px',
        fontSize: '10px',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: dark ? 'rgba(255,255,255,0.5)' : 'var(--text)',
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  )
}
