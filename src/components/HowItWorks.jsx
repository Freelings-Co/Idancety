import { useEffect, useRef } from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
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

  const journeySteps = [
    {
      number: '1',
      title: 'AUDIÇÕES ABERTAS',
      items: [
        'Inscrição digital simplificada através da plataforma',
        'Envio de vídeo demonstrando seu estilo e técnica',
        'Pré-seleção com feedback personalizado',
        'Audições presenciais em comunidades selecionadas'
      ]
    },
    {
      number: '2',
      title: 'BOOTCAMP ARTÍSTICO',
      items: [
        'Imersão total de 3 semanas com profissionais renomados',
        'Treinamento técnico intensivo (8h/dia)',
        'Mentoria individualizada adaptada ao seu estilo',
        'Workshops de desenvolvimento pessoal e profissional',
        'Criação colaborativa de performances originais'
      ]
    },
    {
      number: '3',
      title: 'REALITY + SHOWS',
      items: [
        'Conteúdo semanal mostrando sua evolução artística',
        'Performances ao vivo em espaços públicos e teatros',
        'Sistema de votação híbrido (jurados + público)',
        'Documentação completa da sua jornada de transformação',
        'Oportunidades reais no mercado artístico'
      ]
    },
    {
      number: '4',
      title: 'MUSICAL ID+',
      items: [
        'Os melhores talentos são selecionados para o Musical ID+',
        'Produção teatral profissional com turnê nacional',
        'Integração de múltiplas linguagens artísticas',
        'Histórias inspiradas nas jornadas reais dos participantes'
      ]
    },
    {
      number: '5',
      title: 'THE TOP 100 TALENTS',
      items: [
        'Reality show competitivo reunindo os 100 melhores talentos',
        'Transmissão em plataformas digitais e parceiros de mídia',
        'Desafios multidisciplinares e colaborações com artistas consagrados',
        'Prêmios e contratos profissionais para os vencedores'
      ]
    }
  ];

  const webSeriesInfo = {
    title: 'WEB SERIES IDANCETY',
    subtitle: 'CONTEÚDO EPISÓDICO DIGITAL',
    description: 'A Web Series IDANCETY documenta as histórias mais inspiradoras do programa em formato episódico profissional:',
    features: [
      'Temporadas Temáticas: Cada temporada com foco em aspectos diferentes (superação, técnica, comunidade)',
      'Bastidores e Processos: Documentação do processo criativo e desafios dos participantes',
      'Perfis Aprofundados: Histórias pessoais além da dança',
      'Episódios Especiais: Colaborações com artistas internacionais e projetos especiais'
    ],
    distribution: [
      'Canal oficial IDANCETY no YouTube',
      'Plataformas de streaming parceiras',
      'Exibições em festivais de cinema e documentário',
      'Versões educacionais para instituições de ensino'
    ]
  };

  return (
    <section id="como-funciona" className="section how-it-works-section" ref={sectionRef}>
      <div className="grid-background-how"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">COMO FUNCIONA</h2>
        
        <div className="journey-title animate-on-scroll">
          <h3>JORNADA DO PARTICIPANTE</h3>
          <div className="journey-line"></div>
        </div>
        
        <div className="journey-steps">
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className={`journey-step animate-on-scroll step-${index + 1}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <div className="step-content glow-card">
                <h4>{step.title}</h4>
                <ul>
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="journey-cta animate-on-scroll">
          <a href="#inscricoes" className="btn btn-primary">
            QUERO PARTICIPAR
          </a>
        </div>
        
        <div className="web-series animate-on-scroll">
          <h3 className="web-series-title">
            <span className="vapor-violet-text">3B.</span> {webSeriesInfo.title}
          </h3>
          <h4 className="web-series-subtitle">{webSeriesInfo.subtitle}</h4>
          
          <div className="web-series-content">
            <div className="web-series-info">
              <p>{webSeriesInfo.description}</p>
              
              <ul className="features-list">
                {webSeriesInfo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <div className="distribution">
                <h5>DISTRIBUIÇÃO:</h5>
                <ul>
                  {webSeriesInfo.distribution.map((channel, index) => (
                    <li key={index}>{channel}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="web-series-visual">
              <div className="video-frame glow-effect">
                <div className="play-button">
                  <div className="play-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
