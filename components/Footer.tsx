import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white font-serif text-2xl font-bold mb-4">Cocina Resuelta</p>
        <p className="mb-8 text-sm">Transformando vidas a través de la cocina organizada y saludable.</p>
        
        <div className="flex justify-center gap-6 text-sm mb-8">
          <a href="#" className="hover:text-white transition">Términos de Uso</a>
          <a href="#" className="hover:text-white transition">Política de Privacidad</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </div>
        
        <div className="max-w-2xl mx-auto border-t border-gray-800 pt-8 mt-8">
           <p className="text-[10px] leading-relaxed opacity-40 mb-4 text-justify">
             DESCARGO DE RESPONSABILIDAD: Los resultados (incluyendo los resultados de salud, pérdida de peso, ahorro de tiempo y dinero) mencionados en esta página son testimonios personales y no garantizan resultados idénticos para todas las personas. El éxito en la implementación de este sistema depende de la dedicación, el seguimiento de las instrucciones y el contexto personal de cada individuo.
           </p>
           <p className="text-[10px] leading-relaxed opacity-40">
             Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio no está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
           </p>
        </div>

        <p className="text-xs opacity-50 mt-8">
          &copy; {new Date().getFullYear()} Cocina Resuelta. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;