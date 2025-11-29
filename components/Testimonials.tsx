
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, CheckCircle2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-4">
          Historias de "Cocina Resuelta"
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            No confíes solo en mi palabra. Mirá lo que dicen quienes ya están disfrutando de su tiempo libre.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 relative">
              <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} fill="currentColor" className="w-4 h-4" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-100">
                      <CheckCircle2 className="w-3 h-3" />
                      Compra Verificada
                  </div>
              </div>
              
              <p className="text-gray-700 italic mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-gray-200 pt-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
