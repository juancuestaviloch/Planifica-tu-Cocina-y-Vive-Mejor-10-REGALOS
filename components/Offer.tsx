
import React, { useState, useEffect } from 'react';
import { MAIN_PRODUCT, CHECKOUT_URL, BONUSES } from '../constants';
import { Check, ArrowRight, ShieldCheck, CreditCard, MessageCircle, Clock, Zap } from 'lucide-react';

const Offer: React.FC = () => {
  // Timer Logic (Persistente en localStorage para esta sección)
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const savedTime = localStorage.getItem('cocina-offer-timer-dark');
    const now = Date.now();
    
    if (savedTime) {
      const { target } = JSON.parse(savedTime);
      const remaining = Math.max(0, Math.floor((target - now) / 1000));
      setTimeLeft(remaining);
    } else {
      const target = now + 600 * 1000;
      localStorage.setItem('cocina-offer-timer-dark', JSON.stringify({ target }));
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

  // Precios Dinámicos basados en constants.ts
  const transferDiscount = 0.20; // 20% OFF
  const transferPrice = MAIN_PRODUCT.price * (1 - transferDiscount);
  const transferSavings = MAIN_PRODUCT.price - transferPrice;

  // WhatsApp Link Logic
  const waNumber = "5492236885623";
  const waMessage = `Hola Ramón, quiero aprovechar el 20% OFF por transferencia para el Sistema Cocina Resuelta. ¿Me pasas el CBU? El precio sería $${transferPrice.toLocaleString('es-AR')}.`;
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <section id="offer" className="py-20 bg-[#020617] font-sans text-white relative overflow-hidden">
      
      {/* Background Ambience (Dark Mode Fintech Style) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-full px-6 py-2 mb-6 backdrop-blur-md shadow-lg">
                <div className="relative">
                    <div className="absolute inset-0 bg-red-500 blur-sm rounded-full animate-pulse"></div>
                    <Clock className="w-5 h-5 text-red-500 relative z-10" />
                </div>
                <span className="text-red-400 font-bold tracking-widest uppercase text-xs">Oferta Flash</span>
                <div className="w-px h-4 bg-slate-600"></div>
                <span className="font-mono text-xl font-black text-white tracking-widest">
                    {formatTime(timeLeft)}
                </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 font-serif">
                Elegí tu método de acceso
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
                Comenzá hoy mismo a transformar tu cocina. Acceso inmediato, de por vida y con garantía total.
            </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

            {/* CARD 1: LIST PRICE (TARJETA/SHOPIFY) */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-8 relative hover:border-slate-600 transition duration-300 flex flex-col h-full shadow-2xl group">
                <div className="mb-6">
                    <span className="text-slate-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Precio de Lista
                    </span>
                    <h3 className="text-white font-bold text-xl mt-2">Tarjeta / Cuotas</h3>
                </div>

                <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-white tracking-tight">${MAIN_PRODUCT.price.toLocaleString('es-AR')}</span>
                        <span className="text-lg text-slate-500 font-medium">ARS</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-2 line-through">
                        Antes: ${MAIN_PRODUCT.originalPrice.toLocaleString('es-AR')}
                    </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <div className="bg-slate-800 p-1 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                        <span className="text-slate-300 text-sm">Acceso inmediato al sistema (Automático)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-slate-800 p-1 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                        <span className="text-slate-300 text-sm">Todos los {BONUSES.length} bonos incluidos</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-slate-800 p-1 rounded-full"><Check className="w-3 h-3 text-white" /></div>
                        <span className="text-slate-300 text-sm">Hasta 3 cuotas sin interés</span>
                    </li>
                </ul>

                <a 
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 rounded-xl transition border border-slate-700 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-slate-500/10"
                >
                    PAGAR CON TARJETA
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                </a>
            </div>

            {/* CARD 2: TRANSFER (WHATSAPP) - HIGHLIGHTED */}
            <div className="bg-[#0f172a] border-2 border-emerald-500 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(16,185,129,0.1)] transform md:scale-105 z-10 flex flex-col h-full">
                
                {/* Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-[#020617] font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1 whitespace-nowrap">
                    <Zap className="w-3 h-3 fill-current" /> RECOMENDADO
                </div>

                <div className="mb-6">
                    <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Transferencia Bancaria
                    </span>
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-emerald-500 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                            🚀 20% OFF EXTRA
                        </span>
                    </div>
                </div>

                <div className="mb-8">
                    <p className="text-slate-500 text-sm line-through decoration-slate-500 mb-1">
                        ${MAIN_PRODUCT.price.toLocaleString('es-AR')}
                    </p>
                    <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-black text-white tracking-tight">${transferPrice.toLocaleString('es-AR')}</span>
                        <span className="text-xl text-slate-500 font-medium">ARS</span>
                    </div>
                    <p className="text-emerald-400 text-xs mt-2 font-bold">
                        Te ahorrás ${transferSavings.toLocaleString('es-AR')} adicionales
                    </p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-400" /></div>
                        <span className="text-white text-sm font-medium">Descuento aplicado sobre la oferta</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-400" /></div>
                        <span className="text-white text-sm font-medium">Acceso digital rápido (Envío manual)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-400" /></div>
                        <span className="text-white text-sm font-medium">Atención directa por WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="w-3 h-3 text-emerald-400" /></div>
                        <span className="text-white text-sm font-medium">Mismos beneficios y garantía</span>
                    </li>
                </ul>

                <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#020617] font-black py-4 rounded-xl transition shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group text-lg relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        PEDIR CBU POR WHATSAPP
                        <MessageCircle className="w-5 h-5 fill-current" />
                    </span>
                    {/* Shine Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                </a>
                
                <p className="text-center text-[10px] text-slate-500 mt-3">
                    *Al hacer clic se abrirá un chat para coordinar el pago.
                </p>
            </div>

        </div>

        {/* Security Footer */}
        <div className="mt-12 flex justify-center items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition duration-500">
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-xs text-slate-300 font-medium">COMPRA 100% SEGURA</span>
            </div>
            <div className="w-px h-4 bg-slate-700"></div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300 font-medium">DATOS ENCRIPTADOS (SSL)</span>
            </div>
            <div className="w-px h-4 bg-slate-700"></div>
            <div className="flex items-center gap-2">
                <span className="text-xs text-slate-300 font-medium">GARANTÍA DE 7 DÍAS</span>
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
