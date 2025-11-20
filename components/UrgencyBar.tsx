
import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const UrgencyBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 59, seconds: 0 }; // Reset loop
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-xs sm:text-sm font-medium relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-6">
        <div className="flex items-center gap-1.5 animate-pulse bg-red-800/30 px-2 py-0.5 rounded">
            <Timer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="uppercase tracking-wider font-bold whitespace-nowrap">Oferta Flash</span>
        </div>
        
        <div className="flex gap-2 items-center">
            <p className="hidden sm:block">El descuento del 88% termina en:</p>
            <p className="sm:hidden">Termina en:</p>
            <div className="font-mono font-bold bg-white text-red-600 px-2 py-0.5 rounded border border-red-400/30 min-w-[80px] text-center">
            {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
