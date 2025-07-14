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

const TourBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <div className="image-overlay">
                <span className="artist-name">AY "HOLLYWOOD"</span>
                <span className="artist-bio">
                  Coreógrafo de Beyoncé, Rihanna, Jennifer Lopez e mais
                </span>
              </div>
            </div>
          </div>

          <div className="containerRight" >

          <div className="tour-details">
            <div className="detail-section">
              <h3>SOBRE O EVENTO</h3>
              <p>
                Uma experiência única com um dos maiores coreógrafos do mundo.
                Aprenda, dance e faça parte de um momento histórico na dança
                latino-americana.
              </p>

              <div className="featured-cities">
                <h4>PRINCIPAIS CIDADES</h4>
                <div className="cities-grid">
                  <span>🇧🇷 São Paulo</span>
                  <span>🇧🇷 Rio de Janeiro</span>
                  <span>🇨🇷 San José</span>
                  <span>🇦🇷 Buenos Aires</span>
                  <span>🇵🇾 Assunção</span>
                  <span>+ MAIS</span>
                </div>
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
                      <span>≈ $14 USD</span>
                      <span>≈ ₡7,500 CRC</span>
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
                      <span>≈ $60 USD</span>
                      <span>≈ ₡32,000 CRC</span>
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
              <p>Vagas limitadas por cidade</p>
              <div className="cta-buttons">
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
              <button
                className="more-info-button"
                onClick={() => setIsModalOpen(true)}
              >
                Saiba mais sobre o evento
              </button>
              <p className="payment-methods">Pagamentos Via PIX ou SINPE</p>
            </div>
      </div>
    </section>
  );
};

export default TourBanner;
