
import React from 'react';
import { Calendar, Users, Factory, MapPin, Gauge, ShieldCheck } from 'lucide-react';

const Differentials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-20">
          <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Diferenciais</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A estrutura de quem <br/> <span className="text-slate-500 text-3xl md:text-4xl font-normal">entende de força bruta.</span>
          </h3>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
          
          {/* Card 1: Experience (Large) */}
          <div className="md:col-span-2 md:row-span-2 glass-panel p-10 rounded-[2rem] flex flex-col justify-between group hover:border-red-600/50 transition-all duration-500">
            <div className="bg-red-600/10 w-16 h-16 rounded-2xl flex items-center justify-center text-red-500 mb-8 group-hover:scale-110 transition-transform">
              <Calendar size={32} />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-4">Liderança desde 2006</h4>
              <p className="text-slate-400 leading-relaxed">
                Quase duas décadas de história em Araraquara, construindo uma reputação baseada em integridade técnica e resultados consistentes para o setor industrial paulista.
              </p>
            </div>
          </div>

          {/* Card 2: Strategic Location */}
          <div className="md:col-span-2 glass-panel p-8 rounded-[2rem] flex items-center gap-6 group hover:bg-white/5 transition-all">
            <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Estrategicamente em Araraquara</h4>
              <p className="text-slate-400 text-sm">Logística ágil para todo o interior de SP.</p>
            </div>
          </div>

          {/* Card 3: Specialized Support */}
          <div className="md:col-span-1 glass-panel p-8 rounded-[2rem] flex flex-col justify-between group hover:border-red-600/30 transition-all">
            <Users className="text-red-500 mb-6" size={28} />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">Time Elite</h4>
              <p className="text-slate-500 text-xs uppercase tracking-tighter">Especialistas Certificados</p>
            </div>
          </div>

          {/* Card 4: Industrial Focus */}
          <div className="md:col-span-1 bg-red-600 p-8 rounded-[2rem] flex flex-col justify-between shadow-[0_20px_40px_rgba(220,38,38,0.2)]">
            <Factory className="text-white mb-6" size={28} />
            <div>
              <h4 className="text-lg font-bold text-white mb-2">DNA Industrial</h4>
              <p className="text-red-100 text-xs uppercase tracking-tighter">Foco em Alta Performance</p>
            </div>
          </div>

        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <Gauge size={600} strokeWidth={0.5} />
      </div>
    </section>
  );
};

export default Differentials;
