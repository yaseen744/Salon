import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../css/navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <button className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          MUSKAN SALON
        </button>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollTo(link.href)} className="nav-link">
              {link.name}
            </button>
          ))}
          <button onClick={() => scrollTo('#booking')} className="btn-primary nav-btn">
            Book Now
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button key={link.name} onClick={() => scrollTo(link.href)} className="mobile-link">
            {link.name}
          </button>
        ))}
        <button onClick={() => scrollTo('#booking')} className="btn-primary mobile-btn">
          Book Now
        </button>
      </div>
    </nav>
  );
}
