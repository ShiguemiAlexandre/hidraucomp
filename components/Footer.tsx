
import React from 'react';
import { Cylinder } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Marca */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="p-1.5 rounded-lg bg-red-600 text-white">
                <Cylinder size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight">
                HIDRAU <span className="text-red-600">COMP</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Hidrau Comp - Comércio de Materiais Hidráulicos LTDA. Excelência em fornecimento e suporte industrial para Araraquara e região desde 2006.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Navegação</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="hover:text-red-500 transition-colors text-sm font-medium">Início</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="hover:text-red-400 transition-colors text-sm font-medium">Sobre Nós</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-red-400 transition-colors text-sm font-medium">Serviços</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="hover:text-red-400 transition-colors text-sm font-medium">Contato</button>
              </li>
            </ul>
          </div>

          {/* Detalhes de Contato */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 text-lg">Informações Corporativas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-sm">
                  <span className="block text-slate-500 font-bold uppercase text-xs mb-1">Localização</span>
                  Rua Victor Lacorte, 40<br/>Jardim Santa Lúcia<br/>Araraquara/SP – CEP 14801-460
                </p>
                <p className="text-sm">
                  <span className="block text-slate-500 font-bold uppercase text-xs mb-1">Telefone Principal</span>
                  (16) 3324-2297<br/>
                  (16) 99993-2585
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm">
                  <span className="block text-slate-500 font-bold uppercase text-xs mb-1">Dados Jurídicos</span>
                  CNPJ: 08.068.037/0001-63<br/>
                  Atendimento: Seg a Sex, 08h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© {new Date().getFullYear()} Hidrau Comp LTDA.</p>
            <p className="text-slate-600">
              Desenvolvido pela <a href="https://japantech.com.br/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-500 transition-colors">Japantech</a>
            </p>
          </div>
          <div className="flex gap-6">
            <span className="text-slate-700">Araraquara - SP</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
