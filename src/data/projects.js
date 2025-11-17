export const projects = [
  {
    slug: 'streetloc',
    title: 'StreetLoc',
    subtitle: 'Location de voitures',
    tagline: 'Site moderne avec réservation instantanée',
    sector: 'Mobilité / Location',
    services: ['UI/UX', 'Développement', 'Réservation en ligne', 'Optimisation conversion'],
    cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop'
    ],
    result: '+42% réservations en 3 mois'
  },
  {
    slug: 'dogwash-besancon',
    title: 'DogWash Besançon',
    subtitle: 'Service animalier',
    tagline: 'Landing page optimisée pour les inscriptions',
    sector: 'Services',
    services: ['Branding léger', 'Landing page', 'Formulaires', 'Tracking'],
    cover: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop'
    ],
    result: '+28% d’inscriptions le premier mois'
  },
  {
    slug: 'fragranza-paris',
    title: 'Fragranza Paris',
    subtitle: 'Marque de parfum',
    tagline: 'Site e-commerce premium & storytelling',
    sector: 'Luxe / Retail',
    services: ['E-commerce', 'Storytelling', 'Design premium', 'SEO'],
    cover: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1600&auto=format&fit=crop'
    ],
    result: '+35% panier moyen après refonte'
  }
]

export const getProjectBySlug = (slug) => projects.find(p => p.slug === slug)
