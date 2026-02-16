
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Location from './components/Location';
import ReviewBadge from './components/ReviewBadge';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>
        
        <ReviewBadge />

        <section id="sobre">
          <About />
        </section>

        <Clients />

        <section id="servicos">
          <Products />
        </section>

        <Differentials />

        <section id="contato">
          <Location />
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
