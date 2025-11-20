import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const RECENT_BUYERS = [
  { name: "Ana M.", location: "Córdoba" },
  { name: "Sofía L.", location: "CABA" },
  { name: "Valentina R.", location: "Mendoza" },
  { name: "María C.", location: "Rosario" },
  { name: "Luciana G.", location: "Neuquén" },
  { name: "Julieta P.", location: "La Plata" },
  { name: "Camila S.", location: "Tucumán" },
];

const SocialProofToast: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buyer, setBuyer] = useState(RECENT_BUYERS[0]);
  const [timeAgo, setTimeAgo] = useState(2);

  useEffect(() => {
    // Initial delay before first popup
    const initialTimeout = setTimeout(() => {
      triggerPopup();
    }, 5000);

    const triggerPopup = () => {
      const randomBuyer = RECENT_BUYERS[Math.floor(Math.random() * RECENT_BUYERS.length)];
      const randomTime = Math.floor(Math.random() * 15) + 1; // 1 to 15 minutes ago
      
      setBuyer(randomBuyer);
      setTimeAgo(randomTime);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Schedule next popup (random time between 15 and 30 seconds)
      const nextInterval = Math.random() * 15000 + 15000;
      setTimeout(triggerPopup, nextInterval);
    };

    return () => clearTimeout(initialTimeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 left-4 sm:bottom-6 sm:left-6 z-40 animate-in slide-in-from-left duration-500 fade-in">
      <div className="bg-white rounded-lg shadow-xl border border-brand-100 p-4 flex items-center gap-3 max-w-[300px] relative overflow-hidden">
        
        <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
        
        <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
        </div>
        
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">
            {buyer.name} de {buyer.location}
          </p>
          <p className="text-xs text-gray-500">
            compró el pack hace {timeAgo} minutos
          </p>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-gray-300 hover:text-gray-500"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default SocialProofToast;