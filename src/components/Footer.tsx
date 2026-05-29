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
const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const SOCIAL = [
  { Icon: FacebookIcon as React.ElementType, label: 'Facebook', href: '#' },
  { Icon: LinkedinIcon as React.ElementType, label: 'LinkedIn', href: '#' },
  { Icon: WhatsAppIcon as React.ElementType, label: 'WhatsApp', href: `https://wa.me/${SITE.whatsapp.replace(/[^0-9]/g, '')}` },
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
            <Link to="/" className="inline-flex mb-5 group" aria-label="Taxagon home">
              <img
                src="/logo.png"
                alt="Taxagon"
                className="h-8 w-auto transition-opacity group-hover:opacity-80"
                style={{ filter: 'invert(1)' }}
              />
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
