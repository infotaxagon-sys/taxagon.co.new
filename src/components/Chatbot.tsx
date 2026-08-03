import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import { sendMessageToGemini, type ChatMessage } from '@/lib/chatbot'
import { cn } from '@/lib/utils'

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm the Taxagon assistant 👋. How can I help you with your tax questions today?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300)
  }, [open])

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages(m => [...m, { role: 'user', content: text }])
    setLoading(true)
    try {
      const reply = await sendMessageToGemini(text)
      setMessages(m => [...m, { role: 'assistant', content: reply }])
    } catch {
      setMessages(m => [...m, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduce ? {} : { opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-80 sm:w-96 bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(30,44,140,0.30)] border border-slate-100 flex flex-col overflow-hidden"
            style={{ maxHeight: '70vh', height: 480 }}
            aria-live="polite"
            role="complementary"
            aria-label="Taxagon chat assistant"
          >
            {/* Header */}
            <div className="bg-indigo-deep px-5 py-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={16} className="text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Taxagon Assistant</p>
                <p className="text-indigo-200 text-xs">Ask me anything about taxes</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn('flex', msg.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  <div
                    className={cn(
                      'max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-indigo-deep text-white rounded-br-sm'
                        : 'bg-slate-100 text-slate-700 rounded-bl-sm'
                    )}
                  >
                    {msg.content.split('\n').map((line, j) => (
                      <span key={j}>{line}{j < msg.content.split('\n').length - 1 && <br />}</span>
                    ))}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    {[0, 1, 2].map(i => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-slate-400"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-slate-100 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type your question..."
                aria-label="Chat message"
                className="flex-1 bg-slate-50 rounded-xl px-4 py-2.5 text-sm border border-slate-200 focus:outline-none focus:border-indigo-deep focus:ring-1 focus:ring-indigo-deep/30 transition-colors"
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-10 h-10 rounded-xl bg-indigo-deep hover:bg-indigo-deep-dark disabled:opacity-40 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        aria-expanded={open}
        className="w-14 h-14 rounded-full bg-indigo-deep hover:bg-indigo-deep-dark text-white shadow-[0_8px_32px_rgba(30,44,140,0.4)] flex items-center justify-center transition-colors btn-shine"
        animate={shouldReduce ? {} : { y: [0, -4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X size={22} aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle size={22} aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
