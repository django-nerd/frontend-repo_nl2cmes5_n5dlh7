import React from 'react'
import { motion } from 'framer-motion'
import { Star, Rocket, Shield, Zap } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
}

export default function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-semibold text-white"
      >
        Nos forces
      </motion.h2>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Rocket, title: 'Vitesse et SEO', desc: 'Chargement ultra-rapide, scores Core Web Vitals élevés, meilleur référencement.' },
          { icon: Shield, title: 'Fiabilité', desc: 'Stack moderne, sécurité renforcée, surveillance et support.' },
          { icon: Star, title: 'Design premium', desc: 'Esthétique luxe, micro-interactions soignées, identité forte.' },
          { icon: Zap, title: 'Conversion', desc: 'UX basée sur la donnée, A/B test, funnels optimisés.' },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="group relative overflow-hidden rounded-xl border border-[#D4AF37]/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 hover:border-[#D4AF37]/30 transition"
          >
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 blur-2xl transition" />
            <c.icon className="text-[#D4AF37]" />
            <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
            <p className="mt-2 text-sm text-neutral-400">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
