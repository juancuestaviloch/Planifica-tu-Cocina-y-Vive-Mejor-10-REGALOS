
import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingCart, Zap } from 'lucide-react';
import { MAIN_PRODUCT, CHECKOUT_URL } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // CONSULTOR CRO UPDATE:
      // El umbral anterior de 4500px es una "Zona Muerta" de conversión.
      // El botón debe aparecer en cuanto el Hero sale de pantalla (aprox 800px).
      // Esto asegura que la opción de compra esté siempre disponible (Ley de Fitts).
      if (window.scrollY > 800) {
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
    <div className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-b border-brand-500/20 z-40 transform transition-all duration-300 animate-in slide-in-from-top">
      {/* Progress Bar subtle indicator */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-500 to-accent-500 w-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between gap-2">
        
        {/* Desktop Logo / Mobile Hidden */}
        <div className="hidden md:flex items-center gap-3">
            <div className="bg-brand-100 p-1.5 rounded-lg">
                <Zap className="w-4 h-4 text-brand-600 fill-current" />
            </div>
            <span className="font-serif font-bold text-gray-900 text-lg">Cocina Resuelta</span>
            <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full border border-red-200 animate-pulse">
                ÚLTIMAS HORAS
            </span>
        </div>
        
        {/* Price & CTA Container */}
        <div className="flex items-center justify-between w-full md:w-auto md:gap-6">
            
            {/* Price Info - Optimized for Anchor Bias */}
            <div className="flex flex-col items-start md:items-end leading-tight">
                <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs line-through decoration-red-400 hidden sm:inline-block font-medium">
                        ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}
                    </span>
                    <span className="text-[10px] bg-green-50 text-green-700 px-1.5 py-0.5 rounded font-bold whitespace-nowrap border border-green-200">
                        Ahorrás ${(MAIN_PRODUCT.originalPrice - MAIN_PRODUCT.price).toLocaleString('es-AR')}
                    </span>
                </div>
                <div className="flex items-baseline gap-1">
                    <span className="text-brand-600 font-black text-xl sm:text-2xl tracking-tight">
                        ${MAIN_PRODUCT.price.toLocaleString('es-AR')}
                    </span>
                </div>
            </div>

            {/* Button - Optimized for Contrast & Size */}
            <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-accent-500 hover:bg-accent-600 text-white text-sm sm:text-base font-bold py-3 px-6 rounded-full shadow-lg shadow-accent-500/30 hover:shadow-xl transition flex items-center gap-2 whitespace-nowrap transform active:scale-95 group"
            >
                <span className="hidden sm:inline">Sí, Quiero Acceso</span>
                <span className="sm:hidden">Comprar Ahora</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
