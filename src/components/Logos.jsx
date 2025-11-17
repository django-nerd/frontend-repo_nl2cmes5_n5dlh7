import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Logos() {
  // Subtle marquee-like parallax on scroll
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <div className="py-14 border-y border-white/5 bg-[#0F0F0F] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div style={{ x }} className="flex items-center gap-10 justify-center flex-wrap opacity-80 will-change-transform">
          {['AURUM','VALENCE','NOVA','ORION','ECLAT','LYNX'].map((l, i) => (
            <motion.div
              key={l}
              initial={{ y: 14, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: 'easeOut' }}
              className="text-[#D4AF37]/70 tracking-[0.35em] text-xs sm:text-sm"
              whileHover={{ scale: 1.06, y: -2 }}
            >
              {l}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
