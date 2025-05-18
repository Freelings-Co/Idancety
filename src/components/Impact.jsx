import { useEffect, useRef } from 'react';
import '../styles/Impact.css';

const Impact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const impactAreas = [
    'OPORTUNIDADE REAL para jovens artistas de qualquer origem socioeconômica',
    'CONEXÃO DIRETA com mentores e profissionais estabelecidos no mercado',
    'DESENVOLVIMENTO INTEGRAL técnico, artístico, pessoal e profissional',
    'EXPANSÃO CULTURAL com raízes locais e alcance global'
  ];

  return (
    <section id="impacto" className="section impact-section" ref={sectionRef}>
      <div className="grid-background-impact"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">IMPACTO E PROPÓSITO</h2>
        
        <div className="impact-subtitle animate-on-scroll">
          <h3>MUITO MAIS DO QUE UM SHOW: É SOBRE TRANSFORMAÇÃO</h3>
        </div>
        
        <div className="impact-areas">
          {impactAreas.map((area, index) => (
            <div 
              key={index} 
              className="impact-area glow-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="impact-icon">
                <div className="icon-inner"></div>
              </div>
              <p>{area}</p>
            </div>
          ))}
        </div>
        
        <div className="impact-quote animate-on-scroll">
          <blockquote>
            <p>"O IDANCETY não é apenas sobre encontrar os melhores dançarinos, mas sobre criar uma nova geração
            de artistas conscientes do seu poder de transformação. Quando um jovem descobre sua identidade
            através da arte, toda a comunidade se transforma."</p>
            <cite>— Klaus Duarte, Diretor Artístico</cite>
          </blockquote>
        </div>
        
        <div className="impact-visual animate-on-scroll">
          <div className="impact-grid">
            <div className="impact-cell">
              <div className="impact-image image-1">
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="impact-cell">
              <div className="impact-image image-2">
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="impact-cell">
              <div className="impact-image image-3">
                <div className="image-overlay"></div>
              </div>
            </div>
            <div className="impact-cell">
              <div className="impact-image image-4">
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
