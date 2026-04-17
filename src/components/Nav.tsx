import { Link } from 'react-router-dom'

interface NavProps {
  pageName: string
  pageNumber: string
}

export default function Nav({ pageName, pageNumber }: NavProps) {
  return (
    <nav
      style={{
        padding: '24px 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 11,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#aaa',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link
        to="/"
        style={{
          color: '#aaa',
          textDecoration: 'none',
          fontWeight: 600,
        }}
      >
        UTITY®
      </Link>
      <span>·</span>
      <span>{pageName}</span>
      <span>·</span>
      <span>{pageNumber} / 07</span>
    </nav>
  )
}
