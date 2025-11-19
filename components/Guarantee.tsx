import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-50 to-white border-2 border-brand-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 text-center md:text-left shadow-lg relative overflow-hidden">
            
            <div className="flex-shrink-0 relative z-10">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/4300/4300056.png" 
                    alt="Garantía de 7 días" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-xl"
                />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Garantía de Hierro de 7 Días</h3>
                <div className="w-16 h-1 bg-accent-500 mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Estoy tan segura de que este sistema cambiará tu vida y tu cocina para siempre que asumo todo el riesgo. 
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Compra el pack, revisa todo el material, prueba las recetas. Si no sientes que vale <strong>10 veces lo que pagaste</strong>, envíame un correo y te devuelvo el 100% de tu dinero. Sin preguntas incómodas.
                </p>
            </div>

            {/* Decorative background blob */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;