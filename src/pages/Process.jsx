import React from 'react'
import { motion } from 'framer-motion'
import SEO from './SEO'

const steps = [
  { title: 'Cadrage', desc: 'Objectifs, audience, KPIs, scope' },
  { title: 'Design', desc: 'Direction artistique, UI, interactions' },
  { title: 'Développement', desc: 'Front-end, back-end, performance' },
  { title: 'QA & Recette', desc: 'Tests, accessibilité, corrections' },
  { title: 'Lancement', desc: 'Mise en prod, suivi & optimisation' },
]

export default function Process() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <SEO title="Process – Melioram" description="Notre méthodologie premium : cadrage, design, développement, QA et lancement. Qualité et performance à chaque étape." />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-semibold text-white text-center"
      >
        Notre process
      </motion.h1>
      <p className="mt-4 text-neutral-400 text-center">Une ligne du temps fine et élégante, où chaque étape compte.</p>

      <div className="relative mt-16">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/40 via-yellow-500/20 to-transparent" />
        <div className="space-y-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className={`relative grid sm:grid-cols-2 gap-6 ${i % 2 ? 'sm:grid-flow-dense' : ''}`}
            >
              <div className={`p-6 rounded-xl border border-white/5 bg-[#0F0F0F] ${i % 2 ? 'sm:order-2' : ''}`}>
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="text-neutral-400 mt-2 text-sm">{s.desc}</p>
              </div>
              <div className={`flex items-center justify-center ${i % 2 ? 'sm:order-1' : ''}`}>
                <span className="relative inline-flex h-4 w-4">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-500/30 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-400" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
