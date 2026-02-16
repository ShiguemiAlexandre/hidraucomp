
import React from 'react';
import { ArrowRight, Phone, Zap, Activity, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSobre = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('sobre');
    if (element) {
      const offset = 100; // Compensação para o header fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-red-500 text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              Performance Hidráulica Industrial
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]">
              <span className="text-white block">Precisão técnica.</span>
              <span className="text-red-600 block">Força industrial.</span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Desde 2006, a Hidrau Comp redefine a manutenção e suporte hidráulico em Araraquara com engenharia de ponta e diagnósticos de alta precisão.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <a 
                href="https://wa.me/5516999932585?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20materiais%20hidráulicos.%20Poderia%20me%20informar%20valores%20e%20disponibilidade?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center gap-2"
              >
                Solicitar Orçamento
                <Phone size={18} />
              </a>
              <button 
                onClick={scrollToSobre}
                className="px-8 py-4 glass-panel text-white rounded-xl font-bold hover:bg-white/10 transition-all flex items-center gap-2 group"
              >
                Conheça a Empresa
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" 
                alt="Engenharia Hidráulica"
                className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              {/* Floating Data Card */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status do Sistema</span>
                  <Activity size={16} className="text-red-500" />
                </div>
                <div className="space-y-3">
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-red-600"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>EFICIÊNCIA OPERACIONAL</span>
                    <span>85% MÁX</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decoration Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-2 border-b-2 border-red-600/30 rounded-br-3xl"></div>
            <div className="absolute -top-6 -left-6 p-4 glass-panel rounded-2xl shadow-xl">
               <ShieldCheck className="text-red-500" size={32} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
