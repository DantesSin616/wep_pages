# Architecture - Belieber Venezuela Fan Page

## Stack Recomendation

### Backend: Django (Python)
- Built-in admin panel for managing stock and news
- ORM for products and orders
- Easy authentication & authorization
- Extendable for future features (payments, users)

### Frontend: React + Vite
- Fast development with hot reload
- Large ecosystem and community
- Easy to maintain and expand

---

## Pages Structure

### 1. Home (`/`)
- Hero section with branding
- Social media links (TikTok, Instagram, Facebook, WhatsApp group)
- Dynamic links section (easily add more in future)
- Featured products preview

### 2. Shop (`/shop`)
- Product grid (t-shirts, cups, accessories)
- Product detail with stock availability
- Simple cart functionality
- Checkout flow (future: payment integration)

### 3. News (`/news`)
- News feed for Justin Bieber updates
- Admin can create/edit/delete posts
- Categories: tours, releases, fan events

### 4. About (`/about`)
- Who they are (fan group from Venezuela)
- Mission statement
- Contact information

---

## Data Models (Backend)

### Product
- name, description, price, stock_quantity
- image, category, is_available
- created_at, updated_at

### NewsPost
- title, content, image
- published_at, is_published
- author (admin user)

### SocialLink
- platform_name, url, icon, is_active
- order (display priority)

---

## Admin Features

- **Product Management**: Add/edit/delete products, update stock
- **News Management**: Create/edit/delete news posts
- **Social Links**: Add/edit social media links
- **Orders**: View customer orders (future)

---

## Deployment

### Running the Server
```bash
cd fan_page
source venv/bin/activate
python manage.py runserver 0.0.0.0:8000
```

### Host
- Local: `http://localhost:8000`
- Network: `http://<your-ip>:8000`

### Admin Panel
- URL: `http://localhost:8000/admin/`
- Create admin user: `python manage.py createsuperuser`

---

## Future Considerations

- User accounts & profiles
- Payment gateway integration (Stripe, PayPal)
- Email notifications
- WhatsApp business integration
- Analytics dashboard