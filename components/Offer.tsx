
import React, { useState, useEffect } from 'react';
import { MAIN_PRODUCT, CHECKOUT_URL, BONUSES } from '../constants';
import { Check, ArrowRight, ShieldCheck, CreditCard, MessageCircle, Clock, Zap, Gift } from 'lucide-react';

const Offer: React.FC = () => {
  // Timer Logic (Persistente en localStorage para esta sección)
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    const savedTime = localStorage.getItem('cocina-offer-timer-light');
    const now = Date.now();
    
    if (savedTime) {
      const { target } = JSON.parse(savedTime);
      const remaining = Math.max(0, Math.floor((target - now) / 1000));
      setTimeLeft(remaining);
    } else {
      const target = now + 600 * 1000;
      localStorage.setItem('cocina-offer-timer-light', JSON.stringify({ target }));
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Precios
  const transferDiscount = 0.20; // 20% OFF
  const transferPrice = MAIN_PRODUCT.price * (1 - transferDiscount);
  const transferSavings = MAIN_PRODUCT.price - transferPrice;

  // WhatsApp Link
  const waNumber = "5492236885623";
  const waMessage = `Hola Ramón, quiero aprovechar el 20% OFF por transferencia para el Sistema Cocina Resuelta. ¿Me pasas el CBU? El precio sería $${transferPrice.toLocaleString('es-AR')}.`;
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="offer" className="py-20 bg-white font-sans text-gray-900 relative overflow-hidden border-t border-gray-100">
      
      {/* Background Ambience (Culinary Style) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent-100/50 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-brand-100/50 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
            
            {/* Timer Badge */}
            <div className="inline-flex items-center gap-3 bg-red-50 border border-red-100 rounded-full px-6 py-2 mb-6 shadow-sm">
                <div className="relative">
                    <div className="absolute inset-0 bg-red-400 blur-sm rounded-full animate-pulse opacity-50"></div>
                    <Clock className="w-5 h-5 text-red-600 relative z-10" />
                </div>
                <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Oferta Flash</span>
                <div className="w-px h-4 bg-red-200"></div>
                <span className="font-mono text-xl font-black text-red-700 tracking-widest">
                    {formatTime(timeLeft)}
                </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-brand-900">
                Elegí tu método de acceso
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                Comenzá hoy mismo a transformar tu cocina. Acceso inmediato, de por vida y con garantía total.
            </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

            {/* CARD 1: LIST PRICE (TARJETA/SHOPIFY) - CLEAN STYLE */}
            <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 relative hover:border-gray-300 transition duration-300 flex flex-col h-full shadow-lg group">
                <div className="mb-6">
                    <span className="text-gray-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Precio de Lista
                    </span>
                    <h3 className="text-gray-900 font-bold text-xl mt-2">Tarjeta / Cuotas</h3>
                </div>

                <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-gray-900 tracking-tight">${MAIN_PRODUCT.price.toLocaleString('es-AR')}</span>
                        <span className="text-lg text-gray-400 font-medium">ARS</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-2 line-through">
                        Antes: ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}
                    </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <div className="bg-gray-100 p-1 rounded-full"><Check className="w-3 h-3 text-gray-600" /></div>
                        <span className="text-gray-600 text-sm">Acceso inmediato al sistema</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-gray-100 p-1 rounded-full"><Check className="w-3 h-3 text-gray-600" /></div>
                        <span className="text-gray-600 text-sm">Todos los {BONUSES.length} bonos incluidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-gray-100 p-1 rounded-full"><Check className="w-3 h-3 text-gray-600" /></div>
                        <span className="text-gray-600 text-sm">Hasta 3 cuotas sin interés</span>
                    </li>
                </ul>

                <a 
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                    PAGAR CON TARJETA
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition" />
                </a>
            </div>

            {/* CARD 2: TRANSFER (WHATSAPP) - BRAND STYLE (GREEN & ORANGE) */}
            <div className="bg-brand-50 border-2 border-brand-500 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(34,197,94,0.15)] transform md:scale-105 z-10 flex flex-col h-full">
                
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-500 text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                    <Zap className="w-3 h-3 fill-current" /> OPCIÓN INTELIGENTE
                </div>

                <div className="mb-6">
                    <span className="text-brand-700 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <Gift className="w-4 h-4" />
                        Transferencia Bancaria
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-brand-800 text-xs font-bold bg-white px-2 py-1 rounded border border-brand-200 shadow-sm">
                            🚀 20% OFF EXTRA
                        </span>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-gray-400 text-sm line-through decoration-gray-400 mb-1">
                        ${MAIN_PRODUCT.price.toLocaleString('es-AR')}
                    </p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black text-brand-900 tracking-tight">${transferPrice.toLocaleString('es-AR')}</span>
                        <span className="text-xl text-brand-700/60 font-medium">ARS</span>
                    </div>
                    <p className="text-accent-600 text-xs mt-2 font-bold bg-accent-50 inline-block px-2 py-0.5 rounded">
                        ¡Te ahorrás ${transferSavings.toLocaleString('es-AR')} adicionales!
                    </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-200 p-1 rounded-full"><Check className="w-3 h-3 text-brand-700" /></div>
                        <span className="text-brand-900 text-sm font-medium">Descuento aplicado sobre la oferta</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-200 p-1 rounded-full"><Check className="w-3 h-3 text-brand-700" /></div>
                        <span className="text-brand-900 text-sm font-medium">Acceso digital rápido (Envío manual)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-200 p-1 rounded-full"><Check className="w-3 h-3 text-brand-700" /></div>
                        <span className="text-brand-900 text-sm font-medium">Atención directa por WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-brand-200 p-1 rounded-full"><Check className="w-3 h-3 text-brand-700" /></div>
                        <span className="text-brand-900 text-sm font-medium">Mismos beneficios y garantía</span>
                    </li>
                </ul>

                <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white font-black py-4 rounded-xl transition shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 group text-lg relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        PEDIR CBU POR WHATSAPP
                        <MessageCircle className="w-5 h-5 fill-current" />
                    </span>
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                </a>
                
                <p className="text-center text-[10px] text-brand-700/60 mt-3 font-medium">
                    *Al hacer clic se abrirá un chat para coordinar.
                </p>
            </div>

        </div>

        {/* Security Footer */}
        <div className="mt-12 flex justify-center items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition duration-500">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span className="text-xs text-gray-500 font-medium">COMPRA 100% SEGURA</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">DATOS ENCRIPTADOS (SSL)</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">GARANTÍA DE 7 DÍAS</span>
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
