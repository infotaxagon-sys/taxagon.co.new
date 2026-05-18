import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'
import { SITE, FOOTER_SERVICES, FOOTER_TAX_TOOLS } from '@/lib/constants'

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

const SOCIAL = [
  { Icon: FacebookIcon as React.ElementType, label: 'Facebook', href: '#' },
  { Icon: LinkedinIcon as React.ElementType, label: 'LinkedIn', href: '#' },
  { Icon: TwitterIcon as React.ElementType, label: 'Twitter/X', href: '#' },
  { Icon: InstagramIcon as React.ElementType, label: 'Instagram', href: '#' },
]

export default function Footer() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const brandY = useTransform(scrollYProgress, [0, 1], [16, 0])

  return (
    <footer ref={ref} className="bg-navy text-slate-300 pt-16 pb-8" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gold accent bar */}
        <div className="w-16 h-1 rounded-full bg-gold mb-12" aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <motion.div style={{ y: brandY }}>
            <Link to="/" className="flex items-center gap-2.5 mb-5 group" aria-label="Taxagon home">
              <div className="w-9 h-9 rounded-2xl bg-gold flex items-center justify-center shadow-sm">
                <span className="text-navy font-bold text-lg font-sora leading-none">T</span>
              </div>
              <span className="font-bold text-xl text-white font-sora tracking-tight">
                Tax<em className="not-italic text-gold">agon</em>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-[240px]">
              {SITE.tagline}
            </p>
            <div className="flex gap-2.5">
              {SOCIAL.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-gold hover:text-navy text-slate-400 flex items-center justify-center transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs tracking-widest uppercase">Services</h3>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map(item => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tax Tools */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs tracking-widest uppercase">Tax Tools</h3>
            <ul className="space-y-3">
              {FOOTER_TAX_TOOLS.map(item => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs tracking-widest uppercase">Contact Us</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-slate-400 leading-snug">
                  {SITE.office}<br />
                  {SITE.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold shrink-0" aria-hidden="true" />
                <a href={`tel:${SITE.phone}`} className="text-sm text-slate-400 hover:text-gold transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-gold shrink-0" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="text-sm text-slate-400 hover:text-gold transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">{SITE.copyright}</p>
          <a
            href={SITE.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-500 hover:text-gold transition-colors"
          >
            Client Portal →
          </a>
        </div>
      </div>
    </footer>
  )
}
