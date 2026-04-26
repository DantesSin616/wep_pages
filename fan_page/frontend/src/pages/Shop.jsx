import { useState, useEffect } from 'react'
import { fetchProducts } from '../api'
import './Shop.css'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter)

  const categories = ['all', 'tshirt', 'cup', 'accessory', 'other']

  if (loading) {
    return <div className="loading">Cargando productos...</div>
  }

  return (
    <div className="shop">
      <h1>Tienda Belieber</h1>
      
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat === 'all' ? 'Todos' : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-products">Próximamente productos disponibles</p>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className="placeholder-img">🎁</div>
                )}
              </div>
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <span className="stock">
                  {product.stock_quantity > 0 
                    ? `${product.stock_quantity} disponibles` 
                    : 'Agotado'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}