import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { type ReactNode } from 'react'

type LightboxProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function Lightbox({ open, onClose, children }: LightboxProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white/90 p-4 shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#2c1b1b] shadow-md transition hover:-translate-y-0.5"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black/5">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
