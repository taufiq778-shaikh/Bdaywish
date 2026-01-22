import { motion } from 'framer-motion'

const colors = ['#f9c6d7', '#e96a8d', '#f5d070', '#e8e0ff', '#f7d8e2']

export function ConfettiBurst() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 36 }).map((_, i) => {
        const delay = Math.random() * 0.5
        const duration = 2 + Math.random() * 1.5
        const size = 6 + Math.random() * 10
        const left = Math.random() * 100
        const rotate = (Math.random() - 0.5) * 120
        const color = colors[i % colors.length]
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{ width: size, height: size * 0.4, background: color, left: `${left}%`, top: '-10%' }}
            initial={{ opacity: 0, y: -10, rotate }}
            animate={{ opacity: [0, 1, 1, 0], y: 520, rotate: rotate * 3 }}
            transition={{ duration, delay, ease: 'easeOut' }}
          />
        )
      })}
    </div>
  )
}
