
import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const UrgencyBar: React.FC = () => {
  const DURATION_HOURS = 4;
  
  const [timeLeft, setTimeLeft] = useState<{hours: number, minutes: number, seconds: number}>({ hours: 4, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Funciones seguras para manejar localStorage sin romper la app
    const safeGetItem = (key: string) => {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    };

    const safeSetItem = (key: string, value: string) => {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        // Si falla (cookies bloqueadas), no hacemos nada.
      }
    };

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        let endTime = safeGetItem('cocina_flash_end_time');

        // Si no hay fecha guardada o no se puede leer, calculamos una nueva
        let targetTime = 0;
        if (!endTime) {
            targetTime = now + (DURATION_HOURS * 60 * 60 * 1000);
            safeSetItem('cocina_flash_end_time', targetTime.toString());
        } else {
            targetTime = parseInt(endTime, 10);
            // Validación de seguridad por si el dato está corrupto
            if (isNaN(targetTime)) {
                targetTime = now + (DURATION_HOURS * 60 * 60 * 1000);
                safeSetItem('cocina_flash_end_time', targetTime.toString());
            }
        }

        const distance = targetTime - now;

        if (distance < 0) {
             // Si expiró, reiniciamos a 45 min
             const resetTarget = now + (45 * 60 * 1000); 
             safeSetItem('cocina_flash_end_time', resetTarget.toString());
             return { hours: 0, minutes: 45, seconds: 0 };
        }

        return {
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        };
    };

    // Initial calc
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-medium relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-1.5 animate-pulse bg-red-800/30 px-2 py-0.5 rounded border border-red-500/50">
            <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="uppercase tracking-wider font-bold whitespace-nowrap">Oferta Flash</span>
        </div>
        
        <div className="flex gap-2 items-center">
            <p className="hidden sm:block">El descuento del 88% termina en:</p>
            <p className="sm:hidden">Termina en:</p>
            <div className="font-mono font-bold bg-white text-red-600 px-2 py-0.5 rounded border border-red-400/30 min-w-[85px] text-center shadow-inner">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
