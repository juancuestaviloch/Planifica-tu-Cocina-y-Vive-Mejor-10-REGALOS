
import React from 'react';
import { ChefHat, Heart, Sparkles } from 'lucide-react';

const Author: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-5/12 relative group">
                <div className="absolute inset-0 bg-brand-200 transform translate-x-3 translate-y-3 rounded-full opacity-70"></div>
                
                {/* Author Illustration */}
                <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-b from-brand-50 to-white rounded-full shadow-2xl border-4 border-brand-100 flex flex-col items-center justify-center overflow-hidden">
                    
                    {/* Background Elements */}
                    <div className="absolute top-10 right-10 opacity-20 animate-pulse">
                        <Sparkles className="w-12 h-12 text-accent-400" />
                    </div>
                    <div className="absolute bottom-20 left-10 opacity-20 animate-pulse delay-700">
                        <Heart className="w-8 h-8 text-red-400 fill-current" />
                    </div>

                    {/* Avatar Composition */}
                    <div className="relative z-10 flex flex-col items-center w-full px-8">
                        <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-6 group-hover:scale-105 transition duration-500 overflow-hidden relative">
                             {/* Real Man Photo for Ramón */}
                            <img 
                                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800" 
                                alt="Ramón - Creador de Cocina Resuelta" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Floating Chef Hat */}
                        <div className="absolute top-0 right-12 bg-white p-3 rounded-full shadow-lg animate-bounce z-20">
                            <ChefHat className="w-10 h-10 text-brand-600" />
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-brand-50 to-transparent"></div>
                </div>

                {/* Decorative label */}
                <div className="absolute bottom-10 -right-4 bg-white px-6 py-2 rounded-full shadow-xl border border-gray-100 transform rotate-3 z-20">
                    <span className="font-serif font-bold text-gray-800">Tu Mentor</span>
                </div>
            </div>

            <div className="md:w-7/12">
                <span className="text-accent-600 font-bold tracking-widest uppercase text-sm">Sobre el Autor</span>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 mt-2">Hola, soy Ramón <br/><span className="text-brand-600 text-2xl block mt-1 font-sans font-normal">Creador de Cocina Resuelta</span></h2>
                
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Durante años fui esa persona que llegaba a las 8 de la noche a casa, abría la heladera y sentía ganas de llorar. Vivía a base de ensaladas aburridas, latas de atún y comida comprada, gastando dinero que no tenía y sintiéndome sin energía.
                    </p>
                    <p>
                        Sabía que tenía que comer mejor, pero <strong>no tenía tiempo</strong>.
                    </p>
                    <p>
                        Decidí que tenía que haber otra forma. No soy chef de alta cocina, soy una persona real con horarios reales que necesitaba una solución real. Creé este método probando, fallando y perfeccionando técnicas de conservación y cocción eficiente en mi propia cocina.
                    </p>
                    <p className="font-bold text-brand-800 bg-brand-50 p-4 rounded-lg border-l-4 border-brand-500">
                        "Hoy comparto este sistema contigo no solo para que comas rico, sino para que recuperes el recurso más valioso que tienes: tu tiempo."
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
