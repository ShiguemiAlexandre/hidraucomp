
import React from 'react';
import { Send } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-red-700 to-red-900 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-red-400 rounded-full blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-black rounded-full blur-[100px] opacity-40"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
          Sua Indústria precisa de <br/><span className="text-red-200">Especialistas?</span>
        </h2>
        <p className="text-red-100/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          O suporte técnico que sua empresa merece com a agilidade que sua linha de produção exige. Inicie seu orçamento agora.
        </p>
        <a 
          href="https://wa.me/5516999932585?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20materiais%20hidráulicos.%20Poderia%20me%20informar%20valores%20e%20disponibilidade?"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-12 py-5 bg-white text-red-700 rounded-2xl font-extrabold text-xl hover:bg-slate-100 hover:scale-[1.03] transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
        >
          Solicitar Orçamento de Serviço
          <Send size={24} className="group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
