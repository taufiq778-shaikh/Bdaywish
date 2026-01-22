import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Play } from 'lucide-react'
import { useState } from 'react'
import { Lightbox } from './Lightbox'
import { type MemoryItem } from '../types'

export function MemoryCarousel({ items }: { items: MemoryItem[] }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const current = items[index]
  const next = () => setIndex((prev) => (prev + 1) % items.length)
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length)

  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-white/70 p-4 shadow-md shadow-rose/10">
      <div className="flex items-center justify-between px-2 pb-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ruby">
          Our sweet timeline
        </p>
        <div className="flex items-center gap-2 text-xs text-[#6b5151]">
          <span className="h-2 w-2 rounded-full bg-ruby/50" />
          Slide to revisit each memory
        </div>
      </div>

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/60 bg-cream">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.media}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <button
              className="group relative block h-full w-full"
              onClick={() => setOpen(true)}
              aria-label="Open memory"
            >
              {current.type === 'image' ? (
                <img
                  src={current.media}
                  alt={current.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              ) : (
                <div className="relative h-full w-full overflow-hidden">
                  <video
                    src={current.media}
                    className="h-full w-full object-cover"
                    muted
                    autoPlay
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 text-ruby shadow-lg">
                      <Play size={20} />
                    </span>
                  </div>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 space-y-1 bg-gradient-to-t from-black/70 via-black/35 to-transparent p-4 text-left text-white">
                <p className="text-sm uppercase tracking-[0.12em] text-white/80">Memory {index + 1}</p>
                <h3 className="font-display text-xl">{current.title}</h3>
                <p className="text-sm text-white/85">{current.caption}</p>
              </div>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2c1b1b] shadow hover:-translate-y-0.5 transition"
            aria-label="Previous memory"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2c1b1b] shadow hover:-translate-y-0.5 transition"
            aria-label="Next memory"
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition ${
                i === index ? 'w-8 bg-ruby' : 'w-2.5 bg-rose/70 hover:bg-rose'
              }`}
              aria-label={`Go to memory ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <Lightbox open={open} onClose={() => setOpen(false)}>
        {current.type === 'image' ? (
          <img src={current.media} alt={current.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <video src={current.media} className="h-full w-full object-cover" controls autoPlay loop />
        )}
      </Lightbox>
    </div>
  )
}
