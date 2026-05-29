import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Chatbot from '@/components/Chatbot'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Pricing from '@/pages/Pricing'
import Contact from '@/pages/Contact'
import TaxTools from '@/pages/TaxTools'
import Individual from '@/pages/services/Individual'
import Business from '@/pages/services/Business'
import ForeignReporting from '@/pages/services/ForeignReporting'
import IndianTax from '@/pages/services/IndianTax'
import Bookkeeping from '@/pages/services/Bookkeeping'
import Passport from '@/pages/services/Passport'
import GetStarted from '@/pages/GetStarted'
import CreditsDeductions from '@/pages/CreditsDeductions'
import Login from '@/pages/Login'
import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/NotFound'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
}

const pageTransition = {
  duration: 0.35,
  ease: 'easeOut' as const,
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tax-tools" element={<TaxTools />} />
          <Route path="/tax-tools/:section" element={<TaxTools />} />
          <Route path="/credits-deductions" element={<CreditsDeductions />} />
          <Route path="/services/individual" element={<Individual />} />
          <Route path="/services/business" element={<Business />} />
          <Route path="/services/fbar" element={<ForeignReporting />} />
          <Route path="/services/nri" element={<IndianTax />} />
          <Route path="/services/bookkeeping" element={<Bookkeeping />} />
          <Route path="/services/passport" element={<Passport />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-16">
            <AnimatedRoutes />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
