import { useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = aboutRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="sobre" className="section about-section" ref={aboutRef}>
      <div className="grid-background-about"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">O QUE É O IDANCETY?</h2>

        <div className="about-content">
          <div className="about-text animate-on-scroll">
            <p className="about-intro">
              <span className="cyber-lime-text">IDANCETY</span> é uma iniciativa
              global que une arte, identidade e impacto social. Revelamos
              talentos e transformamos histórias por meio de dança, música e
              experiências reais.
            </p>

            <p>
              A plataforma <span className="vapor-violet-text">ID+</span> nasce
              com o propósito de criar um ecossistema onde a expressão artística
              se torna ferramenta de transformação urbana e social. Começando
              com o "City of Dancers", buscamos democratizar o acesso à dança
              como carreira e estilo de vida, criando pontes entre comunidades,
              artistas estabelecidos e público global.
            </p>

            <p>
              Em um formato híbrido que combina elementos de competição, reality
              show e programa de desenvolvimento artístico, o IDANCETY não
              apenas descobre talentos - cria um movimento cultural com impacto
              mensurável nas comunidades locais.
            </p>

            <div style={{ margin: "2rem 0" }}>
              <a
                href="https://drive.google.com/uc?export=download&id=1sergS5UnbZf4OFDVmPczh4lBNpsrZ-QS"
                className="btn btn-outline"
              >
                <span
                  
                ></span>
                VEJA NOSSA APRESENTAÇÃO COMPLETA (ESPANHOL) (PDF)
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=192RPrawXiUZfCctW1tsJIexrEXN9yJ-P"
                className="btn btn-outline"
              >
                
                VEJA NOSSA APRESENTAÇÃO COMPLETA (INGLÊS) (PDF)
              </a>
            </div>
          </div>

          <div className="about-visual animate-on-scroll">
            <div className="about-card glow-card">
              <div className="about-card-inner">
                <div className="about-card-front">
                  <div className="about-icon">
                    <div className="icon-pulse"></div>
                  </div>
                  <h3>Ecossistema Completo</h3>
                  <p>Transformação pela dança</p>
                </div>
                <div className="about-card-back">
                  <ul>
                    <li>Descoberta de talentos</li>
                    <li>Desenvolvimento artístico</li>
                    <li>Impacto social</li>
                    <li>Oportunidades reais</li>
                    <li>Transformação urbana</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
