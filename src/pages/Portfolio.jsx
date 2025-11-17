import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import SEO from './SEO'

export default function Portfolio() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <SEO title="Réalisations – Melioram" description="Une sélection de projets premium par Melioram : sites vitrines, e‑commerce et expériences digitales performantes." />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-semibold text-white"
      >
        Réalisations
      </motion.h1>
      <p className="mt-4 text-neutral-400 max-w-2xl">Sélection de projets conçus pour la performance et l’émotion.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((it, i) => (
          <motion.a
            key={it.slug}
            href={`/projets/${it.slug}`}
            aria-label={`Voir le projet ${it.title}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0F0F0F] focus:outline-none focus:ring-2 focus:ring-yellow-500/60"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={it.cover} alt="" className="h-full w-full object-cover transform group-hover:scale-[1.04] transition duration-500" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-0 p-4 w-full flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold">{it.title}</h3>
                <p className="text-xs text-yellow-300/90">{it.subtitle}</p>
              </div>
              <span className="text-yellow-300 translate-y-3 group-hover:translate-y-0 transition">↗</span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
