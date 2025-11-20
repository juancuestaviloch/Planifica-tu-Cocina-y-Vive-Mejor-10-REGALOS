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

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-medium relative z-40 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        <div className="flex items-center gap-2 animate-pulse">
            <Timer className="w-4 h-4" />
            <span className="uppercase tracking-wider font-bold">Oferta Relámpago</span>
        </div>
        <p className="hidden sm:block">El descuento del 88% y los 10 Bonos Gratis desaparecen en:</p>
        <div className="font-mono font-bold bg-red-800/50 px-3 py-1 rounded text-white border border-red-400/30">
          {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;