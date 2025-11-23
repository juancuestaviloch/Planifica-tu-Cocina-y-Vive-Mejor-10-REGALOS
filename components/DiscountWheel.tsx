
import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Copy, Check } from 'lucide-react';

interface Prize {
  label: string;
  value: number;
  color: string;
  textColor: string;
  code: string;
}

// PARA ACTIVAR GOOGLE SHEETS:
const GOOGLE_SCRIPT_URL = ""; 

const DiscountWheel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'email' | 'spinning' | 'result'>('email');
  const [rotation, setRotation] = useState(0);
  const [prize, setPrize] = useState<Prize | null>(null);
  const [hasCopied, setHasCopied] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  
  // Keys for localStorage
  const SPUN_KEY = 'cocina-resuelta-wheel-spun';
  const DISMISSED_KEY = 'cocina-resuelta-wheel-dismissed';

  // Helper functions for safe storage access
  const safeGetItem = (key: string) => {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  };
  const safeSetItem = (key: string, value: string) => {
    try { localStorage.setItem(key, value); } catch (e) { }
  };

  // Wheel Segments Configuration - FIXED CODES
  const SEGMENTS: Prize[] = [
    { label: '10% OFF', value: 10, color: '#dcfce7', textColor: '#166534', code: 'Sandie10' },
    { label: '15% OFF', value: 15, color: '#fef9c3', textColor: '#854d0e', code: 'Sandiee15%' },
    { label: '10% OFF', value: 10, color: '#dcfce7', textColor: '#166534', code: 'Sandie10' },
    { label: '20% OFF', value: 20, color: '#fee2e2', textColor: '#991b1b', code: 'Sandie20%' },
    { label: '10% OFF', value: 10, color: '#dcfce7', textColor: '#166534', code: 'Sandie10' },
    { label: '15% OFF', value: 15, color: '#fef9c3', textColor: '#854d0e', code: 'Sandiee15%' },
  ];

  useEffect(() => {
    // Check if already spun on mount
    if (safeGetItem(SPUN_KEY)) {
      setHasSpun(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen || hasSpun) return;

      const dismissedTimestamp = safeGetItem(DISMISSED_KEY);
      if (dismissedTimestamp) {
        const now = Date.now();
        const dismissedTime = parseInt(dismissedTimestamp, 10);
        const hoursPassed = (now - dismissedTime) / (1000 * 60 * 60);
        
        if (hoursPassed < 24) {
            return; // Still in cooldown period for AUTO POPUP
        }
      }

      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      const triggerPoint = pageHeight * 0.25; 

      if (scrollPosition > triggerPoint) {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, hasSpun]);

  const handleClose = () => {
      setIsOpen(false);
      safeSetItem(DISMISSED_KEY, Date.now().toString());
  };

  const saveEmailToGoogleSheets = async (userEmail: string) => {
    if (!GOOGLE_SCRIPT_URL) return;
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userEmail, date: new Date().toISOString() })
        });
    } catch (error) {
        console.error("Error guardando email:", error);
    }
  };

  const determinePrize = (): number => {
    const rand = Math.random() * 100;
    let winningValue = 10;
    if (rand < 90) winningValue = 10;
    else if (rand < 99) winningValue = 15;
    else winningValue = 20;

    const matchingIndices = SEGMENTS.map((seg, idx) => seg.value === winningValue ? idx : -1).filter(idx => idx !== -1);
    const winningIndex = matchingIndices[Math.floor(Math.random() * matchingIndices.length)];
    return winningIndex;
  };

  const handleSpin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;

    saveEmailToGoogleSheets(email);

    setStep('spinning');
    safeSetItem(SPUN_KEY, 'true');
    setHasSpun(true);

    const winningIndex = determinePrize();
    const winningSegment = SEGMENTS[winningIndex];
    setPrize(winningSegment);

    const segmentAngle = 360 / SEGMENTS.length;
    const spinCount = 5; 
    const randomOffset = Math.floor(Math.random() * 20) - 10; 
    const finalRotation = (spinCount * 360) + (360 - (winningIndex * segmentAngle)) + randomOffset;

    setRotation(finalRotation);

    setTimeout(() => {
      setStep('result');
    }, 4000);
  };

  const copyToClipboard = () => {
    if (prize) {
      navigator.clipboard.writeText(prize.code);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-500">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={handleClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col items-center transition-all transform scale-100">
                
                <button 
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 bg-white/80 rounded-full p-1"
                >
                <X className="w-6 h-6" />
                </button>

                {/* Header Background */}
                <div className="w-full bg-brand-600 p-6 pb-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
                <h3 className="text-2xl font-serif font-bold text-white relative z-10">
                    {step === 'result' ? '¡FELICITACIONES!' : '¡Probá tu suerte!'}
                </h3>
                <p className="text-brand-100 text-sm mt-1 relative z-10">
                    {step === 'result' ? 'Has desbloqueado un descuento exclusivo' : 'Giramos la ruleta por vos'}
                </p>
                </div>

                {/* Wheel Container */}
                <div className="relative -mt-10 mb-6">
                {/* The Pointer */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[20px] border-t-red-500 filter drop-shadow-md"></div>
                </div>

                {/* The Wheel */}
                <div 
                    className="w-64 h-64 rounded-full border-4 border-white shadow-xl relative overflow-hidden transition-transform duration-[4000ms] cubic-bezier(0.25, 0.1, 0.25, 1)"
                    style={{ 
                    background: `conic-gradient(
                        ${SEGMENTS[0].color} 0deg 60deg,
                        ${SEGMENTS[1].color} 60deg 120deg,
                        ${SEGMENTS[2].color} 120deg 180deg,
                        ${SEGMENTS[3].color} 180deg 240deg,
                        ${SEGMENTS[4].color} 240deg 300deg,
                        ${SEGMENTS[5].color} 300deg 360deg
                    )`,
                    transform: `rotate(${rotation}deg)`
                    }}
                >
                    {/* Wheel Labels */}
                    {SEGMENTS.map((seg, i) => (
                        <div 
                        key={i}
                        className="absolute w-full h-full top-0 left-0 flex justify-center pt-4"
                        style={{ transform: `rotate(${i * 60}deg)` }}
                        >
                        <span 
                            className="font-bold text-sm transform rotate-0 origin-bottom mt-2" 
                            style={{ color: seg.textColor }}
                        >
                            {seg.label}
                        </span>
                        </div>
                    ))}
                    
                    {/* Center Cap */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-inner flex items-center justify-center border-2 border-gray-100 z-10">
                        <Gift className="w-6 h-6 text-brand-500" />
                    </div>
                </div>
                </div>

                {/* Content Area */}
                <div className="px-8 pb-8 w-full text-center">
                
                {step === 'email' && (
                    <form onSubmit={handleSpin} className="animate-in slide-in-from-bottom-4 fade-in">
                    <p className="text-gray-600 text-sm mb-4">
                        Ingresá tu email para girar la ruleta y ganar hasta un <strong>20% OFF</strong> extra en tu compra.
                    </p>
                    <div className="space-y-3">
                        <input
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition text-center"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                        GIRAR AHORA <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-[10px] text-gray-400 mt-2">
                        *Probabilidades: 10% (90%), 15% (9%), 20% (1%).
                        </p>
                    </div>
                    </form>
                )}

                {step === 'spinning' && (
                    <div className="py-4 text-brand-600 font-bold animate-pulse">
                    ¡Mucha suerte! Girando...
                    </div>
                )}

                {step === 'result' && prize && (
                    <div className="animate-in zoom-in duration-300">
                    <div className="text-4xl font-black text-brand-600 mb-2 drop-shadow-sm">
                        {prize.label}
                    </div>
                    <p className="text-gray-600 text-sm mb-6">
                        ¡Genial! Usá este cupón al finalizar tu compra para canjear tu descuento.
                    </p>
                    
                    <div 
                        onClick={copyToClipboard}
                        className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-4 mb-6 cursor-pointer hover:bg-gray-50 transition relative group"
                    >
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Tu Código:</p>
                        <div className="text-2xl font-mono font-bold text-gray-800 flex items-center justify-center gap-2">
                            {prize.code}
                            {hasCopied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-gray-400 group-hover:text-brand-500" />}
                        </div>
                        <span className="text-[10px] text-brand-600 absolute bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">Click para copiar</span>
                    </div>

                    <button
                        onClick={() => {
                        setIsOpen(false);
                        document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform transition hover:-translate-y-1"
                    >
                        USAR DESCUENTO AHORA
                    </button>
                    </div>
                )}

                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default DiscountWheel;
