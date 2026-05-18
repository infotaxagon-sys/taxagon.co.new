import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <div
            className="text-[180px] md:text-[220px] font-bold font-sora leading-none select-none"
            style={{
              background: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            aria-hidden="true"
          >
            404
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-deep mx-auto mb-4 flex items-center justify-center shadow-brand">
                <span className="text-white font-bold text-2xl font-sora">T</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold font-sora text-slate-900 mb-3">
            Page Not Found
          </h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-indigo-deep hover:bg-indigo-deep-dark text-white font-semibold px-6 py-3 rounded-xl transition-all btn-shine shadow-sm"
            >
              <Home size={16} aria-hidden="true" />
              Go to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-indigo-deep hover:text-indigo-deep text-slate-700 font-semibold px-6 py-3 rounded-xl transition-all"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
