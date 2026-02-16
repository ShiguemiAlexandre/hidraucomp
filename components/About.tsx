
import React from 'react';
import { Target, Zap, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-32 bg-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Equipe técnica"
                className="w-full h-[600px] object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-red-600/10"></div>
            </div>
            {/* Stats Overlay */}
            <div className="absolute top-1/2 -right-10 -translate-y-1/2 hidden xl:block space-y-4">
              <div className="glass-panel p-6 rounded-3xl shadow-2xl translate-x-4">
                <div className="text-4xl font-black text-red-600">18</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Anos de Mercado</div>
              </div>
              <div className="glass-panel p-6 rounded-3xl shadow-2xl">
                <div className="text-4xl font-black text-white">5.0</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Satisfação Google</div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">A Instituição</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                Construindo o padrão ouro em <span className="text-slate-500">Engenharia Hidráulica.</span>
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                A Hidrau Comp Comércio de Materiais Hidráulicos LTDA nasceu em 2006 com um propósito claro: elevar o nível técnico do suporte industrial em Araraquara. 
              </p>
              <p className="text-slate-500 leading-relaxed">
                Hoje, somos sinônimo de confiança para grandes players do setor, operando sob uma filosofia de precisão milimétrica e atendimento focado na resolução imediata de problemas complexos em máquinas e equipamentos industriais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 glass-panel rounded-2xl">
                <Target className="text-red-500 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-white mb-1">Missão</h5>
                  <p className="text-xs text-slate-400">Maximizar a vida útil e performance de ativos industriais.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 glass-panel rounded-2xl">
                <Shield className="text-red-500 shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-white mb-1">Valores</h5>
                  <p className="text-xs text-slate-400">Rigor técnico, transparência total e compromisso com o prazo.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
