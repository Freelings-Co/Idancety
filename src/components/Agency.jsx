import React from 'react';
import styles from '../styles/Agency.module.css';

const Agency = () => {
  return (
    <section id="agency" className={styles.agencySection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>ID+ AGENCY</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.contentBox}>
            <p className={styles.description}>
              Os melhores talentos estão automaticamente inseridos em nossa rede de oportunidades e agenciamento global.
            </p>
            
            <p className={styles.description}>
              Se você deseja levar seu talento e personalidade ao nível profissional, nossa agência vai te auxiliar. Estamos conectados aos melhores agentes e castings do país e do exterior.
            </p>
            
            <div className={styles.highlightBox}>
              <p className={styles.highlightText}>
                Sua Dança, sua Música, sua Estrela pode chegar a Hollywood, Broadway e a palcos por todo o planeta.
              </p>
            </div>
            
            <div className={styles.ctaSection}>
              <p className={styles.ctaText}>
                Está preparado para gerar impacto, deixar sua marca, construir sua carreira e deixar seu legado?
              </p>
              
              <div className={styles.buttonsContainer}>
                <a href="#cadastro" className={styles.primaryButton}>
                  Quero Fazer Parte
                </a>
                <a href="#sobre" className={styles.secondaryButton}>
                  Conhecer Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={`${styles.floatingElement} ${styles.element1}`}></div>
      <div className={`${styles.floatingElement} ${styles.element2}`}></div>
    </section>
  );
};

export default Agency;
