import React from 'react'
import { motion } from 'framer-motion'

export default function Logos() {
  return (
    <div className="py-14 border-y border-white/5 bg-[#0F0F0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-10 justify-center flex-wrap opacity-80">
          {['AURUM','VALENCE','NOVA','ORION','ECLAT','LYNX'].map((l, i) => (
            <motion.div
              key={l}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="text-[#D4AF37]/70 tracking-[0.35em] text-xs sm:text-sm"
            >
              {l}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
