import { useEffect, useRef } from 'react';
import '../styles/Registration.css';

const Registration = () => {
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

  const registrationInfo = {
    whoCanApply: [
      'Danu00e7arinos de todos os estilos entre 16 e 35 anos',
      'Residentes em qualquer regiu00e3o do pau00eds',
      'Com ou sem experiu00eancia profissional pru00e9via',
      'Solo ou em grupos de atu00e9 5 pessoas'
    ],
    timeline: [
      'Inscriu00e7u00f5es abertas de 15/05/2025 a 15/07/2025',
      'Pru00e9-seleu00e7u00e3o: Agosto/2025',
      'Audiu00e7u00f5es presenciais: Setembro/2025',
      'Bootcamp: Outubro/2025',
      'Reality + Shows: Novembro-Dezembro/2025'
    ],
    whatToSubmit: [
      'Vu00eddeo de 1-3 minutos mostrando sua danu00e7a (qualquer estilo)',
      'Breve texto sobre sua histu00f3ria com a danu00e7a',
      'Informau00e7u00f5es bu00e1sicas de contato'
    ]
  };

  return (
    <section id="inscricoes" className="section registration-section" ref={sectionRef}>
      <div className="grid-background"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">INSCRIu00c7u00d5ES ABERTAS</h2>
        
        <div className="registration-content">
          <div className="registration-info animate-on-scroll">
            <div className="registration-card glow-card">
              <h3 className="registration-subtitle">QUEM PODE SE INSCREVER:</h3>
              <ul className="registration-list">
                {registrationInfo.whoCanApply.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <h3 className="registration-subtitle">ATu00c9 QUANDO:</h3>
              <ul className="registration-list timeline-list">
                {registrationInfo.timeline.map((item, index) => (
                  <li key={index} className="timeline-item">{item}</li>
                ))}
              </ul>
              
              <h3 className="registration-subtitle">O QUE ENVIAR:</h3>
              <ul className="registration-list">
                {registrationInfo.whatToSubmit.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              
              <a href="#" className="btn btn-primary registration-cta">
                FAZER MINHA INSCRIu00c7u00c3O AGORA
              </a>
            </div>
          </div>
          
          <div className="registration-visual animate-on-scroll">
            <div className="registration-form-visual">
              <div className="form-header">
                <h4>IDANCETY | INSCRIu00c7u00c3O 2025</h4>
              </div>
              <div className="form-body">
                <div className="form-group">
                  <label>Nome Completo</label>
                  <div className="input-placeholder"></div>
                </div>
                <div className="form-group">
                  <label>E-mail</label>
                  <div className="input-placeholder"></div>
                </div>
                <div className="form-group">
                  <label>Telefone</label>
                  <div className="input-placeholder"></div>
                </div>
                <div className="form-group">
                  <label>Estilo de Danu00e7a</label>
                  <div className="input-placeholder"></div>
                </div>
                <div className="form-group">
                  <label>Link do Vu00eddeo</label>
                  <div className="input-placeholder"></div>
                </div>
                <div className="form-group">
                  <label>Sua Histu00f3ria com a Danu00e7a</label>
                  <div className="textarea-placeholder"></div>
                </div>
              </div>
              <div className="form-footer">
                <div className="submit-button">ENVIAR INSCRIu00c7u00c3O</div>
              </div>
            </div>
            
            <div className="registration-countdown">
              <div className="countdown-header">
                <h4>INSCRIu00c7u00d5ES ENCERRAM EM:</h4>
              </div>
              <div className="countdown-timer">
                <div className="countdown-item">
                  <div className="countdown-value">60</div>
                  <div className="countdown-label">DIAS</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">12</div>
                  <div className="countdown-label">HORAS</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">45</div>
                  <div className="countdown-label">MIN</div>
                </div>
                <div className="countdown-item">
                  <div className="countdown-value">30</div>
                  <div className="countdown-label">SEG</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
