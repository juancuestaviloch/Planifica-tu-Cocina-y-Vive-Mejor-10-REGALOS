import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { MAIN_PRODUCT, BONUSES, FAQS, MODULES, PAIN_POINTS } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy Clara, tu asistente de Cocina Resuelta. ¿Tenés alguna duda sobre el recetario o el método de Cocina en Bloque? ¡Preguntame lo que quieras!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Vite replaces process.env.API_KEY with the string literal at build time.
      // Ensure the define in vite.config.ts matches this exactly.
      const apiKey = process.env.API_KEY;
      
      if (!apiKey || apiKey.includes("your_api_key_here")) {
        throw new Error("Falta la API Key. Verificá la configuración en vite.config.ts");
      }

      const ai = new GoogleGenAI({ apiKey: apiKey });
      
      // Construct context from constants to make the AI "Product Aware"
      const productContext = JSON.stringify({
        product: MAIN_PRODUCT,
        bonuses: BONUSES,
        modules: MODULES,
        faqs: FAQS,
        painPoints: PAIN_POINTS
      });

      const systemInstruction = `
        Eres Clara, una asistente virtual experta, súper cálida y persuasiva para el producto digital "Cocina Resuelta".
        
        TU PERFIL:
        - Sos argentina, hablas con "vos", usas expresiones como "che", "mirá", "te cuento", "olvidate", "dale", "recontra".
        - Sos como esa amiga canchera que te pasa la data justa para solucionarte la vida.
        - No sos un robot frío, tenés onda.
        - Usas el término "Cocina en Bloque" o "Organización Semanal" en vez de "Batch Cooking" (o si usas Batch Cooking, aclarás que es cocinar todo de una).
        
        TU OBJETIVO:
        Sacarle las dudas a la usuaria y motivarla a que compre el eBook de Organización Semanal para que deje de sufrir con la cocina.
        
        CONTEXTO DEL PRODUCTO (Usa esta info):
        ${productContext}
        
        REGLAS DE COMPORTAMIENTO:
        1. Empatía total: Entendés que llegar de laburar y cocinar es un perno.
        2. Respuestas cortitas y al pie (máximo 3-4 oraciones).
        3. Beneficios: Enfocate en que va a tener tiempo libre, va a ahorrar plata en el súper y va a comer rico.
        4. Urgencia tranqui: Si preguntan precio, recordá que la oferta vuela.
        5. Cierre: Siempre tirale un centro para que compre, onda "¿Te animás a probar? Tenés garantía, así que cero riesgo".
        
        SI NO SABES LA RESPUESTA:
        Decile "Sabés que esa es muy buena pregunta...", y llevá el tema para el lado de la organización y el ahorro de tiempo.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: {
          parts: [{ text: userMessage }]
        },
        config: {
          systemInstruction: { parts: [{ text: systemInstruction }] },
        }
      });

      // Check if the response has text.
      // Sometimes safety filters block the response, resulting in no text.
      let aiText = "Uy, se me cortó internet un segundo. ¿Me repetís?";
      
      if (response.candidates && response.candidates.length > 0) {
         // Check finish reason
         const candidate = response.candidates[0];
         if (candidate.finishReason === 'STOP') {
             aiText = response.text || aiText;
         } else if (candidate.finishReason === 'SAFETY') {
             aiText = "Perdoná, no puedo responder a eso por políticas de seguridad. ¿Hablamos del recetario?";
         } else {
             aiText = response.text || aiText;
         }
      }

      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("Error detallado de IA:", error);
      let errorMsg = "Che, estoy teniendo un problemita de conexión. Bancame un cachito e intentá de nuevo.";
      
      if (error instanceof Error) {
        if (error.message.includes('403')) {
           errorMsg = "Parece que hay un problema de permisos con la clave (Error 403).";
        } else if (error.message.includes('404')) {
           errorMsg = "No encuentro el modelo de inteligencia artificial (Error 404).";
        } else if (error.message.includes('API Key')) {
            errorMsg = "Falta configurar la clave de API.";
        }
      }
      
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-[calc(100vw-2rem)] sm:w-[350px] h-[500px] flex flex-col mb-4 transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in mr-0 sm:mr-0">
          {/* Header */}
          <div className="bg-brand-600 p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Asistente Cocina Resuelta</h3>
                <p className="text-brand-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  En línea
                </p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg border border-gray-200 rounded-bl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu duda aquí..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-brand-600 text-white p-2 rounded-full hover:bg-brand-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className="bg-accent-500 hover:bg-accent-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat de ayuda"
      >
        {isOpen ? (
            <X className="w-6 h-6" />
        ) : (
            <MessageCircle className="w-6 h-6" />
        )}
        {!isOpen && (
             <span className="absolute right-12 bg-white text-gray-800 text-xs font-bold px-3 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ¿Tenés dudas?
             </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;