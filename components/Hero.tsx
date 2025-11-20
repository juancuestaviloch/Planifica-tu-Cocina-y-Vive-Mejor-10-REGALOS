
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, CreditCard, Zap, Banknote } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const Hero: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleDateString('es-AR', { month: 'long' });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    setCurrentDate(`${day} de ${capitalizedMonth}`);
  }, []);

  return (
    <header className="relative bg-brand-50 text-brand-900 overflow-hidden pt-[40px] md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-6 border border-accent-200">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>El sistema N°1 en Argentina</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-serif font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight">
              Cociná una sola vez, <br className="hidden lg:block"/>
              <span className="text-brand-600 inline-block relative">
                 comé sano
                 <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                 </svg>
              </span> <br className="md:hidden"/>
              toda la semana.
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              No es otro recetario más. Es el <strong>Sistema Meal Prep</strong> paso a paso para cocinar en 2 horas el domingo y olvidarte de "qué comemos hoy" el resto de la semana.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-accent-500 hover:bg-accent-600 shadow-xl hover:shadow-2xl transform transition hover:-translate-y-1 md:text-xl"
              >
                ¡QUIERO MI SISTEMA YA!
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <p className="mt-3 text-xs text-gray-500 uppercase tracking-wider font-semibold flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Oferta válida hasta hoy {currentDate}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src={`https://randomuser.me/api/portraits/women/${i+20}.jpg`} alt=""/>
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
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden transform rotate-1 hover:rotate-0 transition duration-700 border-4 border-white">
              <img 
                className="w-full object-cover" 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop" 
                alt="Meal Prep Containers" 
              />
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-lg border border-gray-100">
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
