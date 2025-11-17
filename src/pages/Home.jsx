import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Rocket, Shield, Zap } from 'lucide-react'

const Section = ({ children, className = '' }) => (
  <section className={`relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
)

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <div className="relative h-[80vh] sm:h-[88vh]">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/70 to-[#0A0A0A] pointer-events-none" />
        <div className="relative h-full flex items-center">
          <Section>
            <motion.h1
              initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
              animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white"
            >
              Sites web premium. Expériences qui convertissent.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              className="mt-6 max-w-2xl text-neutral-300"
            >
              Melioram conçoit des interfaces élégantes, rapides et orientées ROI pour marques ambitieuses. Design luxueux, performance, marketing de croissance.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-yellow-500/60 px-6 py-3 text-sm text-yellow-100 hover:text-white transition shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_28px_rgba(212,175,55,0.25)]"
              >
                Réserver un appel
                <ArrowRight size={16} className="transition -translate-x-1 group-hover:translate-x-0" />
              </a>
              <a
                href="/portfolio"
                className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 px-6 py-3 text-sm text-black font-medium hover:brightness-110 transition overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Voir nos réalisations
                <ArrowRight size={16} />
              </a>
            </div>
          </Section>
        </div>
      </div>

      {/* Nos forces */}
      <Section className="py-20">
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
              className="group relative overflow-hidden rounded-xl border border-yellow-500/10 bg-gradient-to-b from-white/[0.02] to-transparent p-6 hover:border-yellow-500/30 transition"
            >
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition" />
              <c.icon className="text-yellow-300/90" />
              <h3 className="mt-4 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Logos */}
      <div className="py-14 border-y border-white/5 bg-[#0F0F0F]">
        <Section>
          <div className="flex items-center gap-10 justify-center flex-wrap opacity-80">
            {['AURUM','VALENCE','NOVA','ORION','ECLAT','LYNX'].map((l, i) => (
              <motion.div
                key={l}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="text-yellow-500/70 tracking-[0.35em] text-xs sm:text-sm"
              >
                {l}
              </motion.div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  )
}
