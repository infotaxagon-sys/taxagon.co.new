import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { NAV_LINKS, SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const location = useLocation()
  const shouldReduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass-header shadow-sm py-3' : 'bg-transparent py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center group" aria-label="Taxagon home">
              <img
                src="/logo.png"
                alt="Taxagon"
                className="h-9 w-auto transition-opacity group-hover:opacity-75"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-colors',
                        'text-slate-600 hover:text-navy hover:bg-warm-tint'
                      )}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn('transition-transform duration-200', openDropdown === link.label && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={shouldReduce ? {} : { opacity: 0, y: -8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={shouldReduce ? {} : { opacity: 0, y: -8, scale: 0.97 }}
                          transition={{ duration: 0.16 }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-3xl shadow-brand border border-parchment-dark py-2 z-50"
                          role="menu"
                        >
                          {link.dropdown.map(item => (
                            <Link
                              key={item.href}
                              to={item.href}
                              role="menuitem"
                              className="block px-4 py-2.5 text-sm text-slate-600 hover:text-navy hover:bg-parchment transition-colors rounded-2xl mx-1.5"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={cn(
                      'px-3.5 py-2 rounded-xl text-sm font-medium transition-colors',
                      location.pathname === link.href
                        ? 'text-navy bg-warm-tint font-semibold'
                        : 'text-slate-600 hover:text-navy hover:bg-warm-tint'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Client Login — text link */}
              <a
                href="https://taxagon.clientportal.com/#/login"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-navy hover:text-gold transition-colors px-1"
              >
                Client Login
              </a>

              {/* Get Started — filled button */}
              <Link
                to="/get-started"
                className="hidden sm:inline-flex items-center gap-1.5 bg-navy hover:bg-navy-dark text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all btn-shine shadow-sm"
              >
                Get Started
              </Link>

              <button
                className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-navy hover:bg-warm-tint transition-colors"
                onClick={() => setMobileOpen(v => !v)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              initial={shouldReduce ? {} : { x: '100%' }}
              animate={{ x: 0 }}
              exit={shouldReduce ? {} : { x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-parchment z-50 shadow-2xl flex flex-col"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-5 border-b border-parchment-dark">
                <img src="/logo.png" alt="Taxagon" className="h-8 w-auto" />
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-xl text-slate-500 hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={shouldReduce ? {} : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.dropdown ? (
                      <details className="group">
                        <summary className="flex items-center justify-between px-4 py-3 rounded-2xl text-slate-700 font-medium cursor-pointer hover:bg-white hover:text-navy transition-colors list-none">
                          {link.label}
                          <ChevronDown size={16} className="group-open:rotate-180 transition-transform" aria-hidden="true" />
                        </summary>
                        <div className="ml-3 mt-1 space-y-1">
                          {link.dropdown.map(item => (
                            <Link
                              key={item.href}
                              to={item.href}
                              className="block px-4 py-2.5 text-sm text-slate-600 rounded-xl hover:bg-white hover:text-navy transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        to={link.href}
                        className="block px-4 py-3 rounded-2xl text-slate-700 font-medium hover:bg-white hover:text-navy transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="p-4 border-t border-parchment-dark space-y-2.5">
                <Link
                  to="/get-started"
                  className="flex items-center justify-center w-full bg-navy text-white font-bold py-3.5 rounded-xl transition-colors hover:bg-navy-dark"
                >
                  Get Started
                </Link>
                <a
                  href="https://taxagon.clientportal.com/#/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full border border-navy/20 text-navy font-semibold py-3 rounded-xl transition-colors hover:bg-warm-tint text-sm"
                >
                  Client Login
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
