import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css';
import './App.css';

// Importando os componentes existentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import TourBanner from './components/TourBanner';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Ecosystem from './components/Ecosystem';

// Novos componentes
import Studio from './components/Studio';
import MusicLab from './components/MusicLab';
import MasterClass from './components/MasterClass';
import OnlineProgram from './components/OnlineProgram';
import Agency from './components/Agency';

import Registration from './components/Registration';
import Investors from './components/Investors';
import Testimonials from './components/Testimonials';
import Store from './components/Store';
import Footer from './components/Footer';
import TourBanner from './components/TourBanner';

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
        <TourBanner />
        <About />
        <HowItWorks />
        <Impact />
        <Ecosystem />
        <Studio />
        <MusicLab />
        <MasterClass />
        <OnlineProgram />
        <Agency />
        <Registration />
        <Investors />
        <Testimonials />
        <Store />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
