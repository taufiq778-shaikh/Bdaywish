import { AnimatePresence, motion } from 'framer-motion'
import { Sparkles, User } from 'lucide-react'
import { type FormEvent, useMemo, useState } from 'react'
import { chatbotPersona } from '../config/content'

type Message = {
  sender: 'bot' | 'user'
  text: string
}

const typingDelay = 900

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: chatbotPersona.intro },
    { sender: 'bot', text: 'Tip: ask for a memory, a compliment, or a tiny surprise hint.' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = useMemo(() => chatbotPersona.prompts, [])

  const botReply = (userText: string) => {
    const text = userText.toLowerCase()
    if (text.includes('memory')) {
      return randomFrom([...chatbotPersona.memoryFollowups, randomFrom(chatbotPersona.compliments)])
    }
    if (text.includes('date') || text.includes('idea')) {
      return randomFrom(chatbotPersona.dateIdeas)
    }
    if (text.includes('surprise') || text.includes('gift')) {
      return 'It involves music, a secret letter, and a promise you can redeem any day. Keep scrolling for the reveal ✨'
    }
    if (text.includes('compliment') || text.includes('nice')) {
      return randomFrom(chatbotPersona.compliments)
    }
    return randomFrom([
      ...chatbotPersona.compliments,
      ...chatbotPersona.memoryFollowups,
      ...chatbotPersona.dateIdeas
    ])
  }

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    const clean = text.trim()
    setMessages((prev) => [...prev, { sender: 'user', text: clean }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      const reply = botReply(clean)
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }])
      setIsTyping(false)
    }, typingDelay)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="w-full rounded-3xl bg-white/80 p-5 shadow-md shadow-rose/10 ring-1 ring-white/50">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ruby">Interactive chatbot</p>
          <h3 className="font-display text-2xl text-[#2c1b1b]">Suryaa is listening</h3>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full bg-rose/15 px-3 py-1 text-xs text-ruby">
          <Sparkles size={14} />
          Soft & respectful
        </div>
      </div>
      <div className="space-y-3 rounded-2xl bg-cream/60 p-4 shadow-inner">
        <div className="max-h-[320px] space-y-3 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {messages.map((message, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow ${
                    message.sender === 'user'
                      ? 'bg-ruby text-white shadow-rose/30'
                      : 'bg-white/90 text-[#2c1b1b] border border-white/60'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex justify-start"
              >
                <div className="flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs text-[#2c1b1b] shadow">
                  <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose/20 text-ruby">
                    <User size={14} />
                  </span>
                  typing...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((prompt) => (
            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              className="rounded-full bg-white px-3 py-1 text-xs text-[#2c1b1b] shadow-sm ring-1 ring-rose/30 transition hover:-translate-y-0.5"
            >
              {prompt}
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell Luma a thought or ask for a surprise..."
            className="h-11 flex-1 rounded-full bg-white/90 px-4 text-sm text-[#2c1b1b] shadow-inner outline-none ring-1 ring-rose/25 focus:ring-2 focus:ring-ruby/60"
          />
          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-rose to-ruby px-4 text-sm font-semibold text-white shadow-lg shadow-rose/30 transition hover:-translate-y-0.5"
          >
            Send
          </button>
        </form>
      </div>
      <p className="mt-3 text-xs text-[#6b5151]">{chatbotPersona.guardrails}</p>
    </div>
  )
}

const randomFrom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)]
