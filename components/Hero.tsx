
import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, Users, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const Hero: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    // Obtener día y mes por separado para poder capitalizar el mes
    const day = date.getDate();
    const month = date.toLocaleDateString('es-AR', { month: 'long' });
    // Capitalizar primera letra del mes (ej: noviembre -> Noviembre)
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    
    setCurrentDate(`${day} de ${capitalizedMonth}`);
  }, []);

  return (
    <header className="relative bg-brand-50 text-brand-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Column */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-600 rounded-full px-3 py-1 text-sm font-semibold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>El sistema de organización N°1</span>
            </div>
            
            <h1 className="text-4xl tracking-tight font-serif font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight">
              Cociná una sola vez, <span className="text-brand-600">comé sano toda la semana</span>.
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              No es otro recetario más. Es el <strong>Sistema Meal Prep</strong> paso a paso para cocinar en 2 horas el domingo y olvidarte de "qué comemos hoy" el resto de la semana. Ahorrá miles en delivery y ganá paz mental.
            </p>
            
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a 
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-accent-500 hover:bg-accent-600 shadow-lg transform transition hover:-translate-y-1 md:text-xl"
              >
                ¡QUIERO MI SISTEMA AHORA!
                <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
              </a>
              <p className="mt-3 text-xs text-gray-500 uppercase tracking-wider font-semibold">
                *Oferta válida hasta hoy {currentDate}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src={`https://randomuser.me/api/portraits/women/${i+20}.jpg`} alt=""/>
                ))}
              </div>
              <p>Más de 5,000 cocinas organizadas</p>
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
                  <p className="font-bold text-xl">Sistema Cocina Resuelta</p>
                  <p className="text-sm opacity-90">Edición 2024 Actualizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust Bar */}
      <div className="bg-white py-8 border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="flex items-center gap-2"><Users className="w-5 h-5"/> Acceso Inmediato</div>
            <div className="flex items-center gap-2"><Star className="w-5 h-5"/> Garantía 7 Días</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> Pago Seguro</div>
         </div>
      </div>
    </header>
  );
};

export default Hero;
