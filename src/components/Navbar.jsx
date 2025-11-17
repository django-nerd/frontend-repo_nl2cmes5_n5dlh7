import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, ArrowRight } from 'lucide-react'
import { openBooking } from '../utils/booking'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Réalisations' },
  { to: '/process', label: 'Notre process' },
  { to: '/about', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-[#D4AF37] to-[#CBA135] shadow-[0_0_20px_rgba(212,175,55,0.35)]" />
            <span className="text-sm tracking-widest text-neutral-200 group-hover:text-white transition">MELIORAM</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-sm text-neutral-300 hover:text-white transition ${isActive ? 'text-white' : ''}`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openBooking}
              className="group inline-flex items-center gap-2 rounded-full border border-yellow-600/50 px-4 py-2 text-sm text-yellow-200 hover:text-white hover:border-yellow-400/80 transition shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]"
            >
              <Phone size={16} className="opacity-80 group-hover:opacity-100" />
              Réserver un appel
              <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-white/5">
            <Menu className="text-neutral-300" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm ${isActive ? 'bg-white/5 text-white' : 'text-neutral-300 hover:text-white hover:bg-white/5'}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <button
                onClick={() => { setOpen(false); openBooking() }}
                className="mt-2 rounded-md px-3 py-2 text-left text-sm text-yellow-200 hover:text-white hover:bg-white/5"
              >
                Réserver un appel ↗
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
