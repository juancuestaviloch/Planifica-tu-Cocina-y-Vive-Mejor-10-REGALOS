
import React from 'react';
import { ArrowLeft, Lock, Eye } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PrivacyPage: React.FC<Props> = ({ onBack }) => {
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
            Volver al Inicio
          </button>
          <span className="font-serif font-bold text-gray-900">Cocina Resuelta</span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Política de Privacidad
            </h1>
            <p className="text-gray-500 text-sm">Tu privacidad es muy importante para nosotros.</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-8 text-justify leading-relaxed">
            
            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">1. Información que recopilamos</h2>
                <p className="text-gray-600 text-sm mb-2">
                    Podemos recopilar información personal que usted nos proporciona voluntariamente cuando:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-sm">
                    <li>Realiza una compra (Nombre, Email, Datos de facturación).</li>
                    <li>Se suscribe a nuestro boletín o gira la ruleta de descuentos (Email).</li>
                    <li>Se pone en contacto con nosotros a través de email o WhatsApp.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">2. Uso de su información</h2>
                <p className="text-gray-600 text-sm">
                    Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-sm">
                    <li>Procesar sus pedidos y entregarle el producto digital.</li>
                    <li>Enviarle confirmaciones de pedido y recibos.</li>
                    <li>Responder a sus consultas de servicio al cliente.</li>
                    <li>Enviarle correos electrónicos promocionales o actualizaciones del producto (puede optar por no recibirlos en cualquier momento).</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">3. Protección de datos y Pagos</h2>
                <p className="text-gray-600 text-sm">
                    Nos tomamos la seguridad muy en serio. <strong>No almacenamos los datos de su tarjeta de crédito ni información bancaria en nuestros servidores.</strong> Todas las transacciones se procesan a través de pasarelas de pago seguras y encriptadas de terceros (como Mercado Pago, PayPal o Stripe), que cumplen con los estándares de seguridad PCI-DSS.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">4. Cookies</h2>
                <p className="text-gray-600 text-sm">
                    Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar el contenido. Al navegar por nuestro sitio, acepta el uso de cookies de acuerdo con esta política.
                </p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">5. Contacto</h2>
                <p className="text-gray-600 text-sm">
                    Si tiene preguntas sobre esta política de privacidad o sobre el manejo de sus datos, puede contactarnos en: <span className="font-bold text-brand-600">tiendasandie@gmail.com</span>
                </p>
            </section>

        </div>

        <div className="mt-8 text-center">
            <button onClick={onBack} className="text-brand-600 font-bold hover:underline">
                Volver a la página principal
            </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
