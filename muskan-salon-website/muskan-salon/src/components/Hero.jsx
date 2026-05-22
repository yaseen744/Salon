import { useScrollReveal } from '../hooks/useScrollReveal';
import '../css/hero.css';

export default function Hero() {
  const revealRef = useScrollReveal();

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="Muskan Salon Interior" />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content reveal" ref={revealRef}>
          <div className="hero-eyebrow">
            <span className="hero-line"></span>
            <span className="hero-badge">Trusted by 500+ Women in Karachi</span>
          </div>

          <h1 className="hero-title">Muskan<br />Salon</h1>
          <p className="hero-subtitle">Where Beauty Meets Elegance</p>
          <p className="hero-tagline">Karachi's Premier Women's Beauty Parlour —<br />Bridal, Hair, Skin &amp; More</p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('#booking')}>
              Book on WhatsApp
            </button>
            <button className="btn-outline" onClick={() => scrollTo('#services')}>
              View Services
            </button>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="stat-number">500+</div>
          <div className="stat-label">Happy Clients</div>
        </div>
        <div className="hero-stat">
          <div className="stat-number">8+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="hero-stat">
          <div className="stat-number">100%</div>
          <div className="stat-label">Premium Products</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}
