import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-16 bg-gradient-to-t from-black/20 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="text-sm text-neutral-400">© {new Date().getFullYear()} Melioram. Tous droits réservés.</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-neutral-400">Création de sites premium & marketing de croissance.</p>
          </div>
          <div className="md:text-right text-neutral-400 text-sm">
            <a href="#" className="hover:text-yellow-200 transition">Mentions légales</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-yellow-200 transition">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
