
import React from 'react';
import { MAIN_PRODUCT, BONUSES, CHECKOUT_URL } from '../constants';
import { Check, ArrowRight, Lock, Book, Smartphone, Tablet, CreditCard, Mail, Wallet, Banknote } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section id="offer" className="py-20 bg-brand-900 relative overflow-hidden">
       <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-accent-500">
          
          <div className="bg-accent-500 p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
              OFERTA ESPECIAL POR TIEMPO LIMITADO
            </h2>
            <p className="text-accent-100 mt-2 font-medium text-lg">Accede al sistema completo y transforma tu vida hoy</p>
          </div>
          
          <div className="p-6 md:p-10 grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Product Illustration (Mockup) */}
            <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative w-full max-w-[300px] aspect-[4/5] mb-8 mx-auto">
                    {/* Book Representation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-brand-800 rounded-r-2xl rounded-l-sm shadow-2xl border-l-8 border-brand-900 flex flex-col items-center justify-center p-6 transform -rotate-3 hover:rotate-0 transition duration-500 z-10">
                        <div className="border-2 border-white/30 w-full h-full rounded-lg flex flex-col items-center justify-center text-center p-2">
                             <div className="bg-white/20 p-3 rounded-full mb-4">
                                 <Book className="w-10 h-10 text-white" />
                             </div>
                             <h3 className="text-white font-serif font-bold text-xl mb-2">Cocina Resuelta</h3>
                             <div className="w-8 h-1 bg-accent-400 mb-2"></div>
                             <p className="text-brand-100 text-xs uppercase tracking-widest">Sistema Completo</p>
                        </div>
                    </div>
                    
                    {/* Tablet Representation */}
                    <div className="absolute -right-8 top-10 w-24 h-32 bg-gray-800 rounded-xl border-4 border-gray-300 shadow-xl transform rotate-12 flex items-center justify-center z-20">
                         <Tablet className="w-8 h-8 text-gray-500" />
                    </div>

                    {/* Phone Representation */}
                    <div className="absolute -left-4 bottom-4 w-16 h-28 bg-black rounded-xl border-4 border-gray-700 shadow-xl transform -rotate-12 flex items-center justify-center z-20">
                         <Smartphone className="w-6 h-6 text-gray-500" />
                    </div>

                     <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-brand-900 font-black text-xl px-6 py-3 rounded-full shadow-lg transform rotate-[-5deg] z-30">
                        {MAIN_PRODUCT.discount}
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500 mb-2">Acceso Digital Inmediato</p>
                    <div className="flex justify-center gap-2">
                        <div className="bg-gray-100 p-1 rounded"><Book className="w-6 h-6 text-gray-400"/></div>
                        <div className="bg-gray-100 p-1 rounded"><Smartphone className="w-6 h-6 text-gray-400"/></div>
                        <div className="bg-gray-100 p-1 rounded"><Tablet className="w-6 h-6 text-gray-400"/></div>
                    </div>
                </div>
            </div>

            {/* Middle Column: The Stack */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Todo lo que incluye tu acceso:</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-brand-50 p-3 rounded-lg border border-brand-100">
                  <Check className="w-6 h-6 text-brand-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-gray-900 font-bold text-lg block leading-tight">Ebook Principal: Cociná una vez, comé sano</span>
                    <span className="text-xs text-gray-500 uppercase font-semibold">El sistema completo paso a paso</span>
                  </div>
                </li>
                {BONUSES.map((bonus, idx) => (
                    <li key={idx} className="flex items-start gap-3 pl-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-snug">
                            <span className="font-bold text-gray-900 mr-1">{bonus.title.split(':')[0]}:</span>
                            {bonus.title.split(':')[1]}
                        </span>
                    </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Pricing & CTA */}
            <div className="lg:col-span-3 flex flex-col justify-center bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-inner h-full">
                  <div className="text-center mb-6">
                      <p className="text-gray-500 text-sm font-medium uppercase tracking-wide line-through mb-1">Precio Normal: ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')} ARS</p>
                      <div className="flex justify-center items-baseline gap-1">
                        <span className="text-6xl font-extrabold text-brand-600">${MAIN_PRODUCT.price.toLocaleString('es-AR')}</span>
                        <span className="text-xl text-gray-500 font-bold">ARS</span>
                      </div>
                      
                      <div className="mt-4 mb-2 flex flex-col gap-2 items-center w-full">
                          <div className="flex items-center justify-center gap-2 bg-blue-50 text-blue-800 px-3 py-2 rounded-md font-bold text-sm border border-blue-100 w-full shadow-sm">
                              <CreditCard className="w-4 h-4 text-blue-600" />
                              3 Cuotas Sin Interés
                          </div>
                          <div className="flex items-center justify-center gap-2 bg-green-50 text-green-800 px-3 py-2 rounded-md border border-green-100 w-full shadow-sm">
                             <Banknote className="w-4 h-4 text-green-600" />
                             <span className="font-bold text-sm">10% OFF con Transferencia</span>
                          </div>
                      </div>

                      <div className="text-center mb-2 text-[10px] text-gray-500">
                         <p className="mb-1 font-medium">Aceptamos todos los medios de pago:</p>
                         <div className="flex flex-wrap justify-center gap-1 font-semibold text-gray-600">
                             <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">Tarjeta Crédito</span>
                             <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">Débito</span>
                             <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">Mercado Pago</span>
                             <span className="bg-white border border-gray-200 px-2 py-1 rounded shadow-sm">Transferencia</span>
                         </div>
                      </div>

                      <p className="text-green-600 text-sm font-bold mt-2">¡Ahorras ${(MAIN_PRODUCT.originalPrice - MAIN_PRODUCT.price).toLocaleString('es-AR')} ARS!</p>
                  </div>
                  
                  <a 
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-lg py-4 px-4 rounded-xl shadow-xl transform transition hover:-translate-y-1 flex flex-col items-center justify-center gap-1 mb-4 animate-pulse group"
                  >
                    <span className="flex items-center gap-2">QUIERO ACCESO INMEDIATO <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" /></span>
                  </a>

                  <div className="flex flex-col items-center gap-4 text-xs text-gray-500 mt-2 w-full">
                    <div className="bg-yellow-50/80 p-3 rounded-lg border border-yellow-100 w-full text-center">
                         <p className="flex items-center justify-center gap-2 text-gray-800 font-bold mb-1">
                             <Mail className="w-4 h-4 text-accent-600" />
                             Envío Automático e Inmediato
                         </p>
                         <p className="leading-tight text-gray-600 text-[11px]">
                             El eBook llega a tu casilla de email <strong>al instante</strong> de confirmarse el pago.
                         </p>
                    </div>

                    <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-200">
                        <Lock className="w-3 h-3 text-green-600" />
                        <span className="font-medium">Compra 100% Segura</span>
                    </div>
                    <img src="https://cdn.shopify.com/s/files/1/0013/3696/7229/files/trust-badges-shopify.png?v=1625625136" alt="Tarjetas" className="h-5 opacity-60" />
                  </div>
                  
                  <p className="text-center text-gray-400 text-[10px] mt-4 leading-tight">
                      Al hacer clic, serás redirigido a la plataforma segura <strong>Sandie Tienda</strong> para finalizar tu compra.
                  </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;