import { motion } from 'framer-motion'
import { ArrowDown, CalendarClock, Heart, Sparkles, Unlock } from 'lucide-react'
import { useRef, useState } from 'react'
import { ChatBot } from './components/ChatBot'
import { ConfettiBurst } from './components/ConfettiBurst'
import { HeartParticles } from './components/HeartParticles'
import { MemoryCarousel } from './components/MemoryCarousel'
import { MusicToggle } from './components/MusicToggle'
import { Section } from './components/Section'
import {
  greetingCopy,
  loveLetter,
  memories,
  revealItems,
  siteConfig,
  welcomeCopy
} from './config/content'

export default function App() {
  const greetingRef = useRef<HTMLDivElement | null>(null)
  const [unlocked] = useState(!siteConfig.secretCode)
  const [confetti, setConfetti] = useState(false)

  const gradientBg =
    'bg-[radial-gradient(circle_at_20%_20%,rgba(249,198,215,0.4),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(232,224,255,0.45),transparent_28%),linear-gradient(180deg,#fff6ec,#fef9f6)]'

  const scrollToGreeting = () => greetingRef.current?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className={`${gradientBg} min-h-screen w-full overflow-x-hidden pb-16`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-10 sm:px-6 sm:pt-12">
        <header className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/50 px-6 py-10 shadow-2xl shadow-rose/10 sm:px-8 sm:py-12">
          <HeartParticles />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-5 sm:max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ruby"
              >
                Romantic & cinematic • Crafted for samieee
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                className="font-display text-4xl leading-tight text-[#2c1b1b] sm:text-5xl"
              >
                {welcomeCopy.heroTitle}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                className="text-lg text-[#4f3c3c] sm:text-xl"
              >
                {welcomeCopy.subtitle}
              </motion.p>
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  onClick={() => {
                    scrollToGreeting()
                    setConfetti(true)
                    setTimeout(() => setConfetti(false), 2200)
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-ruby px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose/30 transition hover:-translate-y-0.5"
                >
                  {welcomeCopy.cta}
                  <ArrowDown size={18} />
                </motion.button>
                <MusicToggle src={siteConfig.mainSong} />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full max-w-sm overflow-hidden rounded-[32px] border border-white/70 bg-cream/70 p-5 shadow-xl shadow-rose/20"
            >
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-rose/25 blur-3xl" />
              <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-lavender/40 blur-3xl" />
              <div className="relative space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.12em] text-[#6b5151]">
                  <CalendarClock size={14} />
                 celebration day
                </div>
                <p className="text-sm text-[#6b5151]">22 january</p>
                <h3 className="font-display text-3xl text-[#2c1b1b]">SPECIAL DAY </h3>
                <p className="text-sm text-[#6b5151]">
                  created by surya 
                </p>
              </div>
            </motion.div>
          </div>
          {confetti && <ConfettiBurst />}
        </header>

        {!unlocked && siteConfig.secretCode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-6 text-center shadow-xl shadow-rose/15"
          >
            <div className="absolute inset-0 bg-sparkle opacity-80" />
            <div className="relative space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-rose/20 px-3 py-1 text-xs uppercase tracking-[0.12em] text-ruby">
                <Unlock size={14} /> -----
              </p>
              <h3 className="font-display text-3xl text-[#2c1b1b]">Hey Samieee ♥️</h3>
              <p className="text-[#4f3c3c]">
                its your birthday!!! Babe.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
               
        
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid gap-8">
          <Section
            id="greeting"
            eyebrow="Birthday greeting"
            title={greetingCopy.headline}
            description={greetingCopy.sub}
          >
            <div ref={greetingRef} />
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-white/90 via-cream to-lavender/40 p-6 shadow-lg shadow-rose/10">
              <SparkleRow />
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-3 sm:max-w-xl">
                  <p className="text-lg text-[#4f3c3c]">
                    You are celebrated for {greetingCopy.highlights.join(', ')} — and so much more I keep discovering.
                  </p>
                  <p className="text-[#6b5151]">
                    
                  </p>
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-ruby shadow">
                  <Heart size={16} />
                  
                </div>
              </div>
            </div>
          </Section>

          <Section
            id="memories"
            eyebrow="Memories gallery"
            title="Tiny frames that feel like forever"
            description="Swipe through our favourite snaps and clips. Tap to open them in a dreamy lightbox."
            light
          >
            <MemoryCarousel items={memories} />
          </Section>

          <Section
            id="letter"
            eyebrow="Love letter"
            title="Now special letter for you"
            description="........."
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-rose/10"
            >
              <div className="absolute inset-0 bg-sparkle opacity-70" />
              <div className="relative space-y-4 text-lg leading-relaxed text-[#3d2c2c] font-script">
                {loveLetter.split('\n').map((line, idx) => (
                  <p key={idx} className="opacity-90">
                    {line.trim() === '' ? '\u00A0' : line}
                  </p>
                ))}
              </div>
            </motion.div>
          </Section>

          <Section
            id="chat"
            eyebrow="Interactive chatbot"
            title="Chat with Suryaa"
            description="A sweet, respectful AI-style chat. Ask for compliments, memories, miss me, or you feeling better."
            light
          >
            <ChatBot />
          </Section>

          <Section
            id="reveal"
            eyebrow="Surya"
            title="for you"
            description="Playlist, video letter."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-4 rounded-3xl bg-white/85 p-5 shadow-md shadow-rose/10 ring-1 ring-white/60">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-3 py-1 text-xs uppercase tracking-[0.12em] text-ruby">
                  <Sparkles size={14} />
                  Surprise trio
                </div>
                <p className="text-lg text-[#2c1b1b] font-display">Playlist + Video</p>
                <p className="text-[#4f3c3c]">{revealItems.giftNote}</p>
                <div className="space-y-2 rounded-2xl bg-cream/80 p-4 text-sm text-[#4f3c3c] shadow-inner">
                 
                  <p>Jitni tu milti jaye utani lage thodi thodi......</p>
                </div>
                <a
                  href="https://open.spotify.com/playlist/0kuXM7wEqTbwmxIY9rnd1E?si=tWBWeIZCRdGVxG2LTpix_Q"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-lavender to-rose px-4 py-2 text-sm font-semibold text-[#2c1b1b] shadow hover:-translate-y-0.5 transition"
                >
                  Open your playlist
                </a>
                <div className="overflow-hidden rounded-2xl border border-white/60 bg-black/70 shadow-lg">
                <video
                  src="/surya-videomp4.mp4"
                  controls
                  className="h-52 w-full"
                    />
                </div>

              </div>
              <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-5 shadow-md shadow-rose/10">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-rose/20 blur-3xl" />
                
              </div>
            </div>
          </Section>

          <Section
            id="finale"
            eyebrow="Ending screen"
            title="Thank you for being with me"
            description="."
            light
          >
            <div className="flex flex-col gap-5 rounded-3xl bg-white/85 p-6 text-center shadow-md shadow-rose/10">
              <p className="text-lg text-[#4f3c3c]">
               
              </p>
              <p className="font-display text-2xl text-[#2c1b1b]">I LOVE YOU SOO MUCH BABY!!!</p>
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-ruby px-5 py-3 text-base font-semibold text-white shadow-lg shadow-rose/30 transition hover:-translate-y-0.5"
                >
                  Replay the surprise
                  <Sparkles size={16} />
                </motion.button>
                <a
                  href={siteConfig.qrGiftLink}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#2c1b1b] shadow ring-1 ring-rose/30 transition hover:-translate-y-0.5"
                >
                💝
                </a>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}

function SparkleRow() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/80 p-4 shadow-inner">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose/20 text-ruby">
            <Sparkles size={18} />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#2c1b1b]">Soft confetti</p>
            <p className="text-xs text-[#6b5151]">Cinematic motion & gentle gradients</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-ruby">
          <span className="h-2 w-2 rounded-full bg-ruby" />
          Always respectful. Never cringe.
        </div>
      </div>
    </div>
  )
}
