
import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-[#fffdf5] border-2 border-[#eab308]/30 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden group hover:border-[#eab308]/60 transition duration-500">
            
            {/* Corner Ribbon */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 transform rotate-45 z-10 shadow-md"></div>
            <div className="absolute top-4 right-4 z-20 text-white font-bold text-xl">
                <ShieldCheck className="w-8 h-8" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10">
                
                {/* Seal Image */}
                <div className="flex-shrink-0 relative">
                    <div className="absolute inset-0 bg-yellow-200 rounded-full blur-xl opacity-40 animate-pulse"></div>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/4300/4300056.png" 
                        alt="Garantía de 7 días" 
                        className="w-40 h-40 object-contain drop-shadow-2xl relative z-10 transform group-hover:scale-105 transition duration-500"
                    />
                </div>
                
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-serif font-black text-gray-900 mb-2 uppercase tracking-wide">
                        Certificado de Garantía
                    </h3>
                    <h4 className="text-lg font-bold text-[#b45309] mb-4">
                        Protección de Hierro por 7 Días
                    </h4>
                    
                    <div className="w-full h-px bg-yellow-200 mb-6"></div>

                    <p className="text-gray-700 leading-relaxed mb-4 font-medium">
                        No queremos tu dinero si este sistema no transforma tu vida.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Tenés 7 días completos para entrar, descargar los materiales, probar las recetas y aplicar el método. Si no sentís que recuperaste <strong>10 veces tu inversión</strong> en tiempo y dinero, te devolvemos el 100% de lo que pagaste.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded border border-gray-100 shadow-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Sin preguntas incómodas</span>
                        </div>
                         <div className="flex items-center gap-2 text-xs font-bold text-gray-500 bg-white px-3 py-1.5 rounded border border-gray-100 shadow-sm">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Reembolso en 24hs</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signature Area (Visual Authority) */}
            <div className="absolute bottom-4 right-8 hidden md:block opacity-10 font-serif italic text-4xl transform -rotate-6 pointer-events-none">
                Ramón
            </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
