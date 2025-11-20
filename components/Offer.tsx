
import React from 'react';
import { MAIN_PRODUCT, BONUSES, CHECKOUT_URL } from '../constants';
import { Check, ArrowRight, Lock, Book, Smartphone, Tablet, CreditCard, Mail, Banknote, ShieldCheck } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-16 md:py-24 bg-brand-900 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-accent-500 ring-4 ring-accent-500/20">
          
          {/* Header Strip */}
          <div className="bg-gradient-to-r from-accent-500 to-accent-600 p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider drop-shadow-md relative z-10">
              Oferta Limitada de Lanzamiento
            </h2>
            <p className="text-accent-50 mt-2 font-medium text-sm md:text-lg relative z-10 opacity-90">
                Pack "Cocina Resuelta" + 10 Regalos Exclusivos
            </p>
          </div>
          
          <div className="p-4 md:p-8 lg:p-10 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Product Illustration */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
                <div className="relative w-full max-w-[280px] lg:max-w-full aspect-[4/5] mb-6 mx-auto lg:mx-0">
                    {/* Stack Effect */}
                    <div className="absolute inset-0 bg-gray-200 rounded-2xl transform translate-x-2 translate-y-2 rotate-3"></div>
                    <div className="absolute inset-0 bg-gray-800 rounded-2xl transform translate-x-1 translate-y-1 rotate-1"></div>
                    
                    {/* Cover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl shadow-2xl border-l-4 border-brand-500/30 flex flex-col items-center justify-center p-6 z-10">
                        <div className="border-2 border-white/30 w-full h-full rounded-lg flex flex-col items-center justify-center text-center p-2">
                             <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
                                 <Book className="w-12 h-12 text-white" />
                             </div>
                             <h3 className="text-white font-serif font-bold text-2xl mb-2 leading-none">Cocina<br/>Resuelta</h3>
                             <div className="w-10 h-1 bg-accent-400 mb-3 rounded-full"></div>
                             <p className="text-brand-100 text-[10px] uppercase tracking-[0.2em]">Sistema Completo</p>
                        </div>
                    </div>

                     <div className="absolute -top-4 -right-4 bg-yellow-400 text-brand-900 font-black text-lg px-4 py-2 rounded-lg shadow-xl transform rotate-6 z-30 border-2 border-white">
                        {MAIN_PRODUCT.discount}
                    </div>
                </div>

                <div className="w-full text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start gap-3 mb-2">
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-600 flex items-center gap-1"><Smartphone className="w-3 h-3"/> Móvil</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-600 flex items-center gap-1"><Tablet className="w-3 h-3"/> Tablet</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold text-gray-600 flex items-center gap-1"><Book className="w-3 h-3"/> PC</span>
                    </div>
                    <p className="text-xs text-gray-400 italic">Formato PDF Interactivo - Alta Calidad</p>
                </div>
            </div>

            {/* Middle Column: The List */}
            <div className="lg:col-span-4 space-y-5">
              <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-1 bg-accent-500 rounded-full"></div>
                  <h3 className="text-xl font-bold text-gray-800">¿Qué vas a recibir?</h3>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-brand-50 p-3 rounded-lg border border-brand-100 shadow-sm">
                  <Check className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-bold text-base block leading-tight">Ebook Principal: Cocina Resuelta</span>
                    <span className="text-xs text-brand-600 font-semibold">Valorado en $38.000</span>
                  </div>
                </li>
                
                <div className="pl-2 space-y-2.5">
                    {BONUSES.slice(0, 5).map((bonus, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 leading-snug">
                                <strong className="text-gray-800">{bonus.title.split(':')[0]}:</strong> {bonus.title.split(':')[1]}
                            </span>
                        </li>
                    ))}
                    <li className="flex items-center gap-2 text-sm text-gray-500 italic pl-6">
                        <span>... y 5 bonos más exclusivos.</span>
                    </li>
                </div>
              </ul>
            </div>

            {/* Right Column: Pricing Card (Visual Upgrade) */}
            <div className="lg:col-span-4">
                <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-inner p-6 flex flex-col h-full relative overflow-hidden">
                    {/* Badge */}
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                        Mejor Precio Garantizado
                    </div>

                    <div className="text-center mb-6">
                        <p className="text-gray-400 text-sm font-medium line-through mb-1">Precio Regular: ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}</p>
                        
                        <div className="flex justify-center items-start gap-1 my-2">
                            <span className="text-3xl text-gray-400 font-light">$</span>
                            <span className="text-6xl font-black text-brand-600 tracking-tighter leading-none">
                                {MAIN_PRODUCT.price.toLocaleString('es-AR', { useGrouping: true }).replace('$','')}
                            </span>
                        </div>
                        <p className="text-sm text-gray-500 font-bold">Pesos Argentinos (Pago Único)</p>
                    </div>

                    {/* Payment Options */}
                    <div className="space-y-2 mb-6">
                         <div className="bg-white border border-blue-200 rounded-lg p-2 flex items-center justify-between shadow-sm">
                             <div className="flex items-center gap-2">
                                 <div className="bg-blue-100 p-1.5 rounded-md">
                                     <CreditCard className="w-4 h-4 text-blue-600" />
                                 </div>
                                 <span className="text-xs font-bold text-gray-700">3 Cuotas Sin Interés</span>
                             </div>
                             <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">VISA/Master</span>
                         </div>

                         <div className="bg-white border border-green-200 rounded-lg p-2 flex items-center justify-between shadow-sm">
                             <div className="flex items-center gap-2">
                                 <div className="bg-green-100 p-1.5 rounded-md">
                                     <Banknote className="w-4 h-4 text-green-600" />
                                 </div>
                                 <span className="text-xs font-bold text-gray-700">Transferencia</span>
                             </div>
                             <span className="text-xs font-bold text-white bg-green-500 px-2 py-0.5 rounded-full">-10% OFF</span>
                         </div>
                    </div>

                    {/* CTA */}
                    <a 
                        href={CHECKOUT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg py-4 px-4 rounded-xl shadow-xl shadow-accent-500/30 transform transition hover:-translate-y-1 flex items-center justify-center gap-2 group mb-3 animate-pulse"
                    >
                        DESCARGAR AHORA <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </a>

                    <div className="text-center">
                         <p className="text-[10px] text-gray-400 mb-2">Pagos procesados de forma segura por Sandie Tienda</p>
                         <div className="flex justify-center gap-2 opacity-60 grayscale hover:grayscale-0 transition">
                             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" className="h-5"/>
                             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5"/>
                             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/MercadoPago_Logo.png" alt="MercadoPago" className="h-5"/>
                         </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-center gap-2 text-xs text-gray-500">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                        <span>Garantía de devolución de 7 días</span>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
