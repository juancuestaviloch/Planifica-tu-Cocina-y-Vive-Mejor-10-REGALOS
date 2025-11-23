
import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, ArrowRight } from 'lucide-react';
import { CHECKOUT_URL } from '../constants';

const ExitIntentModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    const safeGetSession = (key: string) => {
      try { return sessionStorage.getItem(key); } catch (e) { return null; }
    };
    const safeSetSession = (key: string, value: string) => {
      try { sessionStorage.setItem(key, value); } catch (e) { }
    };

    const sessionKey = 'cocina-resuelta-exit-modal-shown';

    // Función para detectar la salida del mouse por la parte superior (Desktop)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasBeenShown) {
        // Verificar si ya se mostró en esta sesión
        if (!safeGetSession(sessionKey)) {
            setIsVisible(true);
            setHasBeenShown(true);
            safeSetSession(sessionKey, 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    // Fallback para móviles: Mostrar después de 60 segundos si no ha comprado
    const timer = setTimeout(() => {
        if (!hasBeenShown && !safeGetSession(sessionKey)) {
             setIsVisible(true);
             setHasBeenShown(true);
             safeSetSession(sessionKey, 'true');
        }
    }, 60000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasBeenShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all scale-100 animate-in zoom-in-95 duration-300">
        
        {/* Decorative Top Bar */}
        <div className="h-2 bg-accent-500 w-full"></div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition bg-white rounded-full p-1 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 animate-bounce">
                <ShieldCheck className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                ¡Esperá! No te vayas con dudas...
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
                Entiendo que probar algo nuevo da miedo. Por eso quiero recordarte que <strong>asumo yo todo el riesgo</strong>.
            </p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-8 text-left">
                <p className="text-sm text-gray-700 font-medium flex items-start gap-3">
                    <span className="text-2xl">🔒</span>
                    <span>
                        Si aplicás el sistema y en <strong>7 días</strong> sentís que no recuperaste tu inversión en tiempo y dinero, te devuelvo el 100% del valor. Sin preguntas.
                    </span>
                </p>
            </div>

            <div className="space-y-3">
                <a 
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition transform hover:-translate-y-1"
                >
                    <span>Probar Sin Riesgo (Garantía Incluida)</span>
                    <ArrowRight className="w-5 h-5" />
                </a>
                
                <button 
                    onClick={() => setIsVisible(false)}
                    className="text-sm text-gray-400 hover:text-gray-600 font-medium underline decoration-gray-300 underline-offset-4"
                >
                    No gracias, prefiero seguir cocinando todos los días
                </button>
            </div>
        </div>

        {/* Footer Strip */}
        <div className="bg-gray-50 py-3 px-8 flex justify-center items-center gap-4 text-xs text-gray-500 border-t border-gray-100">
             <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full"></span> Oferta activa</span>
             <span>|</span>
             <span>Cupos limitados hoy</span>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;
