import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects, getProjectBySlug } from '../data/projects'
import SEO from './SEO'

export default function Project() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SEO title="Projet introuvable – Melioram" description="Le projet demandé n'existe pas." />
        <h1 className="text-white text-3xl">Projet introuvable</h1>
        <Link to="/portfolio" className="text-yellow-300 underline mt-4 inline-block">Retour aux réalisations</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <SEO title={`${project.title} – Réalisation Melioram`} description={`${project.subtitle} – ${project.tagline}`} />
      <div className="flex items-center justify-between gap-4">
        <Link to="/portfolio" className="text-neutral-400 hover:text-yellow-200 transition">← Retour</Link>
      </div>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-6">
        <h1 className="text-3xl sm:text-5xl font-semibold text-white">{project.title}</h1>
        <p className="mt-2 text-yellow-300/90">{project.subtitle}</p>
        <p className="mt-4 text-neutral-300 max-w-2xl">{project.tagline}</p>
      </motion.div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-[#0F0F0F]">
        <img src={project.cover} alt="" className="w-full h-[42vh] sm:h-[55vh] object-cover" />
      </div>

      <div className="mt-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <section>
            <h2 className="text-white text-xl font-semibold">Objectifs</h2>
            <p className="mt-2 text-neutral-300">Créer une expérience fluide et premium alignée avec la marque, tout en maximisant la conversion.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-white text-xl font-semibold">Solution</h2>
            <p className="mt-2 text-neutral-300">Design minimaliste, animations maîtrisées, parcours orientés ROI, intégrations techniques adaptées.</p>
          </section>
          <section className="mt-8">
            <h2 className="text-white text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-neutral-300">{project.result}</p>
          </section>
          <section className="mt-8">
            <h2 className="text-white text-xl font-semibold">Galerie</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {project.gallery.map((src, i) => (
                <motion.img
                  key={src}
                  src={src}
                  alt=""
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.06 }}
                  className="w-full h-64 object-cover rounded-xl border border-white/5"
                />
              ))}
            </div>
          </section>
        </div>
        <aside className="lg:pl-6">
          <div className="rounded-xl border border-yellow-500/20 bg-[#0F0F0F] p-5">
            <h3 className="text-white font-semibold">Informations</h3>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-sm text-neutral-300">
              <dt className="col-span-1 text-neutral-400">Secteur</dt>
              <dd className="col-span-2">{project.sector}</dd>
              <dt className="col-span-1 text-neutral-400">Services</dt>
              <dd className="col-span-2">{project.services.join(', ')}</dd>
            </dl>
            <a href="#" className="mt-6 inline-block rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 px-5 py-2 text-sm text-black font-medium hover:brightness-110 transition">Visiter le site</a>
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <h3 className="text-white font-semibold">Autres projets</h3>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          {projects.filter(p => p.slug !== project.slug).slice(0,3).map((p,i) => (
            <motion.a
              key={p.slug}
              href={`/projets/${p.slug}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#0F0F0F]"
            >
              <img src={p.cover} alt="" className="h-40 w-full object-cover group-hover:scale-[1.03] transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 p-3">
                <div className="text-white font-medium">{p.title}</div>
                <div className="text-xs text-yellow-300/80">{p.subtitle}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
