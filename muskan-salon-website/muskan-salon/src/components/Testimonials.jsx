import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import '../css/testimonials.css';

const REVIEWS = [
  { name: 'Ayesha Khan', text: "Got my bridal makeup done from Muskan Salon and I couldn't be happier. The staff is so cooperative and the ambiance is very relaxing.", rating: 5 },
  { name: 'Fatima Ali', text: 'Best keratin treatment in Karachi! My hair feels incredibly soft and the results have lasted months. Highly recommended.', rating: 5 },
  { name: 'Zainab Ahmed', text: 'I regularly come here for my facials and threading. Very hygienic and professional service every single time.', rating: 5 },
  { name: 'Sana Tariq', text: "Booked them for my sister's engagement. The makeup was flawless, not cakey at all, exactly how we wanted it.", rating: 5 },
  { name: 'Nida Syed', text: 'Their gold facial gave me such a beautiful glow before Eid. The environment is so peaceful and luxurious.', rating: 5 },
  { name: 'Huma Qureshi', text: 'Excellent mehendi artists and very quick service. The parlor is beautifully decorated and smells amazing.', rating: 5 },
  { name: 'Mahnoor Baig', text: 'Amazing pedicure and manicure experience. My hands look brand new! Will definitely come back.', rating: 5 },
  { name: 'Rabia Shah', text: 'The Diamond bridal package was worth every rupee. I felt like a queen on my wedding day.', rating: 5 },
];

export default function Testimonials() {
  const revealRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % REVIEWS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section id="reviews" className="section section-alt">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <div className="section-header">
            <span className="section-label">— Words of Love —</span>
            <h2 className="section-title">Client Testimonials</h2>
            <div className="section-divider"></div>
          </div>

          <div className="testimonials-wrapper">
            <div className="testimonials-container">
              <div
                className="testimonials-track"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {REVIEWS.map((review, idx) => (
                  <div key={idx} className="testimonial-slide">
                    <div className="testimonial-card">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            fill={i < review.rating ? 'var(--color-gold)' : 'transparent'}
                            color={i < review.rating ? 'var(--color-gold)' : 'var(--color-border)'}
                          />
                        ))}
                      </div>
                      <p className="testimonial-text">"{review.text}"</p>
                      <div className="testimonial-author">
                        <div className="testimonial-avatar">{review.name[0]}</div>
                        <h4 className="testimonial-name">{review.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials-nav">
              <button className="testimonials-arrow" onClick={goPrev} aria-label="Previous review">
                <ChevronLeft size={18} />
              </button>
              <div className="testimonials-dots">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${activeIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Review ${idx + 1}`}
                  />
                ))}
              </div>
              <button className="testimonials-arrow" onClick={goNext} aria-label="Next review">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
