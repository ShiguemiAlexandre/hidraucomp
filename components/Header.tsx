
import React, { useState, useEffect } from 'react';
import { Menu, X, Cylinder } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'sobre', 'servicos', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: 'inicio' },
    { name: 'Sobre', href: 'sobre' },
    { name: 'Serviços', href: 'servicos' },
    { name: 'Contato', href: 'contato' },
  ];

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
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-500 top-0 left-0 outline-none">
      <div className={`mx-auto transition-all duration-500 ${isScrolled ? 'max-w-4xl mt-6 px-4' : 'max-w-7xl px-4 sm:px-6 lg:px-8 pt-6'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'glass-panel px-8 py-3 rounded-full border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
            : 'px-0'
        }`}>
          
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('inicio')}
          >
            <div className={`p-1.5 rounded-lg bg-red-600 text-white transition-all duration-300 ${isScrolled ? 'scale-90' : 'shadow-[0_0_15px_rgba(220,38,38,0.4)]'}`}>
              <Cylinder size={isScrolled ? 18 : 22} />
            </div>
            <span className={`font-bold tracking-tighter text-white transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}>
              HIDRAU <span className="text-red-600">COMP</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative py-1 ${
                  activeSection === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-600 rounded-full animate-in fade-in slide-in-from-left-2 duration-300"></span>
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contato')}
              className={`font-bold transition-all ${
                isScrolled 
                  ? 'px-5 py-2 bg-red-600 text-white rounded-full text-[10px] hover:bg-red-700' 
                  : 'px-6 py-2.5 bg-white text-slate-950 rounded-xl text-xs hover:bg-red-600 hover:text-white'
              }`}
            >
              Orçamento
            </button>
          </nav>

          <button
            className={`md:hidden p-2 text-white rounded-full transition-colors ${isScrolled ? 'hover:bg-white/5' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-slate-950/98 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center space-y-12 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
          <X size={32}/>
        </button>
        
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-3xl font-black transition-all ${
                activeSection === link.href ? 'text-red-600 scale-110' : 'text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
