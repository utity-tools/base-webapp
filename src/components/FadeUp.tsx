import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  style?: React.CSSProperties
  className?: string
}

export default function FadeUp({ children, delay, duration, style, className }: FadeUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: duration ?? 0.6, ease: [0.25, 0.1, 0.25, 1], delay: delay ?? 0 }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
