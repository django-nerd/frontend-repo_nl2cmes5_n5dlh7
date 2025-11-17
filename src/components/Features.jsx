import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Rocket, Shield, Zap } from 'lucide-react'

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.96, rotateX: -6 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
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
            variants={card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="group relative overflow-hidden rounded-xl border border-[#D4AF37]/15 bg-gradient-to-b from-white/[0.02] to-transparent p-6 transition will-change-transform"
            whileHover={{ y: -6, scale: 1.03, rotateX: 2, boxShadow: '0px 20px 60px rgba(212,175,55,0.18)' }}
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
