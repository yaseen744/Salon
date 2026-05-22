import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Facebook } from 'lucide-react';
import '../css/contact.css';

const CONTACT_CARDS = [
  {
    icon: <Phone size={24} />,
    title: 'Call or WhatsApp',
    lines: ['+92 327 2464710'],
    action: { label: 'Chat on WhatsApp', href: 'https://wa.me/923272464710' },
    accent: 'green',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Our Location',
    lines: ['Karachi, Sindh', 'Pakistan'],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=24.8607,67.0011' },
    accent: 'gold',
  },
  {
    icon: <Clock size={24} />,
    title: 'Business Hours',
    lines: ['Mon – Sat: 10:00am – 8:00pm', 'Sunday: 11:00am – 6:00pm'],
    action: null,
    accent: 'rose',
  },
  {
    icon: <Instagram size={24} />,
    title: 'Follow Us',
    lines: ['Instagram', 'Facebook'],
    action: { label: 'Find Us Online', href: '#' },
    accent: 'pink',
  },
];

export default function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <div className="section-header">
            <span className="section-label">— Find Us —</span>
            <h2 className="section-title">Visit Muskan Salon</h2>
            <div className="section-divider"></div>
          </div>

          {/* Contact Info Cards */}
          <div className="contact-cards-grid">
            {CONTACT_CARDS.map((card, idx) => (
              <div key={idx} className={`contact-card contact-card--${card.accent}`}>
                <div className="contact-card-icon">{card.icon}</div>
                <h3 className="contact-card-title">{card.title}</h3>
                <div className="contact-card-lines">
                  {card.lines.map((line, i) => (
                    <p key={i} className="contact-card-line">{line}</p>
                  ))}
                </div>
                {card.action && (
                  <a
                    href={card.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card-action"
                  >
                    {card.action.label} →
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Map + Quick Contact Layout */}
          <div className="contact-main-grid">
            {/* Google Maps Embed */}
            <div className="contact-map-wrapper">
              <div className="contact-map-header">
                <MapPin size={18} />
                <span>Muskan Salon — Karachi, Pakistan</span>
              </div>
              <div className="contact-map-frame">
                <iframe
                  title="Muskan Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115830.76039587208!2d67.01025!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a
                href="https://maps.google.com/?q=24.8607,67.0011"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-link"
              >
                <MapPin size={16} />
                Open in Google Maps
              </a>
            </div>

            {/* Quick Contact Panel */}
            <div className="contact-panel">
              <div className="contact-panel-inner">
                <h3 className="contact-panel-title">Get In Touch</h3>
                <p className="contact-panel-text">
                  Ready to look and feel your best? Reach out to us on WhatsApp or visit us at our salon in Karachi. We'd love to welcome you.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-row">
                    <div className="contact-info-icon contact-info-icon--green">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="contact-info-label">Call / WhatsApp</p>
                      <a href="https://wa.me/923272464710" target="_blank" rel="noopener noreferrer" className="contact-info-value">
                        +92 327 2464710
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon contact-info-icon--gold">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="contact-info-label">Address</p>
                      <p className="contact-info-value">Karachi, Sindh, Pakistan</p>
                    </div>
                  </div>

                  <div className="contact-info-row">
                    <div className="contact-info-icon contact-info-icon--rose">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="contact-info-label">Opening Hours</p>
                      <p className="contact-info-value">Mon–Sat: 10am – 8pm</p>
                      <p className="contact-info-value">Sunday: 11am – 6pm</p>
                    </div>
                  </div>
                </div>

                <div className="contact-social-row">
                  <span className="contact-social-label">Follow us:</span>
                  <div className="contact-social-links">
                    <a href="#" className="contact-social-btn" aria-label="Instagram"><Instagram size={18} /></a>
                    <a href="#" className="contact-social-btn" aria-label="Facebook"><Facebook size={18} /></a>
                    <a href="https://wa.me/923272464710" target="_blank" rel="noopener noreferrer" className="contact-social-btn contact-social-btn--wa" aria-label="WhatsApp">
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/923272464710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-wa-btn"
                >
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
