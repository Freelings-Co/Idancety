import { useEffect, useRef } from 'react';
import '../styles/Investors.css';

const Investors = () => {
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

  const partnerBenefits = [
    'Participação ativa na curadoria e desenvolvimento do projeto',
    'Conteúdo exclusivo para suas plataformas e canais',
    'Ativações de marca durante eventos e performances',
    'Acesso prioritário a talentos descobertos pela plataforma',
    'Relatórios detalhados de impacto e ROI social'
  ];

  return (
    <section id="investidores" className="section investors-section" ref={sectionRef}>
      <div className="grid-background-investors"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">INVESTIDORES E PARCEIROS</h2>
        
        <div className="investors-subtitle animate-on-scroll">
          <h3>VAMOS TRANSFORMAR O MUNDO JUNTOS?</h3>
        </div>
        
        <div className="investors-content">
          <div className="investors-info animate-on-scroll">
            <p className="investors-intro">
              O IDANCETY oferece oportunidades únicas de associação com um movimento cultural autêntico e de 
              alto impacto. Sua marca estará conectada a:
            </p>
            
            <ul className="investors-benefits">
              <li>Propósito genuíno com resultados mensuráveis de transformação social</li>
              <li>Conteúdo exclusivo com alto potencial de engajamento</li>
              <li>Visibilidade qualificada junto a públicos diversos e influentes</li>
              <li>Posicionamento inovador no cenário cultural contemporâneo</li>
            </ul>
            
            <div className="partner-benefits">
              <h4>BENEFÍCIOS PARA PARCEIROS:</h4>
              <ul>
                {partnerBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <a href="#" className="btn btn-secondary investors-cta">
              QUERO APOIAR ESSE MOVIMENTO
            </a>
          </div>
          
          <div className="investors-visual animate-on-scroll">
            <div className="investors-card glow-card">
              <div className="investors-card-header">
                <h4>OPORTUNIDADES DE INVESTIMENTO</h4>
              </div>
              
              <div className="investment-tiers">
                <div className="tier">
                  <div className="tier-header">
                    <h5>PLATINUM</h5>
                    
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Naming rights para o palco principal</li>
                      <li>Participação no conselho consultivo</li>
                      <li>Conteúdo exclusivo e direitos de imagem</li>
                      <li>Presença de marca em todas as plataformas</li>
                      <li>Ações de ativação exclusivas</li>
                    </ul>
                  </div>
                </div>
                
                <div className="tier">
                  <div className="tier-header">
                    <h5>GOLD</h5>
                    
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Patrocínio de categoria específica</li>
                      <li>Presença de marca em eventos e mídia</li>
                      <li>Ações de ativação personalizadas</li>
                      <li>Acesso VIP aos eventos e produções</li>
                    </ul>
                  </div>
                </div>
                
                <div className="tier">
                  <div className="tier-header">
                    <h5>SILVER</h5>
                        
                  </div>
                  <div className="tier-benefits">
                    <ul>
                      <li>Presença de marca em eventos selecionados</li>
                      <li>Menção em materiais promocionais</li>
                      <li>Convites para eventos especiais</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="investors-card-footer">
                <a href="#" className="btn btn-outline">
                  SOLICITAR APRESENTAÇÃO DETALHADA
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Investors;
