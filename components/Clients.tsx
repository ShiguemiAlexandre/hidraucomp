
import React from 'react';

const ClientBadge: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <div className="group cursor-default relative py-4 px-6 md:px-10">
    <div className="relative z-10 text-center">
      <span className={`text-3xl md:text-5xl lg:text-6xl font-black text-slate-800 group-hover:${color} transition-all duration-500 tracking-tighter uppercase italic select-none block`}>
        {name}
      </span>
      {/* Indicador inferior sutil no hover */}
      <div className={`mt-2 h-1 w-0 group-hover:w-full mx-auto transition-all duration-500 ${color.replace('text-', 'bg-')} opacity-50`}></div>
    </div>
    {/* Efeito de Brilho de Fundo */}
    <div className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none ${color.replace('text-', 'bg-')}`}></div>
  </div>
);

const Clients: React.FC = () => {
  const clients = [
    { name: "CPFL", color: "text-orange-500" },
    { name: "Scangil", color: "text-red-600" },
    { name: "Caramuru", color: "text-yellow-500" },
    { name: "Citrosuco", color: "text-green-500" },
    { name: "Cutrale", color: "text-orange-600" }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-y border-white/5">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20 text-red-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
              Ecossistema de Confiança
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Líderes que confiam em nossa <br/>
              <span className="text-red-600">Precisão Técnica.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm md:text-base max-w-xs font-medium leading-relaxed border-l-2 border-red-600/30 pl-6">
            Suporte estratégico e fornecimento de componentes para as maiores potências do setor industrial.
          </p>
        </div>

        {/* Exibição Estática e Imediata */}
        <div className="flex flex-wrap justify-center items-center gap-y-12 md:gap-x-4 lg:gap-x-8">
          {clients.map((client) => (
            <ClientBadge key={client.name} name={client.name} color={client.color} />
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-slate-600 uppercase tracking-[0.5em] font-bold">
            Padrão de Qualidade Hidrau Comp • 2006
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;
