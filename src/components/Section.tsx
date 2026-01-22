import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  light?: boolean
}

export function Section({ id, eyebrow, title, description, children, light }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full px-5 sm:px-7 py-16 sm:py-20 ${
        light ? 'bg-white/70' : 'bg-white/40'
      } rounded-[28px] border border-white/60 shadow-lg shadow-rose/10 glass-panel`}
    >
      <div className="absolute inset-0 rounded-[28px] light-grid opacity-50 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative space-y-6"
      >
        <div className="space-y-2">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-ruby">
              <span className="h-2 w-2 rounded-full bg-ruby shadow-[0_0_0_6px_rgba(233,106,141,0.25)]" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl sm:text-4xl text-[#2c1b1b] drop-shadow-sm">{title}</h2>
          {description && <p className="text-base sm:text-lg text-[#4f3c3c]">{description}</p>}
        </div>
        {children}
      </motion.div>
    </section>
  )
}
