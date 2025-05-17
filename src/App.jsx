import { useEffect } from 'react';
import './styles/globals.css';
import './App.css';

// Importando os componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Ecosystem from './components/Ecosystem';
import Registration from './components/Registration';
import Investors from './components/Investors';
import Testimonials from './components/Testimonials';
import Store from './components/Store';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Efeito de scroll suave para navegação interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para o navbar fixo
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Impact />
        <Ecosystem />
        <Registration />
        <Investors />
        <Testimonials />
        <Store />
      </main>
      <Footer />
    </>
  );
}

export default App;
