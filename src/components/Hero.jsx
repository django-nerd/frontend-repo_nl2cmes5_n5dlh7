import React, { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { openBooking } from '../utils/booking'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  // Parallax transforms
  const yTitle = useSpring(useTransform(scrollYProgress, [0, 1], [0, -80]), { stiffness: 120, damping: 20, mass: 0.3 })
  const ySub = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), { stiffness: 120, damping: 20, mass: 0.3 })
  const yCtas = useSpring(useTransform(scrollYProgress, [0, 1], [0, -40]), { stiffness: 120, damping: 20, mass: 0.3 })
  const gradientOpacity = useTransform(scrollYProgress, [0, 1], [0.6, 0.9])

  return (
    <div ref={containerRef} className="relative h-[80vh] sm:h-[88vh] overflow-hidden will-change-transform">
      <motion.div className="absolute inset-0" style={{ y: useTransform(scrollYProgress, [0, 1], [0, 120]) }}>
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <motion.div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/70 to-[#0A0A0A] pointer-events-none" style={{ opacity: gradientOpacity }} />

      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yTitle }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white will-change-transform"
          >
            Sites web premium. Expériences qui convertissent.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: ySub }}
            className="mt-6 max-w-2xl text-neutral-300 will-change-transform"
          >
            Melioram conçoit des interfaces élégantes, rapides et orientées ROI pour marques ambitieuses.
          </motion.p>

          <motion.div style={{ y: yCtas }} className="mt-10 flex flex-wrap gap-4">
            <motion.button
              onClick={openBooking}
              whileHover={{ scale: 1.06, y: -1, boxShadow: '0px 10px 40px rgba(212,175,55,0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 px-6 py-3 text-sm text-yellow-100 hover:text-white transition bg-black/20 backdrop-blur-sm"
            >
              Réserver un appel
              <ArrowRight size={16} className="transition -translate-x-1 group-hover:translate-x-0" />
            </motion.button>

            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.06, y: -1, filter: 'brightness(1.15)', boxShadow: '0px 10px 50px rgba(212,175,55,0.45)' }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CBA135] px-6 py-3 text-sm text-black font-medium overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Voir nos réalisations
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle floating gold particles for luxe vibe */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37]/60"
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{ opacity: [0, 1, 0], y: [-20, -60, -120], scale: [0.6, 1, 0.6] }}
            transition={{ duration: 6 + i * 0.2, delay: i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: `${(i * 83) % 100}%`, bottom: `${(i * 37) % 100}%` }}
          />
        ))}
      </div>
    </div>
  )
}
