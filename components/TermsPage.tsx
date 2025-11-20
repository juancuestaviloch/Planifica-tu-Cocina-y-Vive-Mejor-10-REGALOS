
import React from 'react';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const TermsPage: React.FC<Props> = ({ onBack }) => {
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
            <div className="inline-flex items-center justify-center p-3 bg-brand-100 rounded-full mb-4">
                <FileText className="w-8 h-8 text-brand-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Términos y Condiciones de Uso
            </h1>
            <p className="text-gray-500 text-sm">Última actualización: Marzo 2025</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 space-y-8 text-justify leading-relaxed">
            
            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">1. Introducción</h2>
                <p className="text-gray-600 text-sm">
                    Bienvenido a "Cocina Resuelta". Al acceder a nuestro sitio web y adquirir nuestros productos digitales (eBooks, cursos, guías), usted acepta cumplir con estos términos de servicio, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">2. Licencia de Uso y Propiedad Intelectual</h2>
                <p className="text-gray-600 text-sm mb-2">
                    El contenido adquirido (Sistema Cocina Resuelta y sus bonos) está protegido por leyes de derechos de autor y propiedad intelectual. Se concede permiso para descargar una copia de los materiales para <strong>uso personal, no comercial y transitorio</strong> solamente.
                </p>
                <p className="text-gray-600 text-sm font-bold">Bajo esta licencia, usted NO puede:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-sm">
                    <li>Modificar o copiar los materiales.</li>
                    <li>Usar los materiales para cualquier propósito comercial o para cualquier exhibición pública (comercial o no comercial).</li>
                    <li>Compartir, revender o distribuir los archivos PDF o accesos a terceros.</li>
                    <li>Eliminar cualquier derecho de autor u otras notaciones de propiedad de los materiales.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">3. Política de Reembolsos</h2>
                <p className="text-gray-600 text-sm">
                    Ofrecemos una <strong>Garantía de Satisfacción de 7 días</strong>. Si por alguna razón no está satisfecho con el producto, puede solicitar un reembolso completo dentro de los 7 días posteriores a la compra enviando un correo a <span className="font-bold text-brand-600">tiendasandie@gmail.com</span>. El reembolso se procesará a través del mismo método de pago utilizado.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">4. Descargo de Responsabilidad (Disclaimer)</h2>
                <p className="text-gray-600 text-sm">
                    Los materiales en el sitio web de Cocina Resuelta se proporcionan "tal cual". No ofrecemos garantías, expresas o implícitas, sobre resultados específicos de salud o financieros. Los resultados pueden variar de una persona a otra dependiendo de su dedicación y aplicación del sistema. Este producto no sustituye el consejo médico profesional.
                </p>
            </section>

             <section>
                <h2 className="text-xl font-bold text-brand-800 mb-3">5. Modificaciones</h2>
                <p className="text-gray-600 text-sm">
                    Cocina Resuelta puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar obligado por la versión actual de estos términos de servicio.
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

export default TermsPage;
