import React from 'react';
import { Check, X } from 'lucide-react';

const AudienceFilter: React.FC = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900">
            ¿Es "Cocina Resuelta" para vos?
          </h2>
          <p className="text-gray-600 mt-2">Quiero ser honesta. Este sistema no es para todo el mundo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* YES Column */}
          <div className="bg-brand-50 p-8 rounded-3xl border-2 border-brand-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-800 mb-6 flex items-center gap-2">
              <span className="bg-brand-200 p-1 rounded text-brand-700"><Check className="w-5 h-5" /></span>
              SI es para vos si...
            </h3>
            <ul className="space-y-4">
              {[
                "Querés ahorrar dinero en el supermercado y dejar de tirar comida.",
                "Tenés poco tiempo y necesitás una solución práctica, no recetas de chef.",
                "Buscás comer más saludable pero te da fiaca cocinar todos los días.",
                "Te gusta tener el control de tu semana y reducir el estrés mental."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div className="bg-gray-50 p-8 rounded-3xl border-2 border-gray-100">
             <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
              <span className="bg-gray-200 p-1 rounded text-gray-400"><X className="w-5 h-5" /></span>
              NO es para vos si...
            </h3>
            <ul className="space-y-4">
              {[
                "Buscas una fórmula mágica para bajar de peso sin cambiar hábitos.",
                "Disfrutás cocinar 3 veces al día y lavar los platos cada vez.",
                "Preferís seguir gastando fortuna en delivery cada noche.",
                "No estás dispuesta a invertir 2 horas de tu fin de semana para ganar libertad."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-500">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceFilter;