import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Logos from '../components/Logos'
import SEO from './SEO'

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SEO title="Melioram – Agence web premium" description="Sites web premium en mode sombre, design luxe digital, performance et conversion." />
      <Hero />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Subtle parallax gold sheen background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{
          background: 'radial-gradient(1200px circle at 20% 10%, rgba(212,175,55,0.05), transparent 40%), radial-gradient(1000px circle at 80% 30%, rgba(212,175,55,0.04), transparent 45%)'
        }} />
        <Features />
      </motion.div>
      <Logos />
    </div>
  )
}
