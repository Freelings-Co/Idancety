import React from 'react';
import styles from '../styles/Studio.module.css';

const Studio = () => {
  const tags = ['Ensaios', 'Aulas', 'Cursos', 'Workshops', 'Gravações'];
  
  return (
    <section id="studio" className={styles.studioSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.animatedBackground}>
        <div className={styles.radialGradient1}></div>
        <div className={styles.radialGradient2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>NOVA UNIDADE</span>
          <h2 className={styles.title}>ID+ STUDIO</h2>
          <div className={styles.divider}></div>
          
          <p className={styles.description}>
            Um <span className={styles.highlight}>espaço interativo</span> projetado para impulsionar a criatividade e o aprendizado através de ensaios, aulas, cursos, workshops e gravações de conteúdo.
          </p>
          
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          
          <div className={styles.ctaBox}>
            <p className={styles.ctaText}>
              <span className={styles.highlight}>Em breve:</span> Novas unidades no Brasil e na Costa Rica, com espaços modernos incluindo escritório e galpão.
            </p>
            <a href="#contato" className={styles.ctaButton}>
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
