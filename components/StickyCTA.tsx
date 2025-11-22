
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { MAIN_PRODUCT, CHECKOUT_URL } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // CHANGED: Increased threshold to 4500px to ensure it appears ONLY after the calculator
      // This accounts for Hero + PainPoints + Audience + Transformation + Solution + InsideLook + Showcase + Testimonials
      if (window.scrollY > 4500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200 z-40 transform transition-all duration-300 animate-in slide-in-from-top">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between gap-2">
        
        {/* Desktop Logo / Mobile Hidden */}
        <div className="hidden md:flex items-center gap-3">
            <span className="font-serif font-bold text-gray-900 text-lg">Cocina Resuelta</span>
            <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">OFERTA ACTIVA</span>
        </div>
        
        {/* Price & CTA Container */}
        <div className="flex items-center justify-between w-full md:w-auto md:gap-6">
            
            {/* Price Info */}
            <div className="flex flex-col items-start md:items-end leading-tight">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs line-through decoration-red-400 hidden sm:inline-block">
                        ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}
                    </span>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold whitespace-nowrap border border-blue-100">
                        3 Cuotas s/int
                    </span>
                </div>
                <div className="flex items-baseline gap-1">
                    <span className="text-brand-600 font-black text-xl sm:text-2xl tracking-tight">
                        ${MAIN_PRODUCT.price.toLocaleString('es-AR')}
                    </span>
                    <span className="text-xs text-gray-500 font-bold">ARS</span>
                </div>
            </div>

            {/* Button */}
            <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-accent-500 hover:bg-accent-600 text-white text-sm sm:text-base font-bold py-2.5 px-5 rounded-full shadow-lg hover:shadow-xl transition flex items-center gap-2 whitespace-nowrap transform active:scale-95"
            >
                <span className="hidden sm:inline">Acceder Ahora</span>
                <span className="sm:hidden">Comprar</span>
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
