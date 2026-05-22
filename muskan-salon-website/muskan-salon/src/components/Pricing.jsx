import { useScrollReveal } from '../hooks/useScrollReveal';
import { Scissors, Sparkles, Droplets, Gem } from 'lucide-react';
import '../css/pricing.css';

const PRICING_CATEGORIES = [
  {
    title: 'Hair Care & Styling',
    icon: <Scissors size={18} />,
    items: [
      { name: 'Hair Cut & Style', price: 'Rs. 800 - 1,200' },
      { name: 'Root Touch-up', price: 'Rs. 1,500' },
      { name: 'Global Haircolor', price: 'Rs. 4,000+' },
      { name: 'Highlights / Lowlights', price: 'Rs. 5,000+' },
      { name: 'Keratin / Rebonding', price: 'Rs. 8,000+' },
    ],
  },
  {
    title: 'Facial & Skin Care',
    icon: <Sparkles size={18} />,
    items: [
      { name: 'Classic Clean Up', price: 'Rs. 800' },
      { name: 'Herbal Facial', price: 'Rs. 1,500' },
      { name: 'Whitening Facial', price: 'Rs. 2,000' },
      { name: 'Gold Facial', price: 'Rs. 2,500' },
      { name: 'Diamond Facial', price: 'Rs. 3,500' },
    ],
  },
  {
    title: 'Waxing & Threading',
    icon: <Droplets size={18} />,
    items: [
      { name: 'Eyebrow & Upper Lip', price: 'Rs. 250' },
      { name: 'Full Face Threading', price: 'Rs. 500' },
      { name: 'Half Arms Wax', price: 'Rs. 500' },
      { name: 'Full Legs Wax', price: 'Rs. 1,000' },
      { name: 'Full Body Wax', price: 'Rs. 3,000' },
    ],
  },
  {
    title: 'Hand & Foot Care',
    icon: <Gem size={18} />,
    items: [
      { name: 'Classic Manicure', price: 'Rs. 700' },
      { name: 'Classic Pedicure', price: 'Rs. 900' },
      { name: 'Spa Manicure', price: 'Rs. 1,200' },
      { name: 'Spa Pedicure', price: 'Rs. 1,500' },
      { name: 'Gel Polish Application', price: 'Rs. 2,500' },
    ],
  },
];

export default function Pricing() {
  const revealRef = useScrollReveal();

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <div className="section-header">
            <span className="section-label">— Investment —</span>
            <h2 className="section-title">Transparent Pricing</h2>
            <div className="section-divider"></div>
          </div>

          <div className="pricing-grid">
            {PRICING_CATEGORIES.map((category, idx) => (
              <div key={idx} className="pricing-category">
                <div className="pricing-category-header">
                  <div className="pricing-category-icon">{category.icon}</div>
                  <h3 className="pricing-category-title">{category.title}</h3>
                </div>
                <ul className="pricing-list">
                  {category.items.map((item, i) => (
                    <li key={i} className="pricing-item">
                      <span className="pricing-name">{item.name}</span>
                      <span className="pricing-dots"></span>
                      <span className="pricing-value">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="pricing-note">
            ✦ Prices are approximate and may vary based on hair length, density, or specific products used.
            Contact us on WhatsApp for custom packages and bridal quotes.
          </p>
        </div>
      </div>
    </section>
  );
}
