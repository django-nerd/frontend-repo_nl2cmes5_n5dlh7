import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Brush, BarChart, ShoppingBag } from 'lucide-react'
import SEO from './SEO'

const services = [
  { icon: Layers, title: 'Sites vitrines premium', desc: 'Design sur-mesure, performance et image de marque haut de gamme.' },
  { icon: Brush, title: 'Identité & UI', desc: 'Systèmes visuels cohérents, typographies premium, composants élégants.' },
  { icon: BarChart, title: 'Growth & SEO', desc: 'Acquisition, contenus, optimisation on-site, tracking et analytics.' },
  { icon: ShoppingBag, title: 'E-commerce', desc: 'Expériences d’achat fluides, conversion optimisée, intégrations.' },
]

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SEO title="Services – Melioram" description="Création de sites premium, identité de marque, e‑commerce et growth/SEO. Un accompagnement luxe digital orienté performance." />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-semibold text-white"
      >
        Services
      </motion.h1>
      <p className="mt-4 text-neutral-400 max-w-2xl">Nos offres associent esthétique, performance et stratégie pour un impact mesurable.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group relative rounded-xl border border-yellow-500/15 bg-[#0F0F0F] p-6 hover:shadow-[0_0_24px_rgba(212,175,55,0.15)] hover:border-yellow-500/40 transition will-change-transform"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ background:"radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(212,175,55,0.08), transparent 40%)" }} />
            <s.icon className="text-yellow-300" />
            <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 overflow-hidden rounded-xl border border-white/5">
        <details className="group">
          <summary className="cursor-pointer list-none p-5 bg-white/[0.02] hover:bg-white/[0.04] transition flex items-center justify-between">
            <span className="text-white font-medium">Détails & méthodologie</span>
            <span className="text-yellow-300 group-open:rotate-180 transition">▾</span>
          </summary>
          <div className="p-6 text-neutral-300">
            Nos processus incluent cadrage, wireframes, design system, développement, QA et mise en production.
          </div>
        </details>
      </div>
    </div>
  )
}
