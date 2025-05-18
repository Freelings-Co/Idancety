import { useEffect, useRef } from 'react';
import '../styles/Ecosystem.css';

const Ecosystem = () => {
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

  const ecosystemPrograms = [
    {
      name: 'ID+ City of Dancers (Atual)',
      description: 'Dança e expressão corporal',
      status: 'active',
      icon: 'dancers-icon'
    },
    {
      name: 'ID+ MUSICAL',
      description: 'Produções teatrais com música e dança integrando talentos descobertos',
      status: 'active',
      icon: 'musical-icon'
    },
    {
      name: 'ID+ THE TOP 100 TALENTS',
      description: 'Reality show competitivo com os 100 melhores talentos',
      status: 'active',
      icon: 'top100-icon'
    },
    {
      name: 'ID+ Voice of Streets (Futuro)',
      description: 'Música urbana e poesia falada',
      status: 'future',
      icon: 'voice-icon'
    },
    {
      name: 'ID+ Visual Narratives (Futuro)',
      description: 'Grafite, artes visuais e design',
      status: 'future',
      icon: 'visual-icon'
    },
    {
      name: 'ID+ Digital Creators (Futuro)',
      description: 'Conteúdo digital e novas mídias',
      status: 'future',
      icon: 'digital-icon'
    },
    {
      name: 'ID+ WEB SERIES',
      description: 'Conteúdo episódico para plataformas digitais apresentando histórias dos artistas',
      status: 'active',
      icon: 'webseries-icon'
    }
  ];

  const impactAreas = [
    'Desenvolvimento Artístico Individual',
    'Transformação Comunitária',
    'Preservação Cultural',
    'Inovação Artística',
    'Geração de Oportunidades Econômicas',
    'Revitalização de Espaços Urbanos',
    'Saúde e Bem-estar através da Dança'
  ];

  return (
    <section id="ecossistema" className="section ecosystem-section" ref={sectionRef}>
      <div className="grid-background-ecosystem"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">CONHEÇA O ID+</h2>
        
        <div className="ecosystem-subtitle animate-on-scroll">
          <h3>ECOSSISTEMA DE TRANSFORMAÇÃO PELA ARTE</h3>
          <p>
            O ID+ (Identity Plus) é uma plataforma integrada que reconhece e amplifica diferentes formas de
            expressão identitária através da arte:
          </p>
        </div>
        
        <div className="ecosystem-programs">
          {ecosystemPrograms.map((program, index) => (
            <div 
              key={index} 
              className={`ecosystem-program ${program.status} animate-on-scroll`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="program-icon">
                <div className={`icon ${program.icon}`}></div>
              </div>
              <div className="program-content">
                <h4>{program.name}</h4>
                <p>{program.description}</p>
              </div>
              <div className="program-status">
                <span className="status-indicator"></span>
                <span className="status-text">
                  {program.status === 'active' ? 'Em andamento' : 'Em desenvolvimento'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="impact-areas-container animate-on-scroll">
          <h4 className="impact-areas-title">ÁREAS DE IMPACTO:</h4>
          <div className="impact-areas-grid">
            {impactAreas.map((area, index) => (
              <div key={index} className="impact-area-item">
                <span className="impact-dot"></span>
                <span>{area}</span>
              </div>
            ))}
          </div>
          <a href="#" className="btn btn-outline ecosystem-cta">
            <i className="document-icon"></i>
            BAIXAR APRESENTAÇÃO PARA INVESTIDORES
          </a>
        </div>
        
        {/* Instituto Dance2Change Section */}
        <div className="institute-section animate-on-scroll">
          <h3 className="institute-title">
            <span className="vapor-violet-text">5B.</span> INSTITUTO DANCE2CHANGE
          </h3>
          <h4 className="institute-subtitle">BRAÇO SOCIAL DO IDANCETY</h4>
          
          <div className="institute-content">
            <div className="institute-info">
              <p>
                O Instituto Dance2Change é a vertente de impacto social direto do IDANCETY, focado na transformação
                de comunidades através da dança e expressão corporal:
              </p>
              
              <ul className="institute-features">
                <li>Programas em Escolas Públicas: Aulas regulares e workshops em instituições educacionais</li>
                <li>Centros Comunitários: Espaços permanentes de formação artística em áreas vulneráveis</li>
                <li>Bolsas de Estudo: Apoio integral para jovens talentos sem recursos</li>
                <li>Formação de Multiplicadores: Capacitação de educadores locais para sustentabilidade dos projetos</li>
              </ul>
              
              <div className="institute-results">
                <h5>RESULTADOS ESPERADOS:</h5>
                <div className="results-grid">
                  <div className="result-item">
                    <div className="result-icon"></div>
                    <p>Redução da evasão escolar</p>
                  </div>
                  <div className="result-item">
                    <div className="result-icon"></div>
                    <p>Melhoria de indicadores de saúde mental juvenil</p>
                  </div>
                  <div className="result-item">
                    <div className="result-icon"></div>
                    <p>Desenvolvimento de habilidades socioemocionais</p>
                  </div>
                  <div className="result-item">
                    <div className="result-icon"></div>
                    <p>Criação de novas oportunidades econômicas em comunidades</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="institute-visual">
              <div className="institute-image glow-effect">



                <div className="institute-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* IDance2BEFIT Section */}
        <div className="befit-section animate-on-scroll">
          <h3 className="befit-title">
            <span className="cyber-lime-text">5C.</span> IDANCE2BEFIT
          </h3>
          <h4 className="befit-subtitle">PROGRAMA DE FITNESS E BEM-ESTAR</h4>
          
          <div className="befit-content">
            <div className="befit-visual">
              <div className="befit-image glow-effect">
                <div className="befit-overlay"></div>
              </div>
            </div>
            
            <div className="befit-info">
              <p>
                IDance2BEFIT é a vertente de saúde e bem-estar do ecossistema IDANCETY, democratizando o acesso à
                atividade física através da dança:
              </p>
              
              <ul className="befit-features">
                <li>Aulas Online: Programas estruturados com diferentes níveis e estilos</li>
                <li>App de Fitness: Aplicativo com rastreamento de progresso e gamificação</li>
                <li>Certificação de Instrutores: Formação de profissionais na metodologia IDance2BEFIT</li>
                <li>Eventos de Dança-Fitness: Encontros presenciais em espaços públicos</li>
              </ul>
              
              <div className="befit-benefits">
                <h5>BENEFÍCIOS:</h5>
                <ul>
                  <li>Abordagem inclusiva para diferentes corpos e habilidades</li>
                  <li>Combinação de técnicas de dança e fitness baseadas em evidências</li>
                  <li>Comunidade de apoio e motivação</li>
                  <li>Resultados mensuráveis de saúde e bem-estar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
