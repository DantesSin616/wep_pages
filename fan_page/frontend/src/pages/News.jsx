import { useState, useEffect } from 'react'
import { fetchNews } from '../api'
import './News.css'

const categoryLabels = {
  tour: 'Gira',
  release: 'Nuevo Lanzamiento',
  event: 'Evento de Fans',
  other: 'Otro',
}

export default function News() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNews()
      .then(setNews)
      .catch(() => setNews([]))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div className="loading">Cargando noticias...</div>
  }

  return (
    <div className="news">
      <h1>Noticias de Justin Bieber</h1>
      
      {news.length === 0 ? (
        <p className="no-news">Próximamente noticias y actualizaciones</p>
      ) : (
        <div className="news-list">
          {news.map(post => (
            <article key={post.id} className="news-card">
              {post.image && (
                <div className="news-image">
                  <img src={post.image} alt={post.title} />
                </div>
              )}
              <div className="news-content">
                <span className={`category ${post.category}`}>
                  {categoryLabels[post.category] || post.category}
                </span>
                <h2>{post.title}</h2>
                <p className="content">{post.content}</p>
                <time className="date">
                  {new Date(post.published_at).toLocaleDateString('es-VE')}
                </time>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}