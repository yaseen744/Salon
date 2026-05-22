# Muskan Salon — Official Website

A complete luxury salon website for **Muskan Salon**, Karachi's premier women's beauty parlour.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Features

- Full-screen hero with vibrant background image (no white overlay)
- WhatsApp booking form → pre-fills message to +92 327 2464710
- Tabbed services section with Karachi prices
- Masonry gallery with lightbox (prev/next navigation)
- Transparent pricing across 4 categories
- Auto-sliding testimonials with arrow navigation
- Full Contact section with Google Maps embed
- Contact info cards (phone, address, hours, social)
- Dark elegant footer with business hours
- Floating WhatsApp button on all pages
- Fully responsive on mobile, tablet and desktop
- Smooth scroll-reveal animations throughout

## Tech Stack

- React 18
- Vite 5
- Pure CSS (no Tailwind, no UI library)
- Lucide React (icons only)
- Google Fonts: Cormorant Garamond + Jost

## Project Structure

```
muskan-salon/
├── public/
│   ├── hero-bg.png
│   ├── ba-makeup.png
│   ├── ba-hair.png
│   ├── ba-skin.png
│   ├── ba-mehendi.png
│   ├── gallery-extra-1.png
│   ├── gallery-extra-2.png
│   ├── bridal-1/2/3.png
│   ├── specialist-1/2/3/4.png
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          sticky nav, mobile menu
│   │   ├── Hero.jsx            full-screen hero, stats bar
│   │   ├── Services.jsx        tabbed service cards + prices
│   │   ├── Gallery.jsx         masonry grid + lightbox
│   │   ├── Pricing.jsx         4-category pricing table
│   │   ├── Testimonials.jsx    auto-sliding reviews + arrows
│   │   ├── Booking.jsx         WhatsApp appointment form
│   │   ├── Contact.jsx         Google Maps + contact info
│   │   └── Footer.jsx          dark footer + floating WhatsApp
│   │
│   ├── css/
│   │   ├── global.css          CSS variables, reset, buttons
│   │   ├── navbar.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── gallery.css
│   │   ├── pricing.css
│   │   ├── testimonials.css
│   │   ├── booking.css
│   │   ├── contact.css
│   │   └── footer.css
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Customisation

| What to change | Where |
|---|---|
| Salon name | Search & replace `Muskan Salon` across all files |
| WhatsApp number | Search & replace `923272464710` |
| Colours | `src/css/global.css` → `:root` variables |
| Service prices | `src/components/Services.jsx` and `Pricing.jsx` |
| Images | Replace files in `/public/` (keep same filenames) |
| Google Maps | `src/components/Contact.jsx` → update the iframe `src` |
| Business hours | `src/components/Contact.jsx` and `Footer.jsx` |

## WhatsApp Contact

**+92 327 2464710** — used in all booking forms, floating button, and contact section.
