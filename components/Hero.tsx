
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, CreditCard, Zap, Banknote, ChevronDown, ArrowDown } from 'lucide-react';
import { CHECKOUT_URL, MAIN_PRODUCT } from '../constants';

const Hero: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleDateString('es-AR', { month: 'long' });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    setCurrentDate(`${day} de ${capitalizedMonth}`);
  }, []);

  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-brand-50 text-brand-900 overflow-hidden pt-[40px] md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-6 border border-accent-200 animate-fade-in">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>El sistema N°1 en Argentina</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-serif font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight mb-6">
              Cociná una sola vez, <br className="hidden lg:block"/>
              <span className="text-brand-600 inline-block relative">
                 comé sano
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </svg>
              </span> <br className="md:hidden"/>
              toda la semana.
            </h1>
            
            <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              No es otro recetario más. Es el <strong>Sistema Meal Prep</strong> paso a paso para cocinar en 2 horas el domingo y olvidarte de "qué comemos hoy" el resto de la semana.
            </p>
            
            {/* PRICE ANCHORING: Critical for Low Ticket conversion */}
            <div className="mb-6 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-3">
                 <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-gray-900 tracking-tight">${MAIN_PRODUCT.price.toLocaleString('es-AR')}</span>
                    <span className="text-lg text-gray-400 line-through decoration-red-400 font-medium">${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}</span>
                 </div>
                 <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md border border-green-200 uppercase tracking-wide">
                    Oferta Flash Hoy
                 </span>
            </div>
            
            <div className="sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col items-center lg:items-start gap-4">
              
              {/* BOTÓN ANCLA */}
              <button 
                onClick={scrollToOffer}
                className="group relative bg-brand-600 hover:bg-brand-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3"
              >
                <span>ACCEDER POR ${MAIN_PRODUCT.price.toLocaleString('es-AR')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute -top-3 -right-3 bg-accent-500 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white animate-bounce">
                  88% OFF
                </div>
              </button>

              <div className="inline-flex flex-col gap-2 items-center lg:items-start">
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-brand-100 backdrop-blur-sm w-fit">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Oferta válida hasta hoy {currentDate}
                  </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover grayscale hover:grayscale-0 transition duration-300" src={`https://randomuser.me/api/portraits/women/${i+20}.jpg`} alt=""/>
                ))}
              </div>
              <div className="flex flex-col items-start">
                 <div className="flex text-yellow-400">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current"/>)}
                 </div>
                 <p className="text-xs font-medium">+5,000 alumnas felices</p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden transform rotate-1 hover:rotate-0 transition duration-700 border-4 border-white group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition z-10 pointer-events-none"></div>
              <img 
                className="w-full object-cover scale-105 group-hover:scale-100 transition duration-1000" 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop" 
                alt="Meal Prep Containers" 
              />
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-gray-100 z-20">
                  <p className="font-bold text-brand-700 text-xs uppercase tracking-wider">Edición 2025</p>
              </div>
            </div>
            
            {/* Decorative blob behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-200/50 rounded-full mix-blend-multiply filter blur-3xl -z-10 opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Trust Bar - Visual Cleanup */}
      <div className="bg-white py-6 border-y border-gray-100 shadow-sm relative z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-gray-600">
            
            <div className="flex items-center gap-3 w-full md:w-auto justify-center bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100/50">
                <div className="bg-blue-100 p-1.5 rounded-full"><CreditCard className="w-4 h-4 text-blue-600"/></div> 
                <span className="text-sm font-medium">Hasta 3 Cuotas <span className="font-bold text-blue-700">Sin Interés</span></span>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-center bg-green-50/50 px-4 py-2 rounded-full border border-green-100/50">
                <div className="bg-green-100 p-1.5 rounded-full"><Banknote className="w-4 h-4 text-green-600"/></div> 
                <span className="text-sm font-medium"><span className="font-bold text-green-700">10% OFF</span> vía Transferencia</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-gray-200"></div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                <Zap className="w-5 h-5 text-accent-500 fill-current"/> 
                <span className="text-sm font-medium">Entrega inmediata al Email</span>
            </div>
         </div>
      </div>
    </header>
  );
};

export default Hero;
