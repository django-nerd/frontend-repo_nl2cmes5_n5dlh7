import React from 'react'
import { Helmet } from 'react-helmet'

export default function SEO({ title, description, canonical }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta name="theme-color" content="#0A0A0A" />
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
    </Helmet>
  )
}
