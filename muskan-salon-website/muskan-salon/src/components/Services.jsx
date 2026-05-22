import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Scissors, Sparkles, Droplets, Star, Heart } from 'lucide-react';
import '../css/services.css';

const SERVICES_DATA = [
  {
    id: 'hair',
    title: 'Hair',
    icon: <Scissors size={22} />,
    items: [
      { name: 'Cut & Style', price: 'Rs. 800 - 1,200' },
      { name: 'Haircolor', price: 'Rs. 2,500 - 8,000' },
      { name: 'Blow Dry', price: 'Rs. 600 - 1,000' },
      { name: 'Keratin Treatment', price: 'Rs. 3,000 - 12,000' },
      { name: 'Extensions', price: 'Rs. 5,000+' },
    ],
  },
  {
    id: 'skin',
    title: 'Skin & Facial',
    icon: <Sparkles size={22} />,
    items: [
      { name: 'Basic Facial', price: 'Rs. 1,200' },
      { name: 'Gold Facial', price: 'Rs. 2,500' },
      { name: 'Diamond Facial', price: 'Rs. 3,500' },
      { name: 'Whitening Facial', price: 'Rs. 2,000' },
      { name: 'Clean Up', price: 'Rs. 800' },
      { name: 'Bleach', price: 'Rs. 600 - 1,000' },
      { name: 'Detan', price: 'Rs. 700' },
    ],
  },
  {
    id: 'threading',
    title: 'Threading & Waxing',
    icon: <Droplets size={22} />,
    items: [
      { name: 'Eyebrow Threading', price: 'Rs. 150' },
      { name: 'Full Face Threading', price: 'Rs. 500' },
      { name: 'Full Arms Wax', price: 'Rs. 800' },
      { name: 'Full Legs Wax', price: 'Rs. 1,000' },
      { name: 'Full Body Wax', price: 'Rs. 3,000' },
    ],
  },
  {
    id: 'nails',
    title: 'Nails',
    icon: <Star size={22} />,
    items: [
      { name: 'Manicure', price: 'Rs. 700' },
      { name: 'Pedicure', price: 'Rs. 900' },
      { name: 'Gel Nails', price: 'Rs. 2,500' },
      { name: 'Nail Art', price: 'Rs. 200/nail+' },
    ],
  },
  {
    id: 'makeup',
    title: 'Makeup',
    icon: <Heart size={22} />,
    items: [
      { name: 'Party Makeup', price: 'Rs. 3,500 - 6,000' },
      { name: 'Engagement Makeup', price: 'Rs. 8,000 - 15,000' },
      { name: 'Bridal Makeup', price: 'Rs. 15,000 - 35,000' },
      { name: 'Mehendi', price: 'Rs. 1,500 - 8,000' },
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const revealRef = useScrollReveal();

  const activeCategory = SERVICES_DATA.find((c) => c.id === activeTab) || SERVICES_DATA[0];

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="reveal" ref={revealRef}>
          <span className="section-label">— Our Services —</span>
          <h2 className="section-title">Elevate Your Beauty</h2>
          <div className="section-divider"></div>

          <div className="services-wrapper">
            <div className="services-tabs">
              {SERVICES_DATA.map((tab) => (
                <button
                  key={tab.id}
                  className={`service-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-text">{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="services-content">
              <div className="service-cards-grid">
                {activeCategory.items.map((item, index) => (
                  <div
                    key={index}
                    className="service-card"
                    style={{ animationDelay: `${index * 0.08}s` }}
                  >
                    <div className="service-card-header">
                      <div className="service-icon-small">{activeCategory.icon}</div>
                      <h4 className="service-name">{item.name}</h4>
                    </div>
                    <div className="service-dots"></div>
                    <span className="service-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
