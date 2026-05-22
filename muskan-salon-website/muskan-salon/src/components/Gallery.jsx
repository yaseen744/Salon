import { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/gallery.css';

const IMAGES = [
  { src: '/ba-makeup.png', title: 'Party Makeup', subtitle: 'Glam & Glamour', colSpan: true, rowSpan: true },
  { src: '/ba-hair.png', title: 'Hair Treatment', subtitle: 'Hair Care', colSpan: false, rowSpan: false },
  { src: '/ba-skin.png', title: 'Luxury Facial', subtitle: 'Skin Care', colSpan: false, rowSpan: true },
  { src: '/gallery-extra-1.png', title: 'Bridal Mehendi', subtitle: 'Mehendi Art', colSpan: false, rowSpan: false },
  { src: '/ba-mehendi.png', title: 'Traditional Mehendi', subtitle: 'Bridal Art', colSpan: false, rowSpan: false },
  { src: '/gallery-extra-2.png', title: 'Engagement Look', subtitle: 'Bridal Makeup', colSpan: true, rowSpan: false },
];

export default function Gallery() {
  const revealRef = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback((e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  const next = useCallback((e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % IMAGES.length);
  }, []);

  const getItemClass = (img) => {
    let cls = 'gallery-item';
    if (img.colSpan) cls += ' col-span-2';
    if (img.rowSpan) cls += ' row-span-2';
    return cls;
  };

  return (
    <section id="gallery" className="section">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <div className="section-header">
            <span className="section-label">— Our Portfolio —</span>
            <h2 className="section-title">Transformations</h2>
            <div className="section-divider"></div>
          </div>

          <div className="gallery-grid">
            {IMAGES.map((img, idx) => (
              <div
                key={idx}
                className={getItemClass(img)}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              >
                <img src={img.src} alt={img.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-title">{img.title}</span>
                  <span className="gallery-subtitle">{img.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={20} />
          </button>
          <button className="lightbox-nav prev" onClick={prev} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>
          <button className="lightbox-nav next" onClick={next} aria-label="Next">
            <ChevronRight size={22} />
          </button>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[lightboxIndex].src} alt={IMAGES[lightboxIndex].title} />
            <p className="lightbox-caption">{IMAGES[lightboxIndex].title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
