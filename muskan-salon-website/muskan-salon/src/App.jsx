import './css/global.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
