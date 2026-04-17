interface TextureCardProps {
  color: string
  label?: string
  aspectRatio?: string
  height?: string | number
  children?: React.ReactNode
  style?: React.CSSProperties
}

export default function TextureCard({
  color,
  label,
  aspectRatio,
  height,
  children,
  style,
}: TextureCardProps) {
  return (
    <div
      className="texture-card"
      style={{
        backgroundColor: color,
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          transparent 0px, transparent 8px,
          rgba(255,255,255,0.25) 8px, rgba(255,255,255,0.25) 9px
        )`,
        borderRadius: 16,
        aspectRatio: aspectRatio ?? undefined,
        height: height ?? undefined,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        padding: label ? 20 : 0,
        ...style,
      }}
    >
      {label && (
        <span
          style={{
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.4)',
            fontWeight: 600,
          }}
        >
          {label}
        </span>
      )}
      {children}
    </div>
  )
}
