import { useState, useEffect } from 'react'
import { fetchSocialLinks } from '../api'
import './Home.css'

const platformIcons = {
  tiktok: '🎵',
  instagram: '📸',
  facebook: '👥',
  whatsapp: '💬',
  youtube: '▶️',
  twitter: '❌',
  other: '🔗',
}

export default function Home() {
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSocialLinks()
      .then(setLinks)
      .catch(() => setLinks([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="loading">Cargando...</div>
  }

  return (
    <div className="home">
      <section className="hero">
        <h1>Belieber Venezuela</h1>
        <p className="tagline">Unidos por la música de Justin Bieber</p>
      </section>

      <section className="social-links">
        <h2>Síguenos en redes</h2>
        <div className="links-grid">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${link.platform_name}`}
            >
              <span className="icon">{platformIcons[link.platform_name] || '🔗'}</span>
              <span className="name">{link.custom_name || link.platform_name}</span>
            </a>
          ))}
        </div>
        {links.length === 0 && (
          <p className="no-links">Próximamente enlaces a nuestras redes</p>
        )}
      </section>
    </div>
  )
}