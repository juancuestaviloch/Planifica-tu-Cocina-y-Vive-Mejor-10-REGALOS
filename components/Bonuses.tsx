import React from 'react';
import { BONUSES } from '../constants';
import { Gift, Plus, Briefcase, Cake, CircleDot, Droplet, Sparkles } from 'lucide-react';

const BonusIllustration: React.FC<{ type: string }> = ({ type }) => {
    const containerClass = "w-full h-full flex items-center justify-center relative overflow-hidden";
    
    if (type === 'lunchbox') {
        return (
            <div className={`${containerClass} bg-orange-50`}>
                <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border-2 border-orange-100">
                    <Briefcase className="w-12 h-12 text-orange-500" />
                </div>
                <div className="absolute top-4 right-4 opacity-20">
                     <div className="w-16 h-16 bg-orange-400 rounded-full blur-xl"></div>
                </div>
            </div>
        );
    }
    if (type === 'sweet') {
        return (
            <div className={`${containerClass} bg-pink-50`}>
                <div className="relative z-10 bg-white p-4 rounded-full shadow-lg border-2 border-pink-100 animate-pulse">
                    <Cake className="w-12 h-12 text-pink-500" />
                </div>
                <Sparkles className="absolute top-1/3 right-1/3 w-6 h-6 text-yellow-400 animate-spin-slow" />
            </div>
        );
    }
    if (type === 'snack') {
        return (
             <div className={`${containerClass} bg-amber-50`}>
                <div className="flex gap-2 relative z-10">
                     <div className="bg-amber-600 rounded-full p-2 shadow-lg animate-bounce delay-0">
                         <CircleDot className="w-6 h-6 text-white" />
                     </div>
                     <div className="bg-amber-500 rounded-full p-2 shadow-lg animate-bounce delay-100 mt-4">
                         <CircleDot className="w-6 h-6 text-white" />
                     </div>
                     <div className="bg-amber-400 rounded-full p-2 shadow-lg animate-bounce delay-200">
                         <CircleDot className="w-6 h-6 text-white" />
                     </div>
                </div>
            </div>
        );
    }
    if (type === 'jar') {
         return (
            <div className={`${containerClass} bg-blue-50`}>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-white p-4 rounded-xl shadow-lg border border-blue-100">
                        <Droplet className="w-12 h-12 text-blue-500 fill-current" />
                    </div>
                </div>
                 <div className="absolute bottom-0 left-0 w-full h-12 bg-blue-100 opacity-50 rounded-t-full transform scale-x-150"></div>
            </div>
        );
    }
    return null;
};

const Bonuses: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-accent-100 rounded-full mb-6 shadow-sm">
            <Gift className="w-10 h-10 text-accent-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Pero espera... ¡Hay mucho más!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No quiero que tengas excusas. Por eso, si accedes hoy, te llevas esta <span className="text-accent-600 font-bold">Biblioteca Completa de Recursos</span> valorada en más de $150.000 ARS, totalmente <span className="underline decoration-accent-400 decoration-4">GRATIS</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BONUSES.map((bonus, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row overflow-hidden group">
              <div className="sm:w-2/5 h-48 sm:h-auto relative overflow-hidden bg-gray-50">
                 {bonus.illustration ? (
                     <BonusIllustration type={bonus.illustration} />
                 ) : (
                     <>
                        <img 
                            src={bonus.image} 
                            alt={bonus.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r"></div>
                     </>
                 )}
              </div>
              <div className="p-6 sm:w-3/5 flex flex-col justify-center">
                <div className="text-accent-600 text-xs font-bold tracking-widest uppercase mb-1">Regalo #{index + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{bonus.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{bonus.description}</p>
                <div className="mt-auto">
                    <span className="inline-block bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded font-medium line-through">{bonus.value}</span>
                    <span className="ml-2 text-green-600 text-sm font-bold">GRATIS HOY</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-2xl font-bold text-gray-400">
                <Plus className="w-8 h-8" />
                <span>Acceso de por vida a futuras actualizaciones</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Bonuses;