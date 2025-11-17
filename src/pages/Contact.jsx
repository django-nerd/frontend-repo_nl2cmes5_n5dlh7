import React from 'react'
import { motion } from 'framer-motion'
import { openBooking } from '../utils/booking'

export default function Contact() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-semibold text-white"
      >
        Contact & Devis
      </motion.h1>
      <p className="mt-4 text-neutral-400">Dites-nous quelques mots sur votre projet. Nous revenons vers vous sous 24h.</p>

      <form className="mt-10 grid gap-6" onSubmit={(e) => { e.preventDefault(); openBooking() }}>
        {[
          { id: 'name', label: 'Nom', type: 'text' },
          { id: 'email', label: 'Email', type: 'email' },
          { id: 'company', label: 'Entreprise', type: 'text' },
        ].map((f) => (
          <div key={f.id} className="relative">
            <input id={f.id} type={f.type} placeholder=" " className="w-full rounded-lg bg-transparent border border-[#D4AF37]/30 focus:border-[#D4AF37]/80 outline-none p-4 text-white placeholder:text-transparent peer" />
            <label htmlFor={f.id} className="absolute left-3 top-1/2 -translate-y-1/2 px-1 text-neutral-400 transition-all bg-[#0A0A0A] peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-yellow-200">{f.label}</label>
          </div>
        ))}
        <div className="relative">
          <textarea id="message" rows="5" placeholder=" " className="w-full rounded-lg bg-transparent border border-[#D4AF37]/30 focus:border-[#D4AF37]/80 outline-none p-4 text-white placeholder:text-transparent peer" />
          <label htmlFor="message" className="absolute left-3 top-6 px-1 text-neutral-400 transition-all bg-[#0A0A0A] peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-xs peer-focus:text-yellow-200">Message</label>
        </div>
        <button type="submit" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#CBA135] px-6 py-3 text-black font-medium shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_32px_rgba(212,175,55,0.25)] transition">
          Réserver un appel
          <span className="ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition">→</span>
        </button>
      </form>
    </div>
  )
}
