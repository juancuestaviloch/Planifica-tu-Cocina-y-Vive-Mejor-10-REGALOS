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
        
        <p className="text-xs opacity-50">
          &copy; {new Date().getFullYear()} Redescubriendote. Todos los derechos reservados. 
          Este sitio no es parte del sitio web de Facebook o Facebook Inc. 
          Además, este sitio no está respaldado por Facebook de ninguna manera.
        </p>
      </div>
    </footer>
  );
};

export default Footer;