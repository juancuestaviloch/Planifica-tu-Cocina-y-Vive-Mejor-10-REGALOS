import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-20 bg-brand-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthy Meal Prep" 
                className="relative rounded-2xl shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition duration-500"
            />
        </div>

        <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
                Imagina abrir tu heladera y encontrar esto...
            </h2>
            <p className="text-lg text-gray-700">
                Tuppers llenos de comida deliciosa, colorida y nutritiva, lista para calentar y servir. Sin picar cebolla un martes a la noche. Sin limpiar ollas un jueves.
            </p>
            <p className="text-lg text-gray-700">
                Presentamos el <strong>Método Cocina Resuelta</strong>. No es una dieta. Es un sistema de organización inteligente (también conocido como Cocina en Bloque) diseñado para personas ocupadas que quieren comer bien.
            </p>

            <ul className="space-y-4 mt-6">
                {[
                    "Cocinas solo 2 horas, una vez a la semana.",
                    "Comes comida real, casera y sin conservantes.",
                    "Recuperas +10 horas de tiempo libre semanal.",
                    "Ahorras dinero comprando solo lo que necesitas."
                ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

      </div>
    </section>
  );
};

export default Solution;