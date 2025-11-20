
import React from 'react';
import { ArrowLeft, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ContactPage: React.FC<Props> = ({ onBack }) => {
  const waNumber = "5492236885623";
  const email = "tiendasandie@gmail.com";
  const waLink = `https://wa.me/${waNumber}?text=Hola,%20tengo%20una%20consulta%20sobre%20el%20sistema%20Cocina%20Resuelta`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand-600 hover:text-brand-800 font-bold transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>
          <span className="font-serif font-bold text-gray-900">Cocina Resuelta</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Centro de Ayuda y Contacto
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
                ¿Tenés alguna duda antes de comprar o necesitás ayuda con tu pedido? Estamos acá para ayudarte.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            
            {/* WhatsApp Card */}
            <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition hover:-translate-y-1 group text-center flex flex-col items-center"
            >
                <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                <p className="text-gray-500 text-sm mb-6">
                    La forma más rápida de contactarnos. Respondemos consultas y dudas al instante.
                </p>
                <span className="text-green-600 font-bold border border-green-200 bg-green-50 px-6 py-2 rounded-full">
                    Chatear ahora
                </span>
            </a>

            {/* Email Card */}
            <a 
                href={`mailto:${email}`}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition hover:-translate-y-1 group text-center flex flex-col items-center"
            >
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:scale-110 transition">
                    <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Correo Electrónico</h3>
                <p className="text-gray-500 text-sm mb-6">
                    Para soporte técnico, reembolsos o consultas detalladas.
                </p>
                <span className="text-blue-600 font-bold border border-blue-200 bg-blue-50 px-6 py-2 rounded-full break-all">
                    {email}
                </span>
            </a>

        </div>

        <div className="mt-12 bg-brand-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-accent-400" /> Horarios de Atención
                </h4>
                <p className="text-brand-200 text-sm">Lunes a Viernes de 9:00 a 18:00 hs.</p>
                <p className="text-brand-200 text-sm">Sábados de 10:00 a 14:00 hs.</p>
            </div>
            <div className="md:border-l md:border-brand-700 md:pl-8">
                 <p className="text-sm opacity-80 italic">
                    "Nuestro objetivo es que tengas la mejor experiencia posible. Si escribís fuera de horario, te responderemos a primera hora del día siguiente."
                 </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
