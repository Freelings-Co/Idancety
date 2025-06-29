import { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import BannerHero from '../assets/images/banner-mobile.webp'

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      heroRef.current.style.setProperty('--mouse-x', x.toFixed(2));
      heroRef.current.style.setProperty('--mouse-y', y.toFixed(2));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="grid-background"></div>
      <div className="hero-glow"></div>
      <img src={BannerHero} alt="" className='mobile-banner' />

      <div className="container hero-container">
        <div className="hero-content">

          <h1 className="hero-title">
            Seu <span className="cyber-lime-text">ID</span>
            <span className="vapor-violet-text">+</span> pode mudar a cidade.
          </h1>

          <div className="hero-cta">
            <a href="#inscricao" className="btn btn-primary pulse">Quero me inscrever</a>
            <a href="#sobre" className="btn btn-secondary">Ver o projeto completo</a>
            <a href="#investidores" className="btn btn-outline">Sou investidor</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="dancer-silhouette">
            <div className="dancer-glow"></div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
