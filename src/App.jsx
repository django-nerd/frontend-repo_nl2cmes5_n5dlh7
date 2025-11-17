import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -12 },
}

const pageTransition = {
  type: 'spring',
  stiffness: 120,
  damping: 20,
  mass: 0.8,
}

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 selection:bg-yellow-500/20 selection:text-yellow-200">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="pt-20"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
