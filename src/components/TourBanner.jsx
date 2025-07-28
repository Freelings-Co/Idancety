import React, { useState } from "react";
import "../styles/TourBanner.css";
import tourImage from "../assets/images/ayhollywood-br.webp";

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
        <h3>Informações Adicionais</h3>
        <div className="modal-body">
          <h4>O que está incluído na Masterclass?</h4>
          <ul>
            <li>Acesso a 2 aulas exclusivas com AY "Hollywood"</li>
            <li>Certificado digital de participação</li>
            <li>Fotos oficiais do evento</li>
            <li>Oportunidade de participar de um casting exclusivo</li>
          </ul>

          <h4>Benefícios VIP</h4>
          <ul>
            <li>Todos os benefícios da Masterclass</li>
            <li>Meet & Greet privado com AY "Hollywood"</li>
            <li>Participação garantida no casting</li>
            <li>Gravação profissional da sua performance</li>
            <li>Kit exclusivo do evento</li>
            <li>Brinde surpresa</li>
          </ul>

          <h4>Formas de Pagamento</h4>
          <p>Brasil: PIX </p>
          <p>Costa Rica: Transferência SINPE</p>

          <h4>Política de Reembolso</h4>
          <p>
            Cancelamentos até 7 dias antes do evento têm direito a 80% de
            reembolso. Após este período, não serão realizados reembolsos.
          </p>
        </div>
      </div>
    </div>
  );
};

// Componente para texto expansível
function ExpandableText() {
  const [showMore, setShowMore] = React.useState(false);
  const bioFull = `Nascido em Porto Rico e criado na parte alta de Nova York, AY "Hollywood" dança desde os cinco anos de idade. Após anos de treinamento em dança, sua paixão cresceu para o ensino e a coreografia, e ele começou a atuar como substituto no Broadway Dance Center. AY Hollywood lecionou em renomados estúdios de dança e continua viajando, ensinando seu estilo de hip-hop por todo o mundo. Sua carreira profissional foi levada ao próximo nível quando ele se tornou o coreógrafo principal de uma estrela em ascensão do hip-hop, o que lhe rendeu reconhecimento. De lá, ele passou a coreografar para vários artistas de gravação, como Beyoncé, Rihanna, Jennifer Lopez, Ciara, Tinashe, "Meg thee stallion" e recentemente "PADAM" de: Kylie Minogue e trabalho de turnê para Nicki Minaj na turnê mundial "Pink Friday". AY Hollywood agora entrou no mundo da produção cinematográfica após receber sua certificação em "Negócios do entretenimento" pela NYU. Ele agora tem dois curtas-metragens e está trabalhando em um terceiro como escritor, produtor e diretor.`;
  const bioShort = bioFull.split(". ").slice(0, 3).join(". ") + ".";
  return (
    <>
      <p>{showMore ? bioFull : bioShort}</p>
      <button className="see-more-btn" onClick={() => setShowMore((v) => !v)}>
        {showMore ? "Ver menos" : "Ver mais"}
      </button>
    </>
  );
}

const TourBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [showFullCalendar, setShowFullCalendar] = useState(false);

     const visibleCities = [
    { city: "São Paulo", flag: "🇧🇷", dates: "28 a 30 de novembro" },
    { city: "Rio de Janeiro", flag: "🇧🇷", dates: "21 a 23 de novembro" },
    { city: "San José", flag: "🇨🇷", dates: "11 de outubro" },
    { city: "Buenos Aires", flag: "🇦🇷", dates: "12 a 14 de dezembro" },
    { city: "Assunção", flag: "🇵🇾", dates: "20 de dezembro" },
  ];

  // Full calendar text to show when expanded
  const fullCalendarText = (
    <>
      <h5>COSTA RICA</h5>
      <ul>
        <li>11 de outubro – San José</li>
        <li>12 de outubro – Cartago</li>
        <li>17 de outubro – Nosara</li>
        <li>19 de outubro – Racó</li>
        <li>24 de outubro – Puerto Viejo</li>
        <li>25 e 26 de outubro – Experiência VIP no Caribe Costarriquenho</li>
      </ul>

      <h5>PERU</h5>
      <ul>
        <li>31 de outubro – Lima</li>
        <li>1 e 2 de novembro – Lima e Miraflores</li>
      </ul>

      <h5>BRASIL</h5>
      <ul>
        <li>7 a 9 de novembro – Salvador, Bahia</li>
        <li>11 e 12 de novembro – Fortaleza</li>
        <li>13 a 16 de novembro – Brasília e Goiânia</li>
        <li>21 a 23 de novembro – Rio de Janeiro</li>
        <li>28 a 30 de novembro – São Paulo</li>
        <li>5 a 7 de dezembro – Curitiba e Itajaí</li>
      </ul>

      <h5>ARGENTINA</h5>
      <ul>
        <li>12 a 14 de dezembro – Buenos Aires</li>
      </ul>

      <h5>PARAGUAI</h5>
      <ul>
        <li>20 de dezembro – Assunção</li>
      </ul>

      <h5>ENCERRAMENTO NO RIO DE JANEIRO</h5>
      <ul>
        <li>24 de dezembro a 1º de janeiro – Rio de Janeiro</li>
      </ul>
    </>
  );


  return (
    <section className="tour-banner" id="tour">
      <div className="container">
        <InfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className="tour-header">
          <h2 className="tour-title">
            <span className="highlight">AY HOLLYWOOD</span>
            <span className="tour-dates">TURNÊ AMÉRICA LATINA 2025/2026</span>
          </h2>
          <p className="tour-subtitle">
            MASTERCLASS • CASTING • EXPERIÊNCIA VIP
          </p>
        </div>

        <div className="tour-content">
          <div className="tour-image-container">
            <div className="image-wrapper">
              <img
                src={tourImage}
                alt="AY HOLLYWOOD - TURNÊ AMÉRICA LATINA 2025/2026"
                className="tour-image"
                loading="lazy"
              />
              {/* <div className="image-overlay">
                <span className="artist-name">AY "HOLLYWOOD"</span>
                <span className="artist-bio">
                  Coreógrafo de Beyoncé, Rihanna, Jennifer Lopez e mais
                </span>
              </div> */}
            </div>
          </div>

          <div className="containerRight">
            <div className="tour-details">
              <div className="detail-section">
                <h3>QUEM É "AY HOLLYWOOD"?</h3>

                <ExpandableText />
                <h3>SOBRE O EVENTO</h3>
                <p>
                  Uma experiência única com um dos maiores coreógrafos do mundo.
                  Aprenda, dance e faça parte de um momento histórico na dança
                  latino-americana.
                </p>

             
                <div className="featured-cities">
                  <h4>PRINCIPAIS CIDADES</h4>
                  <div className="cities-grid">
                    {visibleCities.map(({ city, flag, dates }) => (
                      <span key={city}>
                        {flag} {city} <small>({dates})</small>
                      </span>
                    ))}
                    <span>+ MAIS</span>
                  </div>
                  <button
                    className="see-calendar-btn"
                    onClick={() => setShowFullCalendar((v) => !v)}
                  >
                    {showFullCalendar ? "Ver menos calendário" : "Ver calendário completo"}
                  </button>
                  {showFullCalendar && (
                    <div className="full-calendar">
                      {fullCalendarText}
                    </div>
                  )}
                </div>
              </div>

              <div className="pricing-section">
                <h3>INVESTIMENTO</h3>
                <div className="price-cards">
                  <div className="price-card">
                    <h4>MASTERCLASS</h4>
                    <div className="price">
                      <div className="price-amount">
                        <span className="currency">R$</span>
                        <span className="amount">70</span>
                        <span className="period">/1° LOTE</span>
                      </div>
                      <div className="price-conversion">
                        <span>≈ $80 USD</span>
                        <span>≈ ₡40.000 CRC</span>
                      </div>
                    </div>
                    <ul>
                      <li>2 Aulas exclusivas</li>
                      <li>Certificado digital</li>
                      <li>Fotos oficiais</li>
                    </ul>
                  </div>

                  <div className="price-card highlight">
                    <h4>EXPERIÊNCIA VIP</h4>
                    <div className="price">
                      <div className="price-amount">
                        <span className="currency">R$</span>
                        <span className="amount">300</span>
                        <span className="period">/1° LOTE</span>
                      </div>
                      <div className="price-conversion">
                        <span>≈ $300 USD</span>
                        <span>≈ ₡150.000 CRC</span>
                      </div>
                      <div className="price-amount">
                        <span className="currency">R$</span>
                        <span className="amount">500</span>
                        <span className="period">/2° LOTE</span>
                      </div>
                      <div className="price-conversion">
                        <span>≈ $500 USD</span>
                        <span>≈ ₡250.000 CRC</span>
                      </div>
                    </div>
                    <ul>
                      <li>Tudo do pacote Masterclass</li>
                      <li>Meet & Greet exclusivo</li>
                      <li>Participação no casting</li>
                      <li>Gravação profissional</li>
                      <li>Kit exclusivo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <div className="cta-buttons">
            <p>Vagas limitadas por cidade</p>
            <a
              href="https://wa.me/+5511913122001"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button brazil"
            >
              <span className="flag">🇧🇷</span>
              <span className="cta-text">
                <strong>BRASIL</strong>
                <span>Falar no WhatsApp</span>
              </span>
            </a>
            <a
              href="https://wa.me/+50670854154"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button costa-rica"
            >
              <span className="flag">🇨🇷</span>
              <span className="cta-text">
                <strong>COSTA RICA</strong>
                <span>Contactar por WhatsApp</span>
              </span>
            </a>
          </div>
          <div className="more-box">
            <p className="payment-methods">Pagamentos Via PIX ou SINPE</p>
            <a
              href="https://www.instagram.com/p/DMF6fwZsFnC/?img_index=1"
              target="_blank"
            >
              <button
                className="more-info-button"
                // onClick={() => setIsModalOpen(true)}
              >
                Saiba mais sobre o evento
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourBanner;
