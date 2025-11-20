
import React from 'react';
import { Check, X, AlertCircle, Clock, Wallet, BrainCircuit, ChevronRight } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-gray-900">¿Por qué elegir este sistema?</h2>
            <p className="text-gray-600 mt-2">La diferencia entre sobrevivir y vivir bien.</p>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex items-center justify-end gap-1 text-xs text-gray-400 mb-2 animate-pulse">
            <span>Desliza para ver</span>
            <ChevronRight className="w-4 h-4" />
        </div>

        <div className="relative rounded-2xl shadow-xl border border-gray-200 bg-white overflow-hidden">
            {/* Horizontal Scroll Container */}
            <div className="overflow-x-auto custom-scrollbar">
              <div className="min-w-[750px]">
                
                {/* Header */}
                <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
                  <div className="p-4 md:p-6 flex items-center justify-center">
                     <span className="font-bold text-gray-400 uppercase text-[10px] tracking-widest">Comparativa</span>
                  </div>
                  <div className="p-4 md:p-6 text-center border-l border-gray-200">
                    <h4 className="font-bold text-gray-600 text-sm md:text-base">Cocinar día a día</h4>
                  </div>
                  <div className="p-4 md:p-6 text-center border-l border-gray-200 bg-red-50/30">
                    <h4 className="font-bold text-red-600 text-sm md:text-base">Delivery / Viandas</h4>
                  </div>
                  <div className="p-4 md:p-6 text-center border-l border-gray-200 bg-brand-50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
                    <h4 className="font-black text-brand-700 text-sm md:text-lg leading-tight">Cocina Resuelta</h4>
                    <div className="inline-block bg-brand-200 text-brand-800 text-[9px] font-bold px-2 py-0.5 rounded-full mt-1">RECOMENDADO</div>
                  </div>
                </div>

                {/* Rows */}
                {[
                    {
                        icon: <Clock className="w-5 h-5" />,
                        label: "Tiempo",
                        daily: "12hs / semana",
                        delivery: "0hs",
                        system: "2hs / semana",
                        highlight: true
                    },
                    {
                        icon: <Wallet className="w-5 h-5" />,
                        label: "Costo Mensual",
                        daily: "Alto (desperdicio)",
                        delivery: "Muy Alto ($200k+)",
                        system: "Bajo (Ahorro total)",
                        highlight: true
                    },
                    {
                        icon: <BrainCircuit className="w-5 h-5" />,
                        label: "Estrés Mental",
                        daily: "Agotador",
                        delivery: "Medio",
                        system: "Cero (Paz mental)",
                        highlight: true
                    },
                    {
                        icon: <AlertCircle className="w-5 h-5" />,
                        label: "Nutrición",
                        daily: "Irregular",
                        delivery: "Mala (Grasas/Sodio)",
                        system: "100% Saludable",
                        highlight: true
                    }
                ].map((row, idx) => (
                   <div key={idx} className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition group">
                      <div className="p-4 pl-4 md:pl-6 flex items-center gap-2 md:gap-3 text-gray-600 font-medium text-xs md:text-sm">
                          <span className="text-gray-400 group-hover:text-brand-500 transition">{row.icon}</span>
                          {row.label}
                      </div>
                      <div className="p-4 flex items-center justify-center text-center text-xs md:text-sm text-gray-500 border-l border-gray-100">
                          {row.daily}
                      </div>
                      <div className="p-4 flex items-center justify-center text-center text-xs md:text-sm text-red-500 font-medium border-l border-gray-100 bg-red-50/10">
                          {row.delivery}
                      </div>
                      <div className="p-4 flex items-center justify-center text-center text-xs md:text-sm text-brand-700 font-bold border-l border-brand-100 bg-brand-50 relative">
                          {row.highlight && <Check className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-brand-500 inline" />}
                          {row.system}
                      </div>
                   </div>
                ))}
                
                {/* Footer Row */}
                 <div className="grid grid-cols-4 bg-gray-50">
                    <div className="p-4"></div>
                    <div className="p-4 flex justify-center items-center"><X className="text-gray-300 w-5 h-5"/></div>
                    <div className="p-4 flex justify-center items-center"><X className="text-red-300 w-5 h-5"/></div>
                    <div className="p-4 md:p-6 border-l border-brand-200 bg-brand-100 flex justify-center items-center">
                        <span className="text-brand-800 font-black text-xs uppercase tracking-widest">Ganador</span>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Fade Effect for Scroll */}
            <div className="absolute top-0 bottom-0 right-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden"></div>
        </div>
        
        <style>{`
            .custom-scrollbar::-webkit-scrollbar {
                height: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #f1f1f1;
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #d1d5db; 
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #9ca3af; 
            }
        `}</style>
      </div>
    </section>
  );
};

export default ComparisonTable;
