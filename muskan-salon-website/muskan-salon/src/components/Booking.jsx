import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MessageCircle, CheckCircle } from 'lucide-react';
import '../css/booking.css';

const SERVICES = [
  'Hair Cut & Styling',
  'Hair Color / Highlights',
  'Keratin / Rebonding',
  'Facial & Skin Care',
  'Waxing & Threading',
  'Manicure & Pedicure',
  'Party / Engagement Makeup',
  'Bridal Package',
  'Mehendi',
];

export default function Booking() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '', phone: '', service: '', date: '', time: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) return;

    const message = `Assalam o Alaikum! I'd like to book an appointment at Muskan Salon.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n\nKindly confirm my slot. Thank you!`;
    window.open(`https://wa.me/923272464710?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="section booking-section">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <div className="booking-wrapper">
            <div className="booking-content">
              <span className="section-label">— Reserve Your Spot —</span>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '44px' }}>
                Book an<br />Appointment
              </h2>
              <div className="section-divider" style={{ margin: '18px 0 28px' }}></div>

              <p className="booking-text">
                Experience luxury and comfort at Muskan Salon. Fill out the form and we'll confirm
                your appointment via WhatsApp — usually within minutes.
              </p>

              <div className="booking-features">
                {[
                  'Premium Imported Products',
                  'Expert & Certified Stylists',
                  'Hygienic & Relaxing Space',
                  'Flexible Appointment Times',
                ].map((f, i) => (
                  <div className="booking-feature" key={i}>
                    <CheckCircle size={18} className="feature-icon" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="booking-form-container">
              <h3 className="booking-form-title">Request Appointment</h3>
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Ayesha Khan"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="03XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Required</label>
                  <select id="service" name="service" required value={formData.service} onChange={handleChange}>
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required min={today} value={formData.date} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time">Preferred Time</label>
                    <input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
                  </div>
                </div>

                <button type="submit" className="btn-whatsapp">
                  <MessageCircle size={20} />
                  Book via WhatsApp
                </button>
                <p className="form-note">We'll confirm your slot within a few minutes.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
