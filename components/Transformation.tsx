
import React from 'react';
import { ArrowRight, Clock, Wallet, Heart } from 'lucide-react';

const Transformation: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">El Efecto "Cocina Resuelta"</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mt-2">
            No solo cambia tu menú, <br/>cambia tu calidad de vida
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Arrow in desktop */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg border border-gray-100">
             <ArrowRight className="w-8 h-8 text-brand-500" />
          </div>

          {/* The OLD Way */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 relative overflow-hidden group hover:border-red-200 transition duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300 group-hover:bg-red-400 transition duration-300"></div>
            
            <div className="flex items-center gap-3 mb-8 opacity-80 group-hover:opacity-100 transition duration-300">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-3xl shadow-inner animate-[bounce_2s_infinite]">
                    🤯
                </div>
                <h3 className="text-xl font-bold text-gray-600">Tu Rutina Actual</h3>
            </div>

            <div className="space-y-8">
                {/* Scenario 1 */}
                <div className="flex gap-4">
                    <div className="mt-1"><Clock className="w-6 h-6 text-red-400" /></div>
                    <div>
                        <h4 className="font-bold text-gray-800">Martes 19:30 hs</h4>
                        <p className="text-sm text-gray-600 mt-1">Abrís la heladera. No hay nada descongelado. El cansancio te gana y terminás hirviendo fideos o pidiendo empanadas (otra vez).</p>
                    </div>
                </div>

                {/* Scenario 2 */}
                <div className="flex gap-4">
                    <div className="mt-1"><Wallet className="w-6 h-6 text-red-400" /></div>
                    <div>
                        <h4 className="font-bold text-gray-800">Fin de Mes</h4>
                        <p className="text-sm text-gray-600 mt-1">La tarjeta explota por gastos hormiga en delivery y almacén. Tirás a la basura verduras que compraste "para comer sano" y se pudrieron.</p>
                    </div>
                </div>

                {/* Scenario 3 */}
                <div className="flex gap-4">
                    <div className="mt-1"><Heart className="w-6 h-6 text-red-400" /></div>
                    <div>
                        <h4 className="font-bold text-gray-800">Tu Salud</h4>
                        <p className="text-sm text-gray-600 mt-1">Te sentís hinchada, con poca energía y culpable por no poder sostener una alimentación ordenada.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* The NEW Way */}
          <div className="bg-brand-50 rounded-3xl p-8 border-2 border-brand-200 relative overflow-hidden shadow-xl transform md:-translate-y-4">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-500"></div>
             <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-200 rounded-full blur-3xl opacity-50"></div>
            
            <div className="flex items-center gap-3 mb-8">
                <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=100" alt="Orden" className="w-12 h-12 rounded-full object-cover border-2 border-brand-400" />
                <h3 className="text-xl font-bold text-brand-800">Tu Nueva Vida</h3>
            </div>

            <div className="space-y-8">
                {/* Scenario 1 */}
                <div className="flex gap-4">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm mt-1"><Clock className="w-6 h-6 text-brand-600" /></div>
                    <div>
                        <h4 className="font-bold text-brand-900">Martes 19:30 hs</h4>
                        <p className="text-sm text-brand-800 mt-1">Llegás, sacás un tupper gourmet de la heladera, lo calentás 5 minutos y cenás tranquila. Tenés tiempo libre para ver tu serie o jugar con tus hijos.</p>
                    </div>
                </div>

                {/* Scenario 2 */}
                <div className="flex gap-4">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm mt-1"><Wallet className="w-6 h-6 text-brand-600" /></div>
                    <div>
                        <h4 className="font-bold text-brand-900">Fin de Mes</h4>
                        <p className="text-sm text-brand-800 mt-1">Ahorraste un 30-40% en el súper. Tu heladera está organizada y usás cada ingrediente que comprás. Cero desperdicio.</p>
                    </div>
                </div>

                {/* Scenario 3 */}
                <div className="flex gap-4">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm mt-1"><Heart className="w-6 h-6 text-brand-600" /></div>
                    <div>
                        <h4 className="font-bold text-brand-900">Tu Salud</h4>
                        <p className="text-sm text-brand-800 mt-1">Comés variado y casero sin esfuerzo. Tu cuerpo se desinflama y recuperás la energía natural.</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Transformation;
