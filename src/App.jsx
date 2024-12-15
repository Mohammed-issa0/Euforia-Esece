import Hero from './components/Hero';
import Features from './components/Features';
import PerfumeSlider from './components/PerfumeSlider';
import Pricing from './components/Pricing';
import Testimonials from './components/sections/Testimonials';
import Specifications from './components/sections/Specifications';
import FAQ from './components/sections/FAQ';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <PerfumeSlider />
      <Features />
      <Pricing />
      <Specifications />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;