import { useEffect, useRef, useState } from 'react'
import { Music, VolumeX } from 'lucide-react'

type MusicToggleProps = {
  src: string
}

export function MusicToggle({ src }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.4
    audioRef.current = audio
    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [src])

  const toggle = async () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (e) {
        console.error('Audio playback blocked', e)
      }
    }
  }

  return (
    <button
      onClick={toggle}
      className="group inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#2c1b1b] shadow-md shadow-rose/10 ring-1 ring-white/50 transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-rose/15 text-ruby">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-rose/25 via-blush/25 to-lavender/25 blur" />
        {isPlaying ? <Music size={18} /> : <VolumeX size={18} />}
      </span>
      {isPlaying ? 'Pause music' : 'Play music'}
    </button>
  )
}
