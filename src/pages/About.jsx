import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function About() {
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 80, damping: 12 })
  const rounded = useTransform(spring, (v) => Math.floor(v))

  React.useEffect(() => {
    let to = 120 // projects
    count.set(0)
    const t = setTimeout(() => count.set(to), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-semibold text-white"
      >
        À propos
      </motion.h1>
      <p className="mt-4 text-neutral-400 max-w-2xl">Studio indépendant basé sur l’exigence et l’efficacité. Nous allions esthétique et performance pour créer des expériences mémorables.</p>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent p-8">
          <h3 className="text-white font-semibold">Notre philosophie</h3>
          <p className="text-neutral-400 mt-2 text-sm">Clarté, exigence, précision. Nous privilégions les parcours limpides, les détails raffinés et la performance mesurable.</p>
        </div>
        <div className="text-center md:text-right">
          <div className="inline-flex flex-col items-center md:items-end">
            <span className="text-6xl font-semibold text-yellow-300"><motion.span>{rounded}</motion.span>+</span>
            <span className="text-neutral-400">projets livrés</span>
          </div>
        </div>
      </div>
    </div>
  )
}
