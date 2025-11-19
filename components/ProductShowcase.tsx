import React from 'react';
import { MODULES } from '../constants';
import { Calendar, Clock, CheckSquare, Snowflake, Box, Thermometer, ChefHat, Utensils } from 'lucide-react';

const ModuleIllustration: React.FC<{ type: string }> = ({ type }) => {
  if (type === 'strategy') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-brand-50 to-white flex items-center justify-center p-8 relative overflow-hidden rounded-xl shadow-inner border border-brand-100">
         {/* Calendar BG */}
         <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-7 gap-2 p-4">
                {[...Array(28)].map((_, i) => (
                    <div key={i} className="h-8 bg-brand-500 rounded-sm"></div>
                ))}
            </div>
         </div>
         
         <div className="relative z-10 flex flex-col items-center">
            <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-brand-100 mb-4 relative">
                <Calendar className="w-16 h-16 text-brand-600" />
                <div className="absolute -top-3 -right-3 bg-accent-500 text-white rounded-full p-2 shadow-lg animate-bounce">
                    <Clock className="w-6 h-6" />
                </div>
            </div>
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm flex items-center gap-2 text-brand-800 font-bold text-sm border border-brand-50">
                <CheckSquare className="w-4 h-4 text-brand-500" />
                <span>Plan Semanal Listo</span>
            </div>
         </div>
      </div>
    );
  }
  
  if (type === 'freezer') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8 relative overflow-hidden rounded-xl shadow-inner border border-blue-100">
         {/* Frost Effect */}
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_transparent_20%,_#e0f2fe_100%)] opacity-50"></div>
         
         <div className="relative z-10">
             <div className="relative">
                 <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-blue-100 z-20 relative">
                     <Box className="w-16 h-16 text-blue-500" />
                     <Snowflake className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-blue-200 animate-spin-slow opacity-50" />
                 </div>
                 
                 {/* Floating Snowflakes */}
                 <Snowflake className="absolute -top-8 -left-6 w-8 h-8 text-blue-300 animate-pulse" />
                 <Snowflake className="absolute -bottom-4 -right-8 w-6 h-6 text-blue-300 animate-pulse delay-700" />
                 
                 <div className="absolute -right-10 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg shadow-lg transform rotate-12">
                    <Thermometer className="w-5 h-5" />
                 </div>
             </div>
         </div>
      </div>
    );
  }
  return null;
};

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent-600 font-bold tracking-wider uppercase text-sm">¿Qué incluye el programa principal?</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            Un recorrido completo hacia tu libertad en la cocina
          </h2>
        </div>

        <div className="space-y-12">
          {MODULES.map((module, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12`}>
              <div className="md:w-1/2 w-full">
                {module.illustration ? (
                   <div className="h-64 md:h-80 w-full hover:scale-[1.02] transition duration-300">
                      <ModuleIllustration type={module.illustration} />
                   </div>
                ) : (
                    <img 
                      src={module.image} 
                      alt={module.title} 
                      className="rounded-xl shadow-lg w-full object-cover h-64 md:h-80 hover:scale-[1.02] transition duration-300"
                    />
                )}
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="inline-block bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-bold">
                    Parte {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{module.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{module.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;