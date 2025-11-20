
import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, TrendingUp, Plane, ShoppingBag, Coffee } from 'lucide-react';
import { MAIN_PRODUCT } from '../constants';

const SavingsCalculator: React.FC = () => {
  const [deliveryFrequency, setDeliveryFrequency] = useState(3);
  const [deliveryCost, setDeliveryCost] = useState(8000);
  const [wasteCost, setWasteCost] = useState(5000);
  
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    // Calculate costs of NOT using the system
    // Delivery cost per month = freq * cost * 4 weeks
    const monthlyDeliverySpend = deliveryFrequency * deliveryCost * 4;
    
    // With meal prep, we estimate reducing delivery to maybe 1 time a week (treat) or 0, 
    // and reducing waste to near zero. 
    // Let's be conservative: Savings = (Current Delivery - 1 Delivery/week) + Waste Savings
    
    // Cost of cooking at home is obviously there, but usually 1 delivery = 3-4 home meals.
    // Simplification for marketing: We calculate "Money recovered from inefficiency".
    
    const monthlyWasteSavings = wasteCost; // Assuming we save almost all waste
    // Assuming we replace unnecessary deliveries with home food. 
    // Net saving estimate: 70% of delivery spend (considering ingredient cost)
    const netDeliverySavings = monthlyDeliverySpend * 0.7;

    const totalMonthly = netDeliverySavings + monthlyWasteSavings;
    const totalAnnual = totalMonthly * 12;

    setMonthlySavings(totalMonthly);
    setAnnualSavings(totalAnnual);
    
    // ROI: How many times does the course pay for itself in a year?
    setRoi(Math.floor(totalAnnual / MAIN_PRODUCT.price));

  }, [deliveryFrequency, deliveryCost, wasteCost]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center p-3 bg-green-100 text-green-600 rounded-full mb-4 shadow-sm">
              <Calculator className="w-8 h-8" />
           </div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
             ¿Cuánto te está costando <u>no</u> organizarte?
           </h2>
           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
             Hacé la cuenta. El desorden en la cocina no solo te roba tiempo, te está sacando plata del bolsillo todos los días.
           </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
           
           {/* CONTROLS */}
           <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="space-y-8">
                  
                  {/* Input 1 */}
                  <div>
                      <div className="flex justify-between mb-2">
                          <label className="font-bold text-gray-700">Pedidos de Delivery por semana</label>
                          <span className="bg-brand-100 text-brand-800 font-bold px-3 py-1 rounded-lg">{deliveryFrequency} veces</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="10" 
                        step="1" 
                        value={deliveryFrequency} 
                        onChange={(e) => setDeliveryFrequency(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                      />
                      <p className="text-xs text-gray-400 mt-2">Incluye cenas rápidas, apps de delivery, comida al peso.</p>
                  </div>

                  {/* Input 2 */}
                  <div>
                      <div className="flex justify-between mb-2">
                          <label className="font-bold text-gray-700">Costo promedio por pedido</label>
                          <span className="bg-brand-100 text-brand-800 font-bold px-3 py-1 rounded-lg">${deliveryCost.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="2000" 
                        max="100000" 
                        step="500" 
                        value={deliveryCost} 
                        onChange={(e) => setDeliveryCost(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                      />
                  </div>

                  {/* Input 3 */}
                  <div>
                      <div className="flex justify-between mb-2">
                          <label className="font-bold text-gray-700">Desperdicio mensual estimado</label>
                          <span className="bg-brand-100 text-brand-800 font-bold px-3 py-1 rounded-lg">${wasteCost.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="50000" 
                        step="1000" 
                        value={wasteCost} 
                        onChange={(e) => setWasteCost(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-500"
                      />
                      <p className="text-xs text-gray-400 mt-2">Verduras que se pudren, sobras que se tiran, frascos vencidos.</p>
                  </div>

              </div>
           </div>

           {/* RESULTS */}
           <div className="lg:col-span-5 relative">
              <div className="bg-brand-900 text-white p-8 rounded-3xl shadow-2xl border-4 border-brand-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
                  
                  <div className="relative z-10 text-center">
                      <h3 className="text-brand-200 font-medium uppercase tracking-widest text-sm mb-2">Podrías estar ahorrando</h3>
                      <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                        {formatCurrency(monthlySavings)}
                        <span className="text-xl font-normal text-brand-300 block mt-1">al mes</span>
                      </div>

                      <div className="w-full h-px bg-brand-700 my-6"></div>

                      <div className="flex items-center justify-center gap-2 mb-1">
                         <TrendingUp className="w-5 h-5 text-accent-400" />
                         <span className="text-brand-100 font-medium">Proyección Anual:</span>
                      </div>
                      <p className="text-3xl font-bold text-accent-400 mb-6">{formatCurrency(annualSavings)}</p>

                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10 text-left">
                          <p className="text-xs text-brand-200 mb-3 text-center uppercase tracking-wide font-bold">¿Qué harías con esa plata?</p>
                          <div className="space-y-2">
                              <div className="flex items-center gap-3 text-sm">
                                  <Plane className="w-4 h-4 text-accent-400" />
                                  <span>Unas vacaciones increíbles</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm">
                                  <ShoppingBag className="w-4 h-4 text-accent-400" />
                                  <span>Renovar tu guardarropa</span>
                              </div>
                               <div className="flex items-center gap-3 text-sm">
                                  <Coffee className="w-4 h-4 text-accent-400" />
                                  <span>{Math.floor(annualSavings / 3000)} cafés de especialidad</span>
                              </div>
                          </div>
                      </div>
                      
                      <div className="mt-8 bg-accent-500 text-brand-900 p-3 rounded-lg font-bold text-sm shadow-lg animate-pulse">
                          ¡El curso se paga solo en {Math.ceil(MAIN_PRODUCT.price / (monthlySavings / 30))} días!
                      </div>
                  </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
