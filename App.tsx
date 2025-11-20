
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import ProductShowcase from './components/ProductShowcase';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import Author from './components/Author';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Offer from './components/Offer';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import UrgencyBar from './components/UrgencyBar';
import StickyCTA from './components/StickyCTA';
import SocialProofToast from './components/SocialProofToast';
import AudienceFilter from './components/AudienceFilter';
import Transformation from './components/Transformation';
import InsideLook from './components/InsideLook';
import SavingsCalculator from './components/SavingsCalculator';
import ComparisonTable from './components/ComparisonTable';
import ExitIntentModal from './components/ExitIntentModal';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased scroll-smooth relative">
      <UrgencyBar />
      <StickyCTA />
      <SocialProofToast />
      <ExitIntentModal />
      
      {/* FASE 1: ENGANCHE Y PROBLEMA */}
      <Hero />
      <PainPoints />
      <AudienceFilter />
      
      {/* FASE 2: DESEO Y SOLUCIÓN */}
      <Transformation />
      <Solution />
      
      {/* FASE 3: TANGIBILIDAD DEL PRODUCTO (Emoción visual) */}
      <InsideLook />
      <ProductShowcase />
      
      {/* FASE 4: PRUEBA SOCIAL (Validación) */}
      <Testimonials />

      {/* FASE 5: LÓGICA Y RACIONALIZACIÓN (Justificar la compra) */}
      <ComparisonTable />
      <SavingsCalculator />
      
      {/* FASE 6: OFERTA Y CIERRE */}
      <Bonuses />
      <Author />
      <Guarantee />
      <Offer />
      <FAQ />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;