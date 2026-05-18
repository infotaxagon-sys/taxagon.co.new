import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ExternalLink, Shield } from 'lucide-react'
import { useAuth } from '@/lib/auth'
import { SITE } from '@/lib/constants'

export default function Login() {
  const { user, signIn, signInWithGoogle } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (user) return <Navigate to="/dashboard" replace />

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await signIn(email, password)
    } catch {
      setError('Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12 mesh-bg">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-brand border border-slate-100 p-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="w-10 h-10 rounded-xl bg-indigo-deep flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-xl font-sora leading-none">T</span>
            </div>
            <span className="font-bold text-xl text-slate-900 font-sora">
              Tax<em className="not-italic text-indigo-deep">agon</em>
            </span>
          </div>

          <h1 className="text-2xl font-bold font-sora text-slate-900 mb-1">Welcome back</h1>
          <p className="text-slate-500 text-sm mb-8">Sign in to access your Taxagon account</p>

          {/* Google sign-in */}
          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl py-3 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors mb-5"
            aria-label="Sign in with Google"
          >
            {/* Google SVG icon */}
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-xs">or sign in with email</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate aria-label="Login form">
            {error && (
              <div role="alert" className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
                {error}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="login-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-deep focus:ring-1 focus:ring-indigo-deep/30 transition-colors"
              />
            </div>

            <div className="mb-1">
              <label htmlFor="login-password" className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:border-indigo-deep focus:ring-1 focus:ring-indigo-deep/30 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                >
                  {showPassword ? <EyeOff size={16} aria-hidden="true" /> : <Eye size={16} aria-hidden="true" />}
                </button>
              </div>
            </div>

            <div className="text-right mb-6">
              <button type="button" className="text-xs text-indigo-deep hover:underline font-medium">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              aria-busy={loading}
              className="w-full bg-indigo-deep hover:bg-indigo-deep-dark disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all btn-shine shadow-brand flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                  Signing in...
                </>
              ) : 'Sign In'}
            </button>
          </form>

          {/* Legacy portal notice */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="flex items-start gap-2 bg-sky-tint rounded-xl p-3">
              <Shield size={14} className="text-indigo-deep shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-slate-600">
                Existing clients can also access the legacy portal{' '}
                <a
                  href={SITE.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-deep font-semibold hover:underline inline-flex items-center gap-1"
                >
                  here <ExternalLink size={11} aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-4 text-xs text-slate-500">
          Need help?{' '}
          <Link to="/contact" className="text-indigo-deep hover:underline font-medium">Contact Taxagon</Link>
        </p>
      </motion.div>
    </div>
  )
}
