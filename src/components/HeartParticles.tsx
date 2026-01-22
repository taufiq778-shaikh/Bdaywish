import { motion } from 'framer-motion'
import { useMemo } from 'react'

type Heart = {
  left: string
  delay: number
  duration: number
  size: number
  opacity: number
}

const generateHearts = (count: number): Heart[] =>
  Array.from({ length: count }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    size: 14 + Math.random() * 10,
    opacity: 0.35 + Math.random() * 0.35 + (i % 3 === 0 ? 0.2 : 0)
  }))

export function HeartParticles({ className = '' }: { className?: string }) {
  const hearts = useMemo(() => generateHearts(18), [])

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {hearts.map((heart, idx) => (
        <motion.span
          key={`${heart.left}-${idx}`}
          className="absolute text-rose/80"
          style={{
            left: heart.left,
            bottom: -20,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity
          }}
          initial={{ y: 0, scale: 0.9, rotate: -10 }}
          animate={{ y: -420, scale: 1.15, rotate: 15 }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: heart.duration,
            delay: heart.delay,
            ease: 'easeOut'
          }}
        >
          💖
        </motion.span>
      ))}
    </div>
  )
}
