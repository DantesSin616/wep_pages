import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
         Belieber VE
        </Link>
        <div className="nav-links">
          <Link to="/" className={isActive('/')}>Inicio</Link>
          <Link to="/shop" className={isActive('/shop')}>Tienda</Link>
          <Link to="/news" className={isActive('/news')}>Noticias</Link>
          <Link to="/about" className={isActive('/about')}>Nosotros</Link>
        </div>
      </div>
    </nav>
  )
}