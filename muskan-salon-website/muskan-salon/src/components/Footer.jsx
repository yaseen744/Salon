import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import '../css/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">MUSKAN SALON</h2>
            <p className="footer-tagline">
              Karachi's Premier Women's Beauty Parlour — where beauty meets elegance and every visit is a luxurious experience.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#" className="social-link" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://wa.me/923272464710" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Services</a></li>
              <li><a href="#gallery" onClick={(e) => scrollTo(e, '#gallery')}>Gallery</a></li>
              <li><a href="#pricing" onClick={(e) => scrollTo(e, '#pricing')}>Pricing</a></li>
              <li><a href="#reviews" onClick={(e) => scrollTo(e, '#reviews')}>Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => scrollTo(e, '#contact')}>Contact & Map</a></li>
              <li><a href="#booking" onClick={(e) => scrollTo(e, '#booking')}>Book Appointment</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Hair Styling & Color</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Facial & Skin Care</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Bridal Makeup</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Manicure & Pedicure</a></li>
              <li><a href="#services" onClick={(e) => scrollTo(e, '#services')}>Waxing & Threading</a></li>
            </ul>
          </div>

          <div className="footer-contact-group">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-item">
              <Phone size={15} className="footer-contact-icon" />
              <a href="https://wa.me/923272464710" target="_blank" rel="noopener noreferrer">+92 327 2464710</a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={15} className="footer-contact-icon" />
              <span>Karachi, Sindh, Pakistan</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={15} className="footer-contact-icon" />
              <span>Mon–Sat: 10am – 8pm<br />Sunday: 11am – 6pm</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-location">
            <MapPin size={14} />
            <span>Karachi, Pakistan</span>
          </div>
          <p className="copyright">&copy; {currentYear} Muskan Salon. All rights reserved.</p>
        </div>
      </div>

      <div className="wa-container">
        <div className="wa-tooltip">Book on WhatsApp</div>
        <a
          href="https://wa.me/923272464710"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-button"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </footer>
  );
}
