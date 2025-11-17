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
      <Features />
      <Logos />
    </div>
  )
}
