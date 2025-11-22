import { BonusItem, Feature, Testimonial, Module, FAQItem } from './types';
import { AlertTriangle, Leaf, Clock, Heart, ShieldCheck, CheckCircle, Star, XCircle } from 'lucide-react';

export const CHECKOUT_URL = "https://sandie5.mitiendanube.com/productos/planifica-tu-cocina-y-vive-mejor-10-regalos/";

export const MAIN_PRODUCT = {
  title: "Sistema Cocina Resuelta",
  subtitle: "El método exacto para cocinar en solo 2 horas lo que comerás en toda la semana, ahorrar miles en el súper y recuperar tu paz mental.",
  price: 18900,
  originalPrice: 158000,
  discount: "88% OFF",
};

export const PAIN_POINTS = [
  {
    title: "El Pánico de las 7 de la tarde",
    description: "Esa sensación de nudo en el estómago cuando cae el sol, estás agotada del laburo, tu familia tiene hambre y no tenés idea de qué cocinar. Terminás cayendo en el delivery caro o fideos con manteca.",
    icon: AlertTriangle
  },
  {
    title: "La Heladera 'Cementerio'",
    description: "Abrís el cajón de las verduras y encontrás esa espinaca que compraste con la mejor intención, ahora convertida en un líquido verde irreconocible. Es plata que tirás directamente a la basura cada semana.",
    icon: Leaf
  },
  {
    title: "El Ciclo del Estrés Infinito",
    description: "Cocinar todos los días, limpiar ollas todos los días, pensar el menú todos los días. Es un trabajo de tiempo completo no remunerado que te roba tiempo de calidad con tus hijos, tu pareja o para vos misma.",
    icon: Clock
  }
];

export const MODULES: Module[] = [
  {
    title: "Módulo 1: La Estrategia de Cocina en Bloque",
    description: "Descubrí cómo 'hackear' tu cocina. Vas a aprender a planificar, comprar y ejecutar una sesión de cocina de 2 horas (domingo o lunes) que te libere los otros 6 días de la semana. Nunca más vas a empezar de cero.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800",
    illustration: "strategy"
  },
  {
    title: "Módulo 2: Menús Inteligentes & Rotativos",
    description: "No necesitás ser chef. Te doy mis plantillas de menú que se adaptan a tu vida real. Aprendé a rotar ingredientes básicos para crear platos que parecen de restaurante sin esfuerzo.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Módulo 3: Maestría en Freezer",
    description: "La ciencia de que la comida dure meses. Vas a aprender qué se congela, qué no, y el secreto para descongelar de forma que la comida parezca recién hecha (y no comida de avión).",
    image: "https://images.unsplash.com/photo-1584269683362-99c57121b67d?auto=format&fit=crop&q=80&w=800",
    illustration: "freezer"
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: "BONO #1: Guía Maestra de Macerados",
    value: "Valor Real: $18.000",
    description: "Transformá pechugas de pollo secas y carnes aburridas en platos gourmet. Incluye 15 marinadas (criollas, teriyaki, mediterráneas) listas para congelar y cocinar directo del freezer.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "BONO #2: Viandas para el Trabajo",
    value: "Valor Real: $14.500",
    description: "Recetas diseñadas específicamente para transportarse, calentarse en microondas (o comer frías) y que sigan siendo ricas. Chau al tupper triste y al gasto hormiga.",
    image: "https://images.unsplash.com/photo-1511690656952-34342d5c71df?auto=format&fit=crop&q=80&w=500&h=300",
    illustration: "lunchbox"
  },
  {
    title: "BONO #3: Infusiones Anti-inflamatorias",
    value: "Valor Real: $9.000",
    description: "Sentite liviana y desinflamada. Un recetario de shots de jengibre, tés digestivos y bebidas naturales para potenciar tu energía y digestión.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "BONO #4: Plan 'Primera Semana' para Principiantes",
    value: "Valor Real: $22.000",
    description: "No pienses. Solo seguí este plan. Lista de compras exacta, recetas y cronograma paso a paso para tu primera sesión de Cocina en Bloque exitosa.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "BONO #5: Guía de Conservación de Alimentos",
    value: "Valor Real: $16.500",
    description: "La biblia del almacenamiento. Tiempos exactos, recipientes correctos y trucos para que las verduras y frutas duren el doble en tu heladera.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "BONO #6: 50 Recetas Veganas",
    value: "Valor Real: $28.000",
    description: "Incorporá más plantas a tu vida. Desde hamburguesas de lentejas hasta postres sin lácteos. Perfecto para variar tu dieta o para 'Lunes sin carne'.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "BONO #7: Recetario Dulce Keto & Low Carb",
    value: "Valor Real: $24.000",
    description: "Tartas, tortas y postres sin azúcar ni harinas refinadas. Chocotorta Keto, Lemon Pie y más delicias para disfrutar sin culpa.",
    image: "https://images.unsplash.com/photo-1563729768-74361547c56e?auto=format&fit=crop&q=80&w=500&h=300",
    illustration: "sweet"
  },
  {
    title: "BONO #8: Untables, Aderezos y Dips Keto",
    value: "Valor Real: $11.000",
    description: "Elevá cualquier comida simple. Mayonesa casera, hummus de coliflor, babaganoush y salsas que duran semanas y realzan el sabor.",
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&q=80&w=500&h=300"
  },
  {
    title: "BONO #9: Bolitas Energéticas (Snacks)",
    value: "Valor Real: $8.500",
    description: "El snack perfecto para la oficina o el colegio. Sin azúcar, llenas de energía y se hacen en 10 minutos. Ideales para tener siempre en el freezer.",
    image: "https://images.unsplash.com/photo-1600336862255-861c3635d6dc?auto=format&fit=crop&q=80&w=500&h=300",
    illustration: "snack"
  },
  {
    title: "BONO #10: Leche Condensada Keto & Postres",
    value: "Valor Real: $7.500",
    description: "La receta secreta para hacer leche condensada sin azúcar en casa y usarla en tus postres favoritos. Imprescindible para los dulceros.",
    image: "https://images.unsplash.com/photo-1574884263538-655d998df825?auto=format&fit=crop&q=80&w=500&h=300",
    illustration: "jar"
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carolina M.",
    role: "Mamá de 2 y Abogada",
    content: "Sentía que vivía en la cocina. Llegaba del trabajo y tenía que empezar el segundo turno. Con este método, dedico 2 horas el domingo y me olvido el resto de la semana. ¡Mis hijos comen verduras sin darse cuenta y yo recuperé mis noches!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5
  },
  {
    name: "Dr. Esteban R.",
    role: "Médico",
    content: "Como médico recomiendo esto a mis pacientes. No es una dieta, es un sistema de vida. Bajé 8 kilos simplemente porque dejé de pedir delivery por falta de tiempo. La organización es salud.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5
  },
  {
    name: "Laura S.",
    role: "Emprendedora Digital",
    content: "El bono de viandas me salvó la vida y el bolsillo. Antes gastaba una fortuna comiendo menú ejecutivo cerca de la oficina. Ahora como rico, sano y ahorro muchísimo dinero que uso para viajar.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "¿Necesito ser experta en cocina o tener equipos caros?",
    answer: "Para nada. El eBook está diseñado para personas reales con cocinas reales. Si tenés un horno, hornallas y un cuchillo, tenés todo lo que necesitás. Las recetas son a prueba de fallos."
  },
  {
    question: "¿Sirve para familias numerosas?",
    answer: "¡Recontra! El método de Cocina en Bloque es ideal para familias. Solo multiplicás las cantidades. De hecho, cocinar para muchos todos los días es agotador; este sistema es tu solución definitiva para recuperar tu tiempo."
  },
  {
    question: "¿Soy celíaca o vegetariana, esto es para mí?",
    answer: "Sí. El sistema se basa en ingredientes naturales (carnes, verduras, legumbres). Además, incluimos bonos específicos con 50 recetas veganas y opciones sin gluten (Keto) para que adaptes todo a tu estilo de vida."
  },
  {
    question: "¿Cómo accedo al material? ¿Me llega a casa?",
    answer: "El acceso es 100% digital e inmediato. No tenés que esperar envíos. Una vez realizado el pago, recibís un correo automático con el enlace de descarga de todo el pack (eBook principal + 10 bonos) para leer en tu celular, tablet o computadora."
  },
  {
    question: "¿Qué pasa si no me gusta o no me sirve?",
    answer: "Tenés nuestra Garantía de Hierro de 7 días. Si comprás el pack, lo revisás y sentís que no aporta valor a tu vida, nos mandás un email y te devolvemos el 100% de tu dinero. Sin preguntas, sin letra chica."
  }
];