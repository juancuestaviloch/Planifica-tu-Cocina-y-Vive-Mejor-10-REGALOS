
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { MAIN_PRODUCT, CHECKOUT_URL } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
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
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 z-40 transform transition-transform duration-300 animate-in slide-in-from-top">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-3">
            <span className="font-serif font-bold text-gray-900 text-lg">Cocina Resuelta</span>
            <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">OFERTA ACTIVA</span>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col items-start md:items-end">
                <span className="text-gray-400 text-xs line-through decoration-red-400">${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}</span>
                <div className="flex items-baseline gap-2">
                    <span className="text-brand-600 font-bold text-xl">${MAIN_PRODUCT.price.toLocaleString('es-AR')}</span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold whitespace-nowrap">3 Cuotas s/int</span>
                </div>
            </div>
            <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-accent-500 hover:bg-accent-600 text-white text-sm md:text-base font-bold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition flex items-center gap-2 whitespace-nowrap"
            >
                Comprar Ahora <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;