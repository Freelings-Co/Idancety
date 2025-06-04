import React from 'react';
import styles from '../styles/MasterClass.module.css';

const MasterClass = () => {
  return (
    <section id="masterclass" className={styles.masterClassSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ID+ MASTER CLASS</h2>
          <div className={styles.divider}></div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              Programa de aulas, cursos e mentorias feitos com foco na construção da sua <span className={styles.highlight}>IDENTIDADE</span>. Um time seleto de professores, mentores e instrutores nacionais e internacionais te espera para te auxiliar a evoluir com passos certos rumo ao seu ritmo e sucessos.
            </p>
            <p className={styles.description}>
              <span className={styles.highlight}>Corpo, mente e espírito em MOVIMENTO.</span>
            </p>
            <p className={`${styles.description} ${styles.highlight}`}>
              Vamos juntos? Agende agora mesmo aulas em grupo ou particulares.
            </p>
            <a href="#agendamento" className={styles.ctaButton}>
              Agendar Aula
            </a>
          </div>
          
          <div className={styles.imageContainer}>
            <img 
              src="src/assets/images/masterclass.webp" 
              alt="Aula de dança" 
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.noticeBox}>
          <p className={styles.noticeText}>
            <span className={styles.noticeHighlight}>Cadastre agora mesmo sua escola</span> em nosso plano ANUAL e obtenha todos os benefícios de ID+ IDancety City of Dancers.
          </p>
        </div>
      </div>
      
    
    </section>
  );
};

export default MasterClass;
