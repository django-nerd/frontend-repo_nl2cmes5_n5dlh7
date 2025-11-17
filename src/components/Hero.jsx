import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { openBooking } from '../utils/booking'

export default function Hero() {
  return (
    <div className="relative h-[80vh] sm:h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/70 to-[#0A0A0A] pointer-events-none" />
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white"
          >
            Sites web premium. Expériences qui convertissent.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-neutral-300"
          >
            Melioram conçoit des interfaces élégantes, rapides et orientées ROI pour marques ambitieuses.
          </motion.p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={openBooking}
              className="group inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 px-6 py-3 text-sm text-yellow-100 hover:text-white transition shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_28px_rgba(212,175,55,0.25)]"
            >
              Réserver un appel
              <ArrowRight size={16} className="transition -translate-x-1 group-hover:translate-x-0" />
            </button>
            <a
              href="/portfolio"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CBA135] px-6 py-3 text-sm text-black font-medium hover:brightness-110 transition overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              Voir nos réalisations
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
