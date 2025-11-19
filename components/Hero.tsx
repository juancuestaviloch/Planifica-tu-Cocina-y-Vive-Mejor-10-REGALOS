import React from 'react';
import { ArrowRight, Star, Users, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-brand-50 text-brand-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-600 rounded-full px-3 py-1 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>Más de 5,000 alumnas satisfechas</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-serif font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight">
              Cociná <span className="text-brand-600">una sola vez</span>,<br/>
              comé sano <span className="text-accent-600">toda la semana.</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              El sistema paso a paso para dejar de ser esclava de la cocina, ahorrar dinero en el súper y tener siempre un plato saludable listo en tu heladera.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a href="#offer" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-accent-500 hover:bg-accent-600 shadow-lg transform transition hover:-translate-y-1 md:text-xl">
                ¡QUIERO ACCESO INMEDIATO!
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <p className="mt-3 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                *Oferta por tiempo limitado
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={`https://randomuser.me/api/portraits/women/${i+20}.jpg`} alt=""/>
                ))}
              </div>
              <p>Unite a la comunidad de Cocina Resuelta</p>
            </div>
          </div>

          {/* Image Column */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-2xl lg:max-w-md overflow-hidden transform rotate-2 hover:rotate-0 transition duration-500">
              <img 
                className="w-full" 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop" 
                alt="Meal Prep Containers" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-xl">Curso de Organización Semanal</p>
                  <p className="text-sm opacity-90">Tu guía definitiva de cocina inteligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Bar */}
      <div className="bg-white py-8 border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="flex items-center gap-2"><Users className="w-5 h-5"/> Comunidad Activa</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5"/> Calidad Premium</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> Compra Segura</div>
         </div>
      </div>
    </header>
  );
};

export default Hero;