import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            ¿Te sentís identificada con esto?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La mayoría de las personas fallan en su alimentación no por falta de voluntad, sino por falta de organización.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100 shadow-sm">
            <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <XCircle /> La realidad actual
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                Llegas cansada del trabajo y terminas pidiendo delivery caro y poco saludable.
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                Tiras verduras podridas a la basura porque no supiste cuándo usarlas.
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                Comes siempre lo mismo: fideos, arroz o milanesas por falta de ideas.
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                Sientes culpa por no cuidar tu cuerpo como quisieras.
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-lg transform scale-105 relative z-10">
             <div className="absolute -top-5 right-10 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow">
                La Solución
             </div>
            <h3 className="text-2xl font-bold text-brand-700 mb-6 flex items-center gap-2">
              <CheckCircle2 /> Vida con "Cocina Resuelta"
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                Abres la heladera y tienes tuppers con comida deliciosa lista en 5 minutos.
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                Cocinas solo una vez a la semana (Batch Cooking) y descansas el resto de los días.
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                Ahorras hasta un 40% en tu compra de supermercado al no desperdiciar nada.
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                Te sientes con energía, desinflamada y en control de tu salud.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;