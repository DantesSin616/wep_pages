import './About.css'

export default function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Sobre Nosotros</h1>
        <p className="subtitle">Belieber Venezuela</p>
      </section>

      <section className="about-content">
        <div className="section">
          <h2>Quiénes Somos</h2>
          <p>
            Somos un grupo de fans venezolanos de Justin Bieber united por el amor a su música. 
            Desde Venezuela, celebramos y apoyamos la carrera del artista que ha sido parte de nuestra generación.
          </p>
        </div>

        <div className="section">
          <h2>Nuestra Misión</h2>
          <p>
            Crear una comunidad unite para los beliebers de Venezuela, compartiendo noticias, 
            organizando eventos y apoyando la música de Justin Bieber. 
            También buscamos representar a Venezuela en la comunidad internacional de fans.
          </p>
        </div>

        <div className="section">
          <h2>Contacto</h2>
          <p>
            ¿Quieres contactarnos? Escríbenos a través de nuestras redes sociales 
            o únete a nuestro grupo de WhatsApp.
          </p>
        </div>
      </section>
    </div>
  )
}