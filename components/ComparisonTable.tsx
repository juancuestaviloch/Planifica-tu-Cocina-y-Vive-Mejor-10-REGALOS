
import React from 'react';
import { Check, X, AlertCircle, Clock, Wallet, BrainCircuit } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900">¿Por qué elegir este sistema?</h2>
            <p className="text-gray-600 mt-2">Compará tus opciones y elegí inteligentemente.</p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[700px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
              <div className="p-6 flex items-center justify-center">
                 <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">Características</span>
              </div>
              <div className="p-6 text-center border-l border-gray-200">
                <h4 className="font-bold text-gray-600">Cocinar día a día</h4>
                <p className="text-xs text-gray-400 mt-1">El método tradicional</p>
              </div>
              <div className="p-6 text-center border-l border-gray-200 bg-red-50/30">
                <h4 className="font-bold text-red-600">Delivery / Viandas</h4>
                <p className="text-xs text-red-400 mt-1">La salida fácil</p>
              </div>
              <div className="p-6 text-center border-l border-gray-200 bg-brand-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
                <h4 className="font-black text-brand-700 text-lg">Cocina Resuelta</h4>
                <p className="text-xs text-brand-600 mt-1 font-bold">El método inteligente</p>
              </div>
            </div>

            {/* Rows */}
            {[
                {
                    icon: <Clock className="w-5 h-5" />,
                    label: "Tiempo en cocina",
                    daily: "10-14 horas/semana",
                    delivery: "0 horas (pero esperás 40 min)",
                    system: "2-3 horas/semana",
                    highlight: true
                },
                {
                    icon: <Wallet className="w-5 h-5" />,
                    label: "Costo Mensual",
                    daily: "Alto (por desperdicio)",
                    delivery: "Carísimo ($200k+)",
                    system: "Bajo (Ahorro inteligente)",
                    highlight: true
                },
                {
                    icon: <BrainCircuit className="w-5 h-5" />,
                    label: "Carga Mental",
                    daily: "Agotador (decidir a diario)",
                    delivery: "Media (elegir qué pedir)",
                    system: "Nula (todo resuelto)",
                    highlight: true
                },
                {
                    icon: <AlertCircle className="w-5 h-5" />,
                    label: "Salud y Nutrición",
                    daily: "Variable",
                    delivery: "Mala (exceso sodio/grasas)",
                    system: "Excelente (100% natural)",
                    highlight: true
                }
            ].map((row, idx) => (
               <div key={idx} className="grid grid-cols-4 border-b border-gray-100 hover:bg-gray-50 transition">
                  <div className="p-4 pl-6 flex items-center gap-3 text-gray-600 font-medium text-sm">
                      <span className="text-gray-400">{row.icon}</span>
                      {row.label}
                  </div>
                  <div className="p-4 flex items-center justify-center text-center text-sm text-gray-500 border-l border-gray-100">
                      {row.daily}
                  </div>
                  <div className="p-4 flex items-center justify-center text-center text-sm text-red-500 font-medium border-l border-gray-100 bg-red-50/10">
                      {row.delivery}
                  </div>
                  <div className="p-4 flex items-center justify-center text-center text-sm text-brand-700 font-bold border-l border-brand-100 bg-brand-50 relative">
                      {row.highlight && <Check className="w-4 h-4 mr-2 text-brand-500 inline" />}
                      {row.system}
                  </div>
               </div>
            ))}
            
            {/* Footer Row */}
             <div className="grid grid-cols-4 bg-gray-50">
                <div className="p-4"></div>
                <div className="p-4 flex justify-center items-center"><X className="text-gray-300 w-6 h-6"/></div>
                <div className="p-4 flex justify-center items-center"><X className="text-red-300 w-6 h-6"/></div>
                <div className="p-6 border-l border-brand-200 bg-brand-100 flex justify-center items-center">
                    <span className="text-brand-800 font-black text-sm uppercase tracking-widest">Ganador</span>
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
