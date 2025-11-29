
import React from 'react';
import { MAIN_PRODUCT, BONUSES, CHECKOUT_URL } from '../constants';
import { Check, ArrowRight, Lock, Book, Smartphone, Tablet, CreditCard, Banknote, ShieldCheck, Plus, Gift } from 'lucide-react';

const Offer: React.FC = () => {
  // Calcular valor total real (Suma de bonos + precio original)
  const calculateTotalValue = () => {
    let total = MAIN_PRODUCT.originalPrice;
    BONUSES.forEach(bonus => {
        // Extraer números del string de valor (ej: "$18.000" -> 18000)
        const valueString = bonus.value.replace(/[^0-9]/g, '');
        const value = parseInt(valueString, 10);
        if (!isNaN(value)) {
            total += value;
        }
    });
    return total;
  };

  const totalValue = calculateTotalValue();

  return (
    <section id="offer" className="py-16 md:py-24 bg-brand-900 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Offer Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-accent-500 ring-4 ring-accent-500/20">
          
          {/* Header Strip */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 text-center relative overflow-hidden animate-pulse">
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider drop-shadow-md flex items-center justify-center gap-2">
              <Gift className="w-6 h-6" /> ¡OFERTA FINAL - SE TERMINA EL TIEMPO!
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2">
            
            {/* Left Column: The "Receipt" (Value Stack) */}
            <div className="p-6 md:p-8 bg-gray-50 border-r border-gray-200">
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-6 text-center">
                    ¿Qué incluye tu acceso?
                </h3>

                <div className="space-y-4 text-sm">
                    {/* Main Product */}
                    <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                        <div className="flex items-start gap-3">
                            <Book className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-gray-900 block">Sistema "Cocina Resuelta" (eBook)</span>
                                <span className="text-xs text-gray-500">El método completo paso a paso</span>
                            </div>
                        </div>
                        <span className="font-bold text-gray-400 decoration-gray-400 line-through">
                            ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}
                        </span>
                    </div>

                    {/* Bonuses Summary */}
                    {BONUSES.map((bonus, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2 border-dashed last:border-0">
                            <div className="flex items-start gap-3">
                                <Plus className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{bonus.title.split(':')[0]}</span>
                            </div>
                            <span className="font-medium text-gray-400 decoration-gray-400 line-through text-xs">
                                {bonus.value.replace('Valor Real: ', '')}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Total Value Calculation */}
                <div className="mt-6 bg-gray-200 p-4 rounded-xl flex justify-between items-center">
                    <span className="font-black text-gray-700 uppercase tracking-widest">Valor Total Real</span>
                    <span className="font-black text-xl text-gray-500 decoration-gray-500 line-through">
                        ${totalValue.toLocaleString('es-AR')}
                    </span>
                </div>
            </div>

            {/* Right Column: Pricing & CTA */}
            <div className="p-6 md:p-8 flex flex-col justify-center bg-white relative">
                
                <div className="absolute top-4 right-4 animate-bounce">
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded border border-red-200">
                        AHORRAS ${(totalValue - MAIN_PRODUCT.price).toLocaleString('es-AR')}
                    </span>
                </div>

                <div className="text-center mb-8 mt-4">
                    <p className="text-gray-500 font-medium mb-2 uppercase tracking-wide text-xs">Precio de Oferta Hoy</p>
                    <div className="flex justify-center items-start gap-1">
                        <span className="text-4xl text-gray-400 font-light mt-2">$</span>
                        <span className="text-7xl font-black text-brand-600 tracking-tighter leading-none">
                            {MAIN_PRODUCT.price.toLocaleString('es-AR', { useGrouping: true }).replace('$','')}
                        </span>
                    </div>
                    <p className="text-sm text-green-600 font-bold bg-green-50 inline-block px-3 py-1 rounded-full mt-2 border border-green-100">
                        Pago Único - Acceso de por vida
                    </p>
                </div>

                {/* CTA Button */}
                <a 
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-xl py-5 px-6 rounded-xl shadow-xl shadow-accent-500/40 transform transition hover:-translate-y-1 flex items-center justify-center gap-2 group mb-4 relative overflow-hidden"
                >
                    <span className="relative z-10">¡LO QUIERO TODO YA!</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition" />
                    {/* Shine effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                </a>

                {/* Payment Methods */}
                <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
                        <CreditCard className="w-4 h-4 text-blue-600" />
                        <span>3 Cuotas <strong>Sin Interés</strong></span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 p-2 rounded-lg">
                        <Banknote className="w-4 h-4 text-green-600" />
                        <span>-10% extra con Transferencia</span>
                    </div>
                </div>

                <div className="mt-6 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-6"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/MercadoPago_Logo.png" alt="MercadoPago" className="h-6"/>
                </div>

                <div className="mt-6 text-center">
                    <div className="flex items-center justify-center gap-1 text-[10px] text-gray-400">
                        <Lock className="w-3 h-3" />
                        <span>Pago procesado con seguridad SSL de 256-bits</span>
                    </div>
                </div>

            </div>

          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 200%; }
        }
      `}</style>
    </section>
  );
};

export default Offer;
