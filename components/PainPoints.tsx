import React from 'react';
import { PAIN_POINTS } from '../constants';
import { Clock, AlertTriangle, HelpCircle, Frown } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto mb-16">
           {/* Animated Illustration Container */}
           <div className="relative mb-10 w-full h-64 md:h-80 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 rounded-3xl shadow-inner overflow-hidden flex items-center justify-center border border-red-100 group">
              
              {/* Animated Background Blobs */}
              <div className="absolute top-[-20%] left-[-10%] w-48 h-48 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>

              {/* Central Composition */}
              <div className="relative z-10 flex flex-col items-center transform transition duration-500 hover:scale-105">
                 
                 <div className="relative">
                    {/* Main Clock */}
                    <div className="bg-white p-6 rounded-full shadow-xl relative z-10 border-4 border-red-100">
                        <Clock className="w-20 h-20 text-red-500" />
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-8 animate-bounce" style={{animationDuration: '2s'}}>
                       <div className="bg-white p-2 rounded-full shadow-lg border border-orange-100">
                          <AlertTriangle className="w-8 h-8 text-orange-500" />
                       </div>
                    </div>

                    <div className="absolute -bottom-2 -left-10 animate-bounce" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}>
                       <div className="bg-white p-2 rounded-full shadow-lg border border-red-100">
                          <HelpCircle className="w-8 h-8 text-red-400" />
                       </div>
                    </div>

                     <div className="absolute top-10 -right-16 animate-pulse" style={{animationDuration: '3s'}}>
                       <div className="bg-white p-2 rounded-full shadow-lg border border-gray-100">
                          <Frown className="w-6 h-6 text-gray-400" />
                       </div>
                    </div>
                 </div>

                 <div className="mt-6 text-center bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm border border-red-50">
                    <span className="text-5xl font-black text-red-600 font-mono block tracking-tighter leading-none mb-1">19:00</span>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-[0.2em]">Hora del Caos</span>
                 </div>
              </div>
           </div>
           
           <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                ¿Te suena familiar esta historia?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Son las 7 de la tarde. Llegas a casa después de un día agotador. Tienes hambre, tu familia tiene hambre, y cuando abres la heladera... <span className="font-bold text-red-600">nada.</span>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Solo ves un limón seco, un frasco de mayonesa y unas verduras que ya vieron mejores días. El estrés sube, la paciencia baja y terminas haciendo lo de siempre: pedir delivery o cocinar algo rápido y poco saludable.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((pain, index) => (
            <div key={index} className="bg-red-50 p-8 rounded-2xl border border-red-100 text-center hover:shadow-lg transition duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-100 rounded-full opacity-50 group-hover:scale-150 transition duration-500"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-sm mb-6 text-red-500">
                  <pain.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pain.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pain.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            La verdad es que... NO es tu culpa.
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Nadie nos enseñó a organizar una cocina eficiente. Nos enseñaron recetas sueltas, pero no <strong>SISTEMAS</strong>. Intentar comer sano sin un plan es como intentar construir una casa sin planos: agotador, costoso y frustrante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;