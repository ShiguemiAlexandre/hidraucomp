
import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Onde Estamos</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Venha nos Visitar</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Estamos localizados no Jardim Santa Lúcia, uma área estratégica em Araraquara, prontos para atender suas solicitações com rapidez e precisão técnica.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 text-red-500 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300 border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg mb-1">Endereço</h5>
                  <p className="text-slate-400 leading-relaxed">Rua Victor Lacorte, 40<br/>Jardim Santa Lúcia<br/>Araraquara – SP, 14801-460</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 text-red-500 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300 border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg mb-1">Telefone</h5>
                  <p className="text-slate-400 leading-relaxed">(16) 3324-2297</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white/5 text-red-500 rounded-2xl group-hover:bg-red-600 group-hover:text-white transition-all duration-300 border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg mb-1">E-mail Corporativo</h5>
                  <p className="text-slate-400 leading-relaxed">hidraucomp@uol.com.br</p>
                  <p className="text-slate-400 leading-relaxed">Hidraucomp@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.google.com/maps/dir//Rua+Victor+Lacorte,+40+-+Jardim+Santa+L%C3%BAcia,+Araraquara+-+SP,+14801-460"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-red-600 hover:text-white transition-all shadow-xl group"
              >
                Traçar Rota no Google Maps
                <Navigation size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://wa.me/5516999932585?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl group"
              >
                Solicitar Orçamento
                <Phone size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative">
            <div className="absolute inset-0 bg-slate-900/40 pointer-events-none group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.815779089552!2d-48.16335192404093!3d-21.80665227976263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8f3e580a8f8e1%3A0xc023e387c9d79901!2sR.%20Victor%20Lacorte%2C%2040%20-%20Jardim%20Santa%20Lucia%2C%20Araraquara%20-%20SP%2C%2014801-460!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.6) invert(0.9) hue-rotate(180deg) brightness(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              className="grayscale-[0.5] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
