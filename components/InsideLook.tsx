
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MousePointerClick } from 'lucide-react';

const BOOK_PAGES = [
  // COVER
  {
    id: 0,
    type: 'cover',
    content: (
      <div className="h-full w-full bg-[#eaddcf] flex flex-col items-center justify-center p-2 border-l-8 border-[#c7b299] relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')]"></div>
        {/* Binding stitching effect */}
        <div className="absolute left-1 top-0 bottom-0 w-0.5 border-l border-dashed border-gray-400/30"></div>
        
        <div className="h-full w-full border-2 border-[#8b4513]/20 p-4 flex flex-col items-center justify-between relative z-10 bg-[#faeadd]">
            <div className="text-center mt-4">
                <span className="text-brand-800 font-bold tracking-[0.3em] text-[10px] uppercase mb-1 block">Guía Práctica</span>
                <div className="w-8 h-0.5 bg-accent-500 mx-auto mb-4"></div>
            </div>

            <div className="text-center">
                <h1 className="font-serif text-3xl text-brand-900 font-black leading-[0.9] mb-2 tracking-tight">
                    COCINÁ<br/><span className="text-accent-600">UNA VEZ</span>
                </h1>
                <h2 className="font-sans text-brand-800 text-sm font-bold uppercase tracking-wider">
                    Comé sano toda la semana
                </h2>
            </div>
            
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl my-2">
                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=400" alt="Meal Prep" className="w-full h-full object-cover hover:scale-110 transition duration-700" />
            </div>

            <div className="text-center mb-4">
                 <p className="text-[9px] text-gray-500 font-medium uppercase tracking-widest">Edición 2025</p>
                 <p className="text-brand-900 font-serif font-bold italic text-xs mt-1">Redescubriéndote</p>
            </div>
        </div>
      </div>
    )
  },
  // PAGE 1: INDICE
  {
    id: 1,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fdfbf7] p-6 text-gray-800 text-xs leading-relaxed relative paper-texture">
        {/* Spine Shadow */}
        <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10"></div>
        
        <div className="relative z-20 pl-2">
            <h3 className="font-serif font-bold text-2xl text-brand-900 mb-6 border-b-2 border-accent-200 pb-2 inline-block">ÍNDICE</h3>
            
            <div className="space-y-5 font-serif">
            <div className="group cursor-pointer">
                <div className="flex justify-between items-baseline border-b border-gray-200 border-dotted pb-1 mb-1">
                    <h4 className="font-bold text-brand-700 uppercase text-[10px] tracking-wider">Introducción</h4>
                    <span className="text-gray-400 text-[10px]">03</span>
                </div>
                <ul className="text-[10px] text-gray-600 pl-2 space-y-1">
                <li>• Bienvenida y filosofía</li>
                <li>• El enemigo invisible: fatiga de decisión</li>
                </ul>
            </div>
            
            <div className="group cursor-pointer">
                <div className="flex justify-between items-baseline border-b border-gray-200 border-dotted pb-1 mb-1">
                    <h4 className="font-bold text-brand-700 uppercase text-[10px] tracking-wider">Parte I: Los Pilares</h4>
                    <span className="text-gray-400 text-[10px]">08</span>
                </div>
                <ul className="text-[10px] text-gray-600 pl-2 space-y-1">
                <li>• Plato saludable (Harvard)</li>
                <li>• Mitos que sabotean tu cocina</li>
                </ul>
            </div>

            <div className="group cursor-pointer">
                <div className="flex justify-between items-baseline border-b border-gray-200 border-dotted pb-1 mb-1">
                    <h4 className="font-bold text-brand-700 uppercase text-[10px] tracking-wider">Parte II: Planificación</h4>
                    <span className="text-gray-400 text-[10px]">14</span>
                </div>
                <ul className="text-[10px] text-gray-600 pl-2 space-y-1">
                <li>• Organización Semanal vs Mensual</li>
                <li>• Plantillas de Menú</li>
                </ul>
            </div>
            </div>
        </div>
        <div className="absolute bottom-4 right-5 text-gray-400 font-serif font-bold text-xs">2</div>
      </div>
    )
  },
  // PAGE 2: BIENVENIDA
  {
    id: 2,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fdfbf7] p-7 text-gray-800 flex flex-col relative paper-texture">
         {/* Spine Shadow */}
         <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-black/10 to-transparent pointer-events-none z-10"></div>

         <div className="relative z-20">
            <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl text-accent-500 font-serif font-black opacity-20 absolute -left-2 -top-2">01</span>
                <h3 className="font-serif font-bold text-xl text-brand-900 relative pl-6">Bienvenida</h3>
            </div>
            
            <div className="space-y-4 text-[11px] leading-5 font-serif text-gray-700 text-justify">
                <p>
                <span className="float-left text-3xl font-black text-brand-500 mr-1 mt-[-4px]">B</span>ienvenida a <em>Cociná una vez, comé sano toda la semana</em>. Este libro es mucho más que una recopilación de recetas: es una herramienta para transformar tu vida.
                </p>
                
                <p>
                Si estás leyendo estas líneas, probablemente sientas que tu rutina diaria te deja poco espacio para pensar en comida saludable. Tal vez terminás comiendo lo primero que encontrás en la heladera.
                </p>
            </div>
            
            <div className="mt-6 bg-[#fff8f0] p-4 rounded-tl-xl rounded-br-xl border-l-4 border-accent-400 shadow-sm relative">
                <span className="absolute -top-2 -left-2 text-2xl">📌</span>
                <p className="text-[10px] text-gray-600 font-medium italic pl-2">
                "La buena noticia es que no estás sola. Y aún mejor: existe una forma simple, práctica y realista de lograrlo."
                </p>
            </div>
         </div>
         <div className="absolute bottom-4 left-5 text-gray-400 font-serif font-bold text-xs">3</div>
      </div>
    )
  },
  // PAGE 3: ESTRATEGIA
  {
    id: 3,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fdfbf7] p-7 text-gray-800 relative paper-texture">
        {/* Spine Shadow */}
        <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/5 to-transparent pointer-events-none z-10"></div>
        
        <div className="relative z-20">
            <h3 className="font-serif font-bold text-lg leading-tight text-brand-900 mb-4 border-l-4 border-brand-500 pl-3">
                Comer bien no es difícil, pero sí necesita estrategia
            </h3>

            <div className="float-right w-28 h-28 ml-3 mb-2 p-1 bg-white shadow rotate-2 transform">
                <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=300" alt="Planning" className="w-full h-full object-cover grayscale hover:grayscale-0 transition" />
            </div>

            <p className="text-[11px] text-gray-700 mb-3 leading-5 text-justify font-serif">
            La mayoría de las personas no se alimentan mal por falta de información, sino por <strong className="bg-yellow-100 px-1">falta de organización</strong>.
            </p>
            
            <p className="text-[11px] text-gray-700 mb-4 leading-5 text-justify font-serif">
            Comer saludable no es sinónimo de cocinar todos los días, ni de vivir esclava de la cocina.
            </p>

            <div className="clear-both mt-6 border-t border-b border-gray-200 py-3 text-center">
                <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1">Dato Científico</p>
                <p className="text-[10px] text-brand-900 font-medium italic">
                "Planificar reduce el estrés, el gasto y los malos hábitos." (J. Ducrot et al., 2017)
                </p>
            </div>
        </div>
         <div className="absolute bottom-4 right-5 text-gray-400 font-serif font-bold text-xs">4</div>
      </div>
    )
  },
  // PAGE 4: EL ENEMIGO
  {
    id: 4,
    type: 'text',
    content: (
      <div className="h-full w-full bg-[#fdfbf7] p-6 text-gray-800 flex flex-col items-center justify-center text-center relative overflow-hidden paper-texture">
         {/* Spine Shadow */}
         <div className="absolute top-0 left-0 w-8 h-full bg-gradient-to-r from-black/5 to-transparent pointer-events-none z-10"></div>

         <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-100 rounded-full mix-blend-multiply filter blur-2xl opacity-60"></div>
         
         <div className="relative z-20">
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-8">
            El gran enemigo invisible:<br/> La fatiga de decidir
            </h3>
            
            <div className="transform hover:scale-110 transition duration-500 cursor-help relative group mb-8">
                <span className="text-6xl font-black text-brand-900 block relative z-10">200+</span>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-gray-100 font-black -z-10">?</span>
                <span className="text-[10px] font-bold text-accent-600 uppercase tracking-[0.2em] bg-white px-2 relative z-10">Decisiones diarias</span>
            </div>
            
            <p className="text-[11px] text-gray-600 leading-5 mb-6 max-w-[80%] mx-auto font-serif">
            Cuando llega la noche y ya tomaste cientos de decisiones en tu trabajo y casa, tu cerebro dice "basta".
            </p>

            <div className="bg-red-50 border border-red-100 p-3 rounded-lg w-full shadow-sm">
                <p className="text-[10px] font-bold text-red-800">⚠ Resultado: Pedidos, Delivery y Comida Rápida.</p>
            </div>
         </div>
         <div className="absolute bottom-4 left-5 text-gray-400 font-serif font-bold text-xs">5</div>
      </div>
    )
  },
   // PAGE 5: FINAL CTA
   {
    id: 5,
    type: 'cta',
    content: (
      <div className="h-full w-full bg-brand-900 flex flex-col items-center justify-center p-6 text-center relative shadow-inner">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         {/* Spine Shadow for Cover */}
         <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none z-10"></div>
         
         <div className="relative z-20 border-4 border-brand-700 p-6 rounded-lg bg-brand-800/50 backdrop-blur-sm">
            <h3 className="text-white font-serif text-2xl font-bold mb-4 leading-tight">
            ¿Querés seguir leyendo?
            </h3>
            
            <div className="w-16 h-1 bg-accent-500 mx-auto mb-6"></div>

            <p className="text-brand-100 text-xs mb-8 leading-relaxed font-light">
            Accedé a las <strong>140 páginas</strong> restantes, las plantillas, los menús y los 10 bonos exclusivos.
            </p>
            
            <button 
                onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
                className="bg-accent-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-accent-400 transition transform hover:-translate-y-1 text-xs tracking-wider uppercase"
            >
            Descargar Completo
            </button>
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
    <section className="py-24 bg-[#2d3748] overflow-hidden min-h-[800px] flex flex-col items-center justify-center relative">
       
       {/* Background Elements (Wood Texture Illusion) */}
       <div className="absolute inset-0 bg-[#1a202c]"></div>
       <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
       <div className="absolute inset-0 bg-gradient-to-b from-[#1a202c] via-transparent to-[#1a202c] opacity-80"></div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
          
          <div className="text-center mb-12">
             <span className="text-accent-400 font-bold tracking-widest uppercase text-xs">Experiencia Interactiva</span>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3">
                Espiá el contenido por dentro
             </h2>
             <p className="text-gray-400 text-sm mt-2">Hacé click en las páginas para leer</p>
          </div>

          {/* BOOK CONTAINER */}
          <div className="relative w-[320px] h-[460px] sm:w-[380px] sm:h-[540px] perspective-2000 mx-auto mb-12">
             
             {/* Book Shadow on Table */}
             <div className="absolute bottom-[-20px] left-[5%] w-[90%] h-[20px] bg-black/40 blur-xl rounded-[50%] z-0 transition-all duration-500"
                  style={{ transform: `scaleX(${currentPage > 0 ? 1.8 : 1})` }}></div>

             {/* Pages Stack */}
             <div className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-out">
                
                {BOOK_PAGES.map((page, index) => {
                   const isFlipped = index < currentPage;
                   const zIndex = isFlipped ? index : totalPages - index;
                   const rotation = isFlipped ? -180 : 0;
                   
                   return (
                      <div 
                        key={page.id}
                        className={`absolute top-0 left-0 w-full h-full origin-left transition-all duration-1000 ease-in-out cursor-pointer rounded-r-md bg-[#fdfbf7]`}
                        style={{ 
                            transform: `rotateY(${rotation}deg)`,
                            zIndex: zIndex,
                            transformStyle: 'preserve-3d',
                            // Improved shadow logic for depth perception
                            boxShadow: isFlipped 
                                ? '5px 0 15px rgba(0,0,0,0.1)' // Shadow on the left when flipped
                                : '-1px 0 2px rgba(0,0,0,0.1), 5px 5px 15px rgba(0,0,0,0.2)' // Shadow on the right when closed
                        }}
                        onClick={() => {
                            if (isFlipped) {
                                setCurrentPage(index); 
                            } else {
                                setCurrentPage(index + 1); 
                            }
                        }}
                      >
                         {/* FRONT OF PAGE */}
                         <div className="absolute inset-0 w-full h-full backface-hidden rounded-r-md overflow-hidden bg-[#fdfbf7]">
                            {/* Subtle grain texture overlay */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>
                            {page.content}
                         </div>

                         {/* BACK OF PAGE (The "Paper" back side) */}
                         <div 
                            className="absolute inset-0 w-full h-full backface-hidden bg-[#f7f5f0] rounded-l-md overflow-hidden flex items-center justify-center transform rotate-y-180 border-r border-gray-200"
                            style={{ transform: 'rotateY(180deg)' }}
                         >
                             {/* Realistic shadow gradient near spine on back side */}
                             <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
                             
                             {/* See-through text effect (flipped) */}
                             <div className="opacity-5 transform scale-x-[-1] blur-[0.5px]">
                                 {page.content}
                             </div>
                         </div>
                      </div>
                   );
                })}

                {/* Fake Back Cover (Static base) to give volume */}
                <div className="absolute top-0 left-0 w-full h-full bg-white rounded-r-md transform translate-z--2px border border-gray-300" style={{ zIndex: -1 }}></div>
                <div className="absolute top-1 left-0 w-full h-full bg-white rounded-r-md transform translate-z--4px border border-gray-300" style={{ zIndex: -2 }}></div>
                <div className="absolute top-2 left-0 w-full h-full bg-brand-900 rounded-r-md transform translate-z--6px shadow-2xl" style={{ zIndex: -3 }}></div>
                
                {/* Book Side Spine Effect (Visible when book is closed/semi-open) */}
                <div className={`absolute top-0 left-0 w-8 h-full bg-brand-800 transform -translate-x-full origin-right transition-opacity duration-500 rounded-l-sm flex flex-col justify-center items-center shadow-lg ${currentPage > 0 ? 'opacity-0' : 'opacity-100'}`}>
                    <span className="text-white/30 text-[8px] uppercase tracking-widest rotate-[-90deg] whitespace-nowrap w-40 text-center">Cocina Resuelta</span>
                </div>

             </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6 mt-8 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
              <button 
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`p-2 rounded-full hover:bg-white/10 text-white transition disabled:opacity-30 ${currentPage === 0 ? 'cursor-not-allowed' : ''}`}
              >
                  <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="text-white/70 text-xs font-mono tracking-wider">
                  PÁGINA {currentPage} / {totalPages}
              </div>

              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full hover:bg-white/10 text-white transition disabled:opacity-30 ${currentPage === totalPages ? 'cursor-not-allowed' : ''}`}
              >
                  <ChevronRight className="w-5 h-5" />
              </button>
          </div>

       </div>

       <style>{`
        .perspective-2000 {
            perspective: 2000px;
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
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db; 
          border-radius: 10px;
        }
        /* Optional: Paper Texture class if needed for overrides */
        .paper-texture {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default InsideLook;
