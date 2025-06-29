import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-background-footer"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#" className="logo">
              <span className="cyber-lime-text">ID</span>
              <span className="vapor-violet-text">+</span>
              <span>ANCETY</span>
            </a>
            <p className="footer-tagline">City of Dancers</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>LINKS RÁPIDOS</h4>
              <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#inscricao">Inscrição</a></li>
                <li><a href="#investidores">Parceiros</a></li>
                {/* <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Política de privacidade</a></li> */}
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>REDES SOCIAIS</h4>
              <ul className="social-links">
                <li>
                  <a href="https://www.instagram.com/idancety/" className="social-link instagram">
                    <i className="social-icon"></i>
                    Instagram: @idancety
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="social-link tiktok">
                    <i className="social-icon"></i>
                    TikTok: @idancetyglobal
                  </a>
                </li> */}
                <li>
                  <a href="https://www.youtube.com/user/IDanceTy" className="social-link youtube">
                    <i className="social-icon"></i>
                    YouTube: IDanceTy
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>CONTATO</h4>
              <ul className="contact-links">
                <li>
                  <a href="mailto:cnt360cr@gmail.com" className="contact-link email">
                    <i className="contact-icon"></i>
                    cnt360cr@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+50670854154" className="contact-link whatsapp">
                    <i className="contact-icon"></i>
                    WhatsApp: +506 7085 4154
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+5511913122001" className="contact-link whatsapp">
                    <i className="contact-icon"></i>
                    WhatsApp: +55 11 91312-2001
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-expansion">
          <h4>CRONOGRAMA DE EXPANSÃO - 2025-2027</h4>
          <div className="timeline-grid">
            <div className="timeline-item">
              <span className="timeline-date">2025-T1:</span>
              <span className="timeline-event">Lançamento do ID+ City of Dancers (1ª Edição Nacional)</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2025-T2:</span>
              <span className="timeline-event">Lançamento da Web Series e primeiros episódios</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2025-T3:</span>
              <span className="timeline-event">Abertura da Loja IDANCETY e produtos digitais</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2025-T4:</span>
              <span className="timeline-event">Estreia do MUSICAL com talentos da primeira temporada</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2026-T1:</span>
              <span className="timeline-event">Lançamento do IDance2BEFIT com app e aulas online</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2026-T2:</span>
              <span className="timeline-event">Expansão para 3 países na América Latina</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2026-T3:</span>
              <span className="timeline-event">Início de operações do Instituto Dance2Change</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2026-T4:</span>
              <span className="timeline-event">Lançamento do reality THE TOP 100 TALENTS</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2027-T1:</span>
              <span className="timeline-event">Expansão para Europa e África</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2027-T2:</span>
              <span className="timeline-event">Lançamento do ID+ Voice of Streets</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2027-T3:</span>
              <span className="timeline-event">Abertura dos primeiros Centros de Treinamento IDANCETY</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2027-T4:</span>
              <span className="timeline-event">Primeira turnê mundial com artistas do programa</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; 2025 IDANCETY | ID+ City of Dancers Todos os direitos reservados
          </div>
          <div className="copyright">
            <a href="https://www.freelings.com.br/">Desenvolvido Por Freelings Company</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
