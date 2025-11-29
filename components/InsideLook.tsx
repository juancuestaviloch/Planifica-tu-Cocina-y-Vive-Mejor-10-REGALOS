
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MousePointerClick, Star, Bookmark, ChefHat, ArrowRight } from 'lucide-react';

const BOOK_PAGES = [
  // COVER
  {
    id: 0,
    type: 'cover',
    content: (
      <div className="h-full w-full bg-[#1a3624] flex flex-col items-center justify-between p-1 border-l-4 border-[#0f1f14] relative overflow-hidden shadow-inner rounded-r-md">
        {/* Leather Texture Overlay */}
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] mix-blend-overlay"></div>
        
        {/* Gold Border Frame */}
        <div className="absolute inset-3 border border-[#d4af37] opacity-60 rounded-sm pointer-events-none"></div>
        <div className="absolute inset-4 border border-[#d4af37] opacity-30 rounded-sm pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full items-center justify-between py-8 px-4 text-center">
            
            <div className="flex items-center gap-2 mb-2">
                <Star className="w-3 h-3 text-[#d4af37] fill-current" />
                <span className="text-[#d4af37] text-[8px] tracking-[0.3em] uppercase font-serif">Best Seller 2025</span>
                <Star className="w-3 h-3 text-[#d4af37] fill-current" />
            </div>

            <div className="space-y-2">
                <h1 className="font-serif text-4xl text-[#f3e5ab] font-black leading-[0.85] tracking-tight drop-shadow-md">
                    COCINA<br/>RESUELTA
                </h1>
                <div className="w-12 h-0.5 bg-[#d4af37] mx-auto mt-2"></div>
                <h2 className="font-sans text-brand-100 text-[9px] font-medium uppercase tracking-widest mt-2 max-w-[200px] mx-auto leading-relaxed opacity-80">
                    El sistema definitivo de organización semanal
                </h2>
            </div>
            
            {/* Centerpiece Image Circle - FIXED IMAGE */}
            <div className="relative group my-4">
                <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-md opacity-20 group-hover:opacity-40 transition duration-700"></div>
                <div className="w-36 h-36 rounded-full overflow-hidden border-[3px] border-[#d4af37] shadow-2xl relative z-10 bg-[#1a3624]">
                    {/* High Quality Meal Prep Image (Top Down View for better Circle Fit) */}
                    <img 
                        src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600" 
                        alt="Meal Prep Healthy Food" 
                        className="w-full h-full object-cover object-center transform hover:scale-110 transition duration-700" 
                    />
                </div>
            </div>

            <div className="space-y-1">
                 <p className="text-white font-serif font-bold italic text-sm">Ramón</p>
                 <p className="text-[#d4af37] text-[8px] uppercase tracking-widest">Creador del Método</p>
            </div>
        </div>
      </div>
    )
  },
  
  // PAGE 1: INDICE (EDITORIAL STYLE)
  {
    id: 1,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fffcf5] p-6 text-gray-800 relative paper-texture">
        {/* Spine Shadow */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10"></div>
        
        <div className="relative z-20 pl-2 mt-4">
            <div className="border-b-2 border-gray-800 pb-2 mb-6 flex justify-between items-end">
                <h3 className="font-serif font-black text-xl text-gray-900 uppercase tracking-tighter">Contenido</h3>
                <span className="font-serif italic text-xs text-gray-400">Vol. 1</span>
            </div>
            
            <div className="space-y-6 font-serif">
                <div className="group cursor-pointer">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-2xl text-gray-200 group-hover:text-brand-500 transition duration-300">01</span>
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide group-hover:text-brand-700 transition">La Filosofía</h4>
                    </div>
                    <p className="text-[10px] text-gray-500 pl-8 leading-tight italic">
                        Por qué fallan las dietas y cómo hackear tu cocina.
                    </p>
                </div>
                
                <div className="group cursor-pointer">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-2xl text-gray-200 group-hover:text-brand-500 transition duration-300">02</span>
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide group-hover:text-brand-700 transition">El Método 2 Horas</h4>
                    </div>
                    <p className="text-[10px] text-gray-500 pl-8 leading-tight italic">
                        Paso a paso para cocinar el domingo y descansar el resto de la semana.
                    </p>
                </div>

                <div className="group cursor-pointer">
                    <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-2xl text-gray-200 group-hover:text-brand-500 transition duration-300">03</span>
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wide group-hover:text-brand-700 transition">Secretos del Freezer</h4>
                    </div>
                    <p className="text-[10px] text-gray-500 pl-8 leading-tight italic">
                        Técnicas de conservación que nadie te contó.
                    </p>
                </div>

                 <div className="mt-8 pl-4 border-l-2 border-accent-400">
                    <p className="font-handwriting text-accent-600 text-sm rotate-[-2deg]">
                        ¡Incluye los 10 bonos de regalo!
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute bottom-4 right-5 text-gray-400 font-serif font-bold text-xs">I</div>
      </div>
    )
  },

  // PAGE 2: DIAGRAMA VISUAL
  {
    id: 2,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fffcf5] p-6 text-gray-800 flex flex-col relative paper-texture justify-center">
         {/* Spine Shadow */}
         <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/5 to-transparent pointer-events-none z-10"></div>

         <div className="relative z-20">
            <h3 className="font-serif font-bold text-lg text-brand-900 mb-6 text-center leading-tight">
                El Ciclo del <br/><span className="text-accent-600 bg-accent-50 px-1">Estrés Infinito</span>
            </h3>
            
            {/* Diagrama Visual */}
            <div className="relative w-full h-48 my-4">
                {/* Flechas Circulares */}
                <div className="absolute inset-4 border-2 border-dashed border-gray-300 rounded-full opacity-50"></div>
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white p-2 shadow-sm border border-red-100 rounded-lg text-center w-24">
                    <span className="text-[8px] font-bold text-gray-400 uppercase block">19:00 HS</span>
                    <span className="text-[10px] font-bold text-red-500 leading-none">Hambre y Cansancio</span>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white p-2 shadow-sm border border-gray-200 rounded-lg text-center w-24">
                    <span className="text-[8px] font-bold text-gray-400 uppercase block">20:30 HS</span>
                    <span className="text-[10px] font-bold text-gray-600 leading-none">Culpa post-cena</span>
                </div>

                <div className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 bg-white p-2 shadow-sm border border-gray-200 rounded-lg text-center w-20">
                    <span className="text-[10px] font-bold text-gray-600 leading-none">Delivery Caro</span>
                </div>
                
                 <div className="absolute top-1/2 left-0 -translate-x-1/4 -translate-y-1/2 bg-white p-2 shadow-sm border border-gray-200 rounded-lg text-center w-20">
                    <span className="text-[10px] font-bold text-gray-600 leading-none">Cocinar sin ganas</span>
                </div>
                
                {/* Center Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-white/80 p-2 rounded-full">
                    <p className="font-handwriting text-red-600 text-lg rotate-[-5deg] whitespace-nowrap">¿Te suena?</p>
                </div>
            </div>

            <p className="text-[10px] text-gray-600 text-justify font-serif leading-4 mt-6 px-2">
                Este ciclo se repite 365 veces al año. Te roba energía, dinero y salud. En la página 12 te enseño cómo romperlo para siempre.
            </p>
         </div>
         <div className="absolute bottom-4 left-5 text-gray-400 font-serif font-bold text-xs">5</div>
      </div>
    )
  },

  // PAGE 3: RECETA TEASER (BLURRED)
  {
    id: 3,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fffcf5] relative paper-texture overflow-hidden flex flex-col">
        {/* Spine Shadow */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/5 to-transparent pointer-events-none z-10"></div>
        
        <div className="relative z-0 h-1/2 w-full">
            {/* FIXED IMAGE: Specific Lemon Chicken/Gourmet Dish */}
            <img 
                src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=500&q=80" 
                className="w-full h-full object-cover object-center" 
                alt="Pollo al Limón Gourmet" 
            />
            <div className="absolute bottom-0 w-full h-12 bg-gradient-to-t from-[#fffcf5] to-transparent"></div>
            
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded shadow text-[10px] font-bold text-brand-700 uppercase tracking-wider border border-brand-100">
                Receta Exclusiva
            </div>
        </div>

        <div className="p-6 relative z-10 flex-1">
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 leading-tight">
                Pollo al Limón (Freezer-Friendly)
            </h3>
            <div className="flex gap-4 text-[9px] text-gray-500 uppercase tracking-widest mb-4">
                <span>Prep: 10 min</span>
                <span>•</span>
                <span>Cocción: 20 min</span>
            </div>

            {/* Blurred Content */}
            <div className="space-y-3 select-none filter blur-[3px] opacity-60">
                <p className="text-[11px] text-gray-800 leading-snug">1. Cortar las pechugas en cubos de 2x2 cm asegurando uniformidad para la cocción.</p>
                <p className="text-[11px] text-gray-800 leading-snug">2. Mezclar en un bowl el jugo de limón, la miel y las especias secretas...</p>
                <p className="text-[11px] text-gray-800 leading-snug">3. Guardar en bolsa ziploc eliminando todo el aire y llevar al freezer etiquetado.</p>
                <p className="text-[11px] text-gray-800 leading-snug">4. El secreto para que no se seque al descongelar es...</p>
            </div>

            {/* Locked Message */}
            <div className="absolute inset-0 top-1/3 flex items-center justify-center">
                <div className="bg-white/95 border border-brand-200 shadow-xl p-4 rounded-xl text-center transform rotate-2 max-w-[85%]">
                    <div className="mx-auto bg-brand-100 w-8 h-8 rounded-full flex items-center justify-center mb-2">
                        <ChefHat className="w-4 h-4 text-brand-600" />
                    </div>
                    <p className="font-serif font-bold text-gray-900 text-sm mb-1">Secreto de Chef</p>
                    <p className="text-[10px] text-gray-500 leading-tight">
                        Accedé al libro completo para ver esta receta y 50+ opciones listas para congelar.
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute bottom-4 right-5 text-gray-400 font-serif font-bold text-xs">18</div>
      </div>
    )
  },

   // PAGE 4: CTA FINAL (VAULT)
   {
    id: 4,
    type: 'cta',
    content: (
      <div className="h-full w-full bg-[#111827] flex flex-col items-center justify-center p-6 text-center relative shadow-inner overflow-hidden">
         {/* Background Patterns */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-10"></div>
         
         {/* Gold Border */}
         <div className="absolute inset-4 border border-white/10 rounded-lg pointer-events-none"></div>

         <div className="relative z-20 max-w-[240px]">
            <div className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] animate-pulse">
                <Bookmark className="w-8 h-8 text-white fill-current" />
            </div>

            <h3 className="text-white font-serif text-xl font-bold mb-3 leading-tight">
                Tu copia te está esperando
            </h3>
            
            <p className="text-gray-400 text-xs mb-8 leading-relaxed">
                Desbloqueá las <strong>150 páginas</strong>, las plantillas imprimibles y recuperá tu libertad en la cocina hoy mismo.
            </p>
            
            <button 
                onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
                className="group w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-bold py-3 px-4 rounded-lg shadow-lg transform transition hover:-translate-y-1 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
                <span>Obtener Acceso Total</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            
            <p className="mt-4 text-[9px] text-gray-600 uppercase tracking-widest">
                Descarga Inmediata
            </p>
         </div>
      </div>
    )
  }
];

const InsideLook: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = BOOK_PAGES.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(prev => prev - 1);
  };

  return (
    <section className="py-24 bg-[#1f2937] overflow-hidden min-h-[900px] flex flex-col items-center justify-center relative">
       
       {/* LUXURY AMBIENCE */}
       <div className="absolute inset-0 bg-[#0f172a]"></div>
       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
       {/* Spotlight effect */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/40 rounded-full blur-[120px] pointer-events-none"></div>

       <div className="max-w-7xl mx-auto px-4 relative z-10 w-full flex flex-col items-center">
          
          <div className="text-center mb-16 space-y-4">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm animate-fade-in-up">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
                </span>
                <span className="text-accent-400 text-[10px] font-bold tracking-widest uppercase">
                    Tour Virtual Interactivo
                </span>
             </div>
             
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white drop-shadow-lg max-w-2xl mx-auto leading-tight">
                Espiá el contenido por dentro...
             </h2>
             
             <p className="text-gray-400 text-sm md:text-base font-light flex items-center justify-center gap-2">
                <MousePointerClick className="w-4 h-4" />
                Hacé click en las páginas para hojear el libro
             </p>
          </div>

          {/* 3D BOOK STAGE */}
          <div className="relative w-[320px] h-[480px] sm:w-[400px] sm:h-[600px] perspective-2000 mx-auto mb-12 select-none max-w-[90vw]">
             
             {/* Realistic Shadow Casting */}
             <div className="absolute bottom-[-40px] left-[10%] w-[80%] h-[40px] bg-black/50 blur-2xl rounded-[100%] transition-all duration-700"
                  style={{ 
                      transform: `scaleX(${currentPage > 0 ? 1.6 : 1})`,
                      opacity: currentPage > 0 ? 0.4 : 0.6
                  }}></div>

             {/* PAGES CONTAINER */}
             <div className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-out">
                
                {/* Ribbon Bookmark */}
                <div className="absolute -top-2 left-8 w-6 h-24 bg-red-600 shadow-md z-[60] rounded-b-lg transform origin-top hover:scale-y-110 transition duration-300 border-t-2 border-red-800 pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-red-800/20 skew-y-12"></div>
                </div>

                {BOOK_PAGES.map((page, index) => {
                   const isFlipped = index < currentPage;
                   // FIX: Better stacking calculation to prevent z-fighting
                   const zIndex = isFlipped ? index : totalPages - index;
                   const rotation = isFlipped ? -180 : 0;
                   
                   return (
                      <div 
                        key={page.id}
                        className="absolute top-0 left-0 w-full h-full origin-left transition-all duration-1000 ease-in-out cursor-pointer rounded-r-md bg-[#fdfbf7]"
                        style={{ 
                            transform: `rotateY(${rotation}deg) translateZ(${isFlipped ? 2 : 0}px)`, // Slight Z offset to prevent clipping
                            zIndex: zIndex,
                            transformStyle: 'preserve-3d',
                            boxShadow: isFlipped 
                                ? '5px 0 20px rgba(0,0,0,0.1)' 
                                : '-1px 0 2px rgba(0,0,0,0.2), 5px 5px 15px rgba(0,0,0,0.3)'
                        }}
                        onClick={() => {
                            if (isFlipped) setCurrentPage(index); 
                            else setCurrentPage(index + 1); 
                        }}
                      >
                         {/* FRONT FACE */}
                         <div className="absolute inset-0 w-full h-full backface-hidden rounded-r-sm overflow-hidden bg-[#fdfbf7]">
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
                            {/* Inner Spine Gradient for realism */}
                            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-20"></div>
                            {page.content}
                         </div>

                         {/* BACK FACE */}
                         <div 
                            className="absolute inset-0 w-full h-full backface-hidden bg-[#f0ede6] rounded-l-sm overflow-hidden flex items-center justify-center border-r border-gray-300"
                            style={{ transform: 'rotateY(180deg)' }}
                         >
                             <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
                             <div className="opacity-[0.06] transform scale-x-[-1] blur-[1px] grayscale p-4 w-full h-full">
                                 {page.content}
                             </div>
                         </div>
                      </div>
                   );
                })}

                {/* PHYSICAL BOOK THICKNESS (Static) */}
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-r-md transform translate-z--2px border border-gray-400" style={{ zIndex: -1 }}></div>
                <div className="absolute top-1 left-0 w-full h-full bg-[#1a3624] rounded-r-md transform translate-z--4px border border-gray-800" style={{ zIndex: -2 }}></div>
                <div className="absolute top-2 left-0 w-full h-full bg-[#0d1f14] rounded-r-md transform translate-z--8px shadow-2xl" style={{ zIndex: -3 }}></div>
                
                {/* 3D SPINE (Visible when closed) */}
                <div 
                    className="absolute top-0 left-0 w-12 h-full bg-[#0f241a] transform -translate-x-full origin-right transition-all duration-700 rounded-l-md flex flex-col justify-center items-center shadow-2xl border-r border-white/10"
                    style={{
                         opacity: currentPage > 0 ? 0 : 1,
                         pointerEvents: currentPage > 0 ? 'none' : 'auto'
                    }}
                >
                    <div className="h-full w-full absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30 mix-blend-overlay"></div>
                    {/* Spine Text */}
                    <span className={`text-[#d4af37] text-[10px] font-serif font-bold tracking-[0.4em] uppercase rotate-[-90deg] whitespace-nowrap w-64 text-center drop-shadow-md`}>
                        Cocina Resuelta
                    </span>
                    {/* Spine Decorative Lines */}
                    <div className="absolute top-12 w-full h-[1px] bg-[#d4af37]/40"></div>
                    <div className="absolute top-14 w-full h-[1px] bg-[#d4af37]/40"></div>
                    <div className="absolute bottom-12 w-full h-[1px] bg-[#d4af37]/40"></div>
                    <div className="absolute bottom-14 w-full h-[1px] bg-[#d4af37]/40"></div>
                </div>

             </div>
          </div>

          {/* NAVIGATION CONTROLS */}
          <div className="flex items-center gap-8 mt-4">
              <button 
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`group flex items-center gap-3 text-white/50 hover:text-white transition disabled:opacity-20 ${currentPage === 0 ? 'cursor-not-allowed' : ''}`}
              >
                  <div className="p-3 rounded-full border border-white/10 group-hover:border-accent-500/50 group-hover:bg-accent-500/10 transition">
                    <ChevronLeft className="w-5 h-5 group-hover:text-accent-400" />
                  </div>
                  <span className="text-xs font-medium tracking-widest uppercase hidden sm:block">Anterior</span>
              </button>
              
              <div className="flex flex-col items-center px-6 border-x border-white/10">
                  <span className="text-white font-serif text-2xl font-bold">
                      {String(currentPage + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                      de {String(totalPages).padStart(2, '0')}
                  </span>
              </div>

              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`group flex items-center gap-3 text-white/50 hover:text-white transition disabled:opacity-20 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
              >
                  <span className="text-xs font-medium tracking-widest uppercase hidden sm:block">Siguiente</span>
                  <div className="p-3 rounded-full border border-white/10 group-hover:border-accent-500/50 group-hover:bg-accent-500/10 transition">
                    <ChevronRight className="w-5 h-5 group-hover:text-accent-400" />
                  </div>
              </button>
          </div>

       </div>

       <style>{`
        .perspective-2000 { perspective: 2000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .translate-z--2px { transform: translateZ(-2px); }
        .translate-z--4px { transform: translateZ(-4px); }
        .translate-z--8px { transform: translateZ(-8px); }
        .paper-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
        }
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
        .font-handwriting { font-family: 'Caveat', cursive; }
      `}</style>
    </section>
  );
};

export default InsideLook;
