
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Hand, MousePointerClick } from 'lucide-react';

const BOOK_PAGES = [
  // COVER
  {
    id: 0,
    type: 'cover',
    content: (
      <div className="h-full w-full bg-brand-100 flex flex-col items-center justify-center p-6 border-4 border-brand-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="relative z-10 text-center">
           <span className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-2 block">Sistema Meal Prep</span>
           <h1 className="font-serif text-3xl text-brand-900 font-black leading-tight mb-4">
             COCINÁ UNA VEZ,<br/>COMÉ SANO TODA LA SEMANA
           </h1>
           <div className="w-16 h-1 bg-accent-500 mx-auto mb-4"></div>
           <p className="text-brand-800 text-sm font-medium">"Recetas fáciles, ricas y saludables para organizar tu semana sin estrés"</p>
           
           <div className="mt-8 w-full h-32 rounded-lg overflow-hidden shadow-lg border-2 border-white">
              <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400" alt="Meal Prep" className="w-full h-full object-cover" />
           </div>
        </div>
      </div>
    )
  },
  // PAGE 1: INDICE
  {
    id: 1,
    type: 'text',
    title: "ÍNDICE",
    content: (
      <div className="h-full w-full bg-white p-6 text-gray-800 text-xs leading-relaxed overflow-y-auto custom-scrollbar">
        <h3 className="font-serif font-bold text-xl text-brand-900 mb-4 border-b border-brand-200 pb-2">ÍNDICE</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-accent-600 mb-1">INTRODUCCIÓN</h4>
            <ul className="space-y-1 pl-2 text-gray-600">
              <li>1. Bienvenida: por qué este libro puede cambiar tu rutina.</li>
              <li>2. Comer bien no es difícil, pero sí necesita estrategia.</li>
              <li>3. El gran enemigo invisible: el desgaste de decidir.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-accent-600 mb-1">PARTE I: LOS PILARES</h4>
            <ul className="space-y-1 pl-2 text-gray-600">
              <li>• Qué significa comer saludable hoy</li>
              <li>• Mitos comunes que sabotean tu cocina</li>
              <li>• Plato saludable (Harvard) y equilibrio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-accent-600 mb-1">PARTE II: PLANIFICAR</h4>
            <ul className="space-y-1 pl-2 text-gray-600">
              <li>• Organización como estrategia de salud</li>
              <li>• Planificación semanal vs mensual</li>
              <li>• Plantillas y ejemplos reales</li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-accent-600 mb-1">PARTE III: COCINAR (BATCH COOKING)</h4>
             <p className="italic text-gray-500">... y mucho más</p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 text-gray-400 font-mono">2</div>
      </div>
    )
  },
  // PAGE 2: BIENVENIDA
  {
    id: 2,
    type: 'text',
    content: (
      <div className="h-full w-full bg-white p-6 text-gray-800 flex flex-col">
         <div className="flex items-center gap-2 mb-4 text-brand-600">
            <div className="bg-brand-100 p-1 rounded-full">📍</div>
            <h3 className="font-serif font-bold text-lg">1. Bienvenida</h3>
         </div>
         
         <p className="text-xs text-gray-600 mb-4 leading-relaxed text-justify">
           Bienvenida a <strong>Cociná una vez, comé sano toda la semana</strong>. Este libro es mucho más que una recopilación de recetas o una guía de cocina: es una herramienta para transformar tu manera de alimentarte y, con ello, tu salud, tu tiempo y tu bienestar general.
         </p>
         
         <p className="text-xs text-gray-600 mb-4 leading-relaxed text-justify">
           Si estás leyendo estas líneas, probablemente sientas que tu rutina diaria te deja poco espacio para pensar en comida saludable. Tal vez terminás comiendo lo primero que encontrás en la heladera...
         </p>
         
         <div className="mt-auto bg-orange-50 p-3 rounded-lg border border-orange-100">
            <p className="text-[10px] text-orange-800 font-medium italic">
              "La buena noticia es que no estás sola. Y aún mejor: existe una forma simple, práctica y realista de lograrlo."
            </p>
         </div>
         <div className="absolute bottom-4 left-4 text-gray-400 font-mono">3</div>
      </div>
    )
  },
  // PAGE 3: ESTRATEGIA
  {
    id: 3,
    type: 'text',
    content: (
      <div className="h-full w-full bg-white p-6 text-gray-800">
        <div className="flex items-center gap-2 mb-4 text-brand-600">
            <div className="bg-brand-100 p-1 rounded-full">📍</div>
            <h3 className="font-serif font-bold text-lg leading-tight">2. Comer bien no es difícil, pero sí necesita estrategia</h3>
         </div>

         <div className="float-right w-24 h-24 ml-2 mb-2 rounded-lg overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=200" alt="Escribiendo" className="w-full h-full object-cover" />
         </div>

         <p className="text-xs text-gray-600 mb-3 leading-relaxed text-justify">
           La mayoría de las personas no se alimentan mal por falta de información, sino por falta de organización.
         </p>
         
         <p className="text-xs text-gray-600 mb-4 leading-relaxed text-justify">
           Comer saludable no es sinónimo de cocinar todos los días, ni de vivir esclava de la cocina. Comer saludable es una decisión que se hace más fácil cuando se convierte en hábito.
         </p>

         <div className="bg-brand-50 p-3 rounded border-l-4 border-brand-500 mt-4">
            <p className="text-[10px] text-brand-900 font-serif font-bold">
              "Planificar lo que comemos no solo mejora la dieta, sino que también reduce el estrés." (J. Ducrot et al., 2017)
            </p>
         </div>
         <div className="absolute bottom-4 right-4 text-gray-400 font-mono">4</div>
      </div>
    )
  },
  // PAGE 4: EL ENEMIGO
  {
    id: 4,
    type: 'text',
    content: (
      <div className="h-full w-full bg-white p-6 text-gray-800 flex flex-col items-center justify-center text-center relative overflow-hidden">
         <div className="absolute -top-10 -left-10 w-32 h-32 bg-red-50 rounded-full mix-blend-multiply filter blur-xl"></div>
         
         <h3 className="font-serif font-bold text-lg text-gray-900 mb-6 relative z-10">
           3. El gran enemigo invisible: el desgaste de decidir
         </h3>
         
         <div className="transform scale-110 mb-6">
             <span className="text-5xl font-black text-brand-600 block">200+</span>
             <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Decisiones diarias de comida</span>
         </div>
         
         <p className="text-xs text-gray-600 leading-relaxed mb-4">
           La llamada fatiga de decisiones es real. Cuando llega la noche y ya tomaste cientos de decisiones, tu cerebro dice basta.
         </p>

         <div className="bg-yellow-100 p-2 rounded w-full">
            <p className="text-[10px] font-bold text-yellow-800">⚠ ¿El resultado? Pedidos, comida rápida o improvisaciones.</p>
         </div>
         <div className="absolute bottom-4 left-4 text-gray-400 font-mono">5</div>
      </div>
    )
  },
   // PAGE 5: FINAL CTA
   {
    id: 5,
    type: 'cta',
    content: (
      <div className="h-full w-full bg-brand-900 flex flex-col items-center justify-center p-6 text-center relative">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
         
         <h3 className="text-white font-serif text-xl font-bold mb-4 relative z-10">
           ¿Querés leer las otras 140 páginas?
         </h3>
         
         <p className="text-brand-100 text-xs mb-6 relative z-10">
           Accedé al método completo, las plantillas, las recetas y los 10 bonos de regalo.
         </p>
         
         <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
            className="bg-accent-500 text-white font-bold py-3 px-6 rounded-full shadow-xl hover:bg-accent-600 transition transform hover:-translate-y-1 text-sm relative z-10"
         >
           QUIERO EL PACK COMPLETO
         </button>
         
         <p className="text-[10px] text-brand-200 mt-4 opacity-60">Oferta válida solo por hoy</p>
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
    <section className="py-20 bg-slate-900 overflow-hidden min-h-[800px] flex flex-col items-center justify-center relative">
       
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
       <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          
          <div className="text-center mb-10">
             <span className="text-accent-400 font-bold tracking-widest uppercase text-sm">Mirá por dentro</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
                Hacé click para hojear el libro
             </h2>
             <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm animate-pulse">
                <MousePointerClick className="w-4 h-4" />
                <span>Tocá las páginas para pasar</span>
             </div>
          </div>

          {/* BOOK CONTAINER */}
          <div className="relative w-[300px] h-[420px] sm:w-[360px] sm:h-[500px] perspective-1500 mx-auto my-10">
             
             {/* Pages Stack */}
             <div className="relative w-full h-full transform-style-3d transition-transform duration-500">
                
                {BOOK_PAGES.map((page, index) => {
                   // Logic for Z-Index and Flipping
                   // If page index <= currentPage, it's on the left (or turning left)
                   // If page index > currentPage, it's on the right stack
                   
                   const isFlipped = index < currentPage;
                   const zIndex = isFlipped ? index : totalPages - index;
                   
                   // Style logic
                   const rotation = isFlipped ? -180 : 0;
                   
                   return (
                      <div 
                        key={page.id}
                        className={`absolute top-0 left-0 w-full h-full origin-left transition-transform duration-1000 ease-in-out cursor-pointer shadow-xl rounded-r-md border-l border-gray-200 bg-white`}
                        style={{ 
                            transform: `rotateY(${rotation}deg)`,
                            zIndex: zIndex,
                            transformStyle: 'preserve-3d',
                        }}
                        onClick={() => {
                            if (isFlipped) {
                                setCurrentPage(index); // Go back to this page
                            } else {
                                setCurrentPage(index + 1); // Flip this page
                            }
                        }}
                      >
                         {/* FRONT OF PAGE */}
                         <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-r-md overflow-hidden">
                            {/* Gradient shadow near spine */}
                            <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-gray-300/30 to-transparent pointer-events-none z-20"></div>
                            {page.content}
                         </div>

                         {/* BACK OF PAGE (Simulated for effect, or next page content in a real double spread) */}
                         {/* In this single-stack simulation, the back is just a plain paper texture */}
                         <div 
                            className="absolute inset-0 w-full h-full backface-hidden bg-orange-50 rounded-l-md overflow-hidden flex items-center justify-center transform rotate-y-180"
                            style={{ transform: 'rotateY(180deg)' }}
                         >
                             <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-gray-300/30 to-transparent pointer-events-none z-20"></div>
                             <span className="text-brand-900/20 font-serif font-bold text-4xl rotate-180">Cocina Resuelta</span>
                         </div>
                      </div>
                   );
                })}

                {/* Fake Back Cover (Static base) */}
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-r-md shadow-2xl transform translate-z--1px" style={{ zIndex: -1 }}></div>
                {/* Book Side Spine Effect when closed */}
                <div className={`absolute top-0 left-0 w-10 h-full bg-brand-900 transform -translate-x-full origin-right transition-opacity duration-500 rounded-l-sm ${currentPage > 0 ? 'opacity-0' : 'opacity-100'}`}></div>

             </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-8 mt-8">
              <button 
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition disabled:opacity-30 ${currentPage === 0 ? 'cursor-not-allowed' : ''}`}
              >
                  <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="text-white/50 text-sm font-mono">
                  {currentPage} / {totalPages}
              </div>

              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition disabled:opacity-30 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
              >
                  <ChevronRight className="w-6 h-6" />
              </button>
          </div>

       </div>

       <style>{`
        .perspective-1500 {
            perspective: 1500px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
        .backface-hidden {
            backface-visibility: hidden;
        }
        .rotate-y-180 {
            transform: rotateY(180deg);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default InsideLook;
