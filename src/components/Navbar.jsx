import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#" className="logo">
            <span className="cyber-lime-text">ID</span>
            <span className="vapor-violet-text">+</span>
            <span>ANCETY</span>
          </a>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#impacto">Impacto</a></li>
            <li><a href="#ecossistema">Ecossistema ID+</a></li>
            <li><a href="#inscricoes">Inscrições</a></li>
            <li><a href="#investidores">Investidores</a></li>
            <li><a href="#loja">Loja</a></li>
          </ul>
        </div>

        <div className="navbar-cta">
          <a href="#inscricoes" className="btn btn-primary">Participar</a>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
