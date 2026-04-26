const API_URL = 'http://localhost:8000/api'

export async function fetchSocialLinks() {
  const res = await fetch(`${API_URL}/social/`)
  return res.json()
}

export async function fetchProducts() {
  const res = await fetch(`${API_URL}/products/`)
  return res.json()
}

export async function fetchNews() {
  const res = await fetch(`${API_URL}/news/`)
  return res.json()
}