
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

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased scroll-smooth relative">
      <UrgencyBar />
      <StickyCTA />
      <SocialProofToast />
      <Hero />
      <PainPoints />
      <AudienceFilter />
      <Transformation />
      <Solution />
      <InsideLook />
      <ProductShowcase />
      <Bonuses />
      <Testimonials />
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
