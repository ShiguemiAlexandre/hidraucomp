
import React from 'react';
import { Settings, Wrench, ClipboardList, Zap, Cpu } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="group glass-panel p-1 rounded-[2.5rem] transition-all duration-500 cursor-default">
    <div className="bg-slate-900/50 p-10 rounded-[2.3rem] h-full flex flex-col items-start space-y-6 relative overflow-hidden">
      {/* Decorative CPU Icon */}
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
        <Cpu size={120} />
      </div>

      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 relative z-10">
        {icon}
      </div>

      <div className="flex-grow relative z-10">
        <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">{title}</h4>
        <p className="text-slate-400 leading-relaxed font-light">
          {description}
        </p>
      </div>

      <div className="pt-8 border-t border-white/5 w-full flex justify-between items-center group-hover:border-red-600/20 transition-colors relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Operational Module</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:border-red-600/50 group-hover:text-red-500 transition-all">
          Active
        </div>
      </div>
    </div>
  </div>
);

const Products: React.FC = () => {
  const services = [
    {
      icon: <Settings size={28} />,
      title: "Preventiva Inteligente",
      description: "Planejamento rigoroso para antecipar desgastes e garantir que sua linha de produção nunca pare por falhas básicas."
    },
    {
      icon: <Wrench size={28} />,
      title: "Montagem de Precisão",
      description: "Instalação técnica de tubulações e componentes com foco absoluto em estanqueidade e fluxo dinâmico ideal."
    },
    {
      icon: <ClipboardList size={28} />,
      title: "Diagnóstico Avançado",
      description: "Análise via testes de pressão e instrumentação para identificar ineficiências ocultas em circuitos complexos."
    },
    {
      icon: <Zap size={28} />,
      title: "Corretiva de Impacto",
      description: "Equipe de resposta rápida para intervenções críticas em bombas e cilindros, focada no menor tempo de downtime possível."
    }
  ];

  return (
    <section id="servicos" className="py-40 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#1e1b4b_0%,_transparent_70%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-red-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
              <div className="w-10 h-px bg-red-600"></div>
              Engenharia Aplicada
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              Soluções que movem a <br/> <span className="text-red-600">indústria pesada.</span>
            </h3>
          </div>
          <p className="text-slate-400 max-w-sm text-lg font-light leading-relaxed">
            Nossa expertise transforma sistemas complexos em operações de alto rendimento. Sem links desnecessários, apenas performance bruta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
