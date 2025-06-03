import React from 'react';
import styles from '../styles/OnlineProgram.module.css';

const OnlineProgram = () => {
  const features = [
    { 
      icon: '💻', 
      title: 'Aulas Ao Vivo', 
      desc: 'Aulas interativas com os melhores professores, em tempo real, para você aprender e interagir de qualquer lugar.'
    },
    { 
      icon: '🎓', 
      title: 'Cursos Exclusivos', 
      desc: 'Conteúdo aprofundado em diversos estilos de dança, com técnicas avançadas e dicas exclusivas.'
    },
    { 
      icon: '👥', 
      title: 'Comunidade Global', 
      desc: 'Conecte-se com dançarinos de todo o mundo, compartilhe experiências e faça networking.'
    },
    { 
      icon: '🎥', 
      title: 'Acesso Ilimitado', 
      desc: 'Gravações disponíveis 24/7 para você assistir quando e onde quiser, no seu ritmo.'
    },
    { 
      icon: '🏆', 
      title: 'Desafios Mensais', 
      desc: 'Participe de desafios exclusivos e mostre seu talento para toda a comunidade.'
    },
    { 
      icon: '🎯', 
      title: 'Mentorias', 
      desc: 'Sessões individuais com especialistas para feedback personalizado no seu desenvolvimento.'
    }
  ];

  return (
    <section id="online-program" className={styles.onlineProgramSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>ID+ ONLINE PROGRAM</h2>
          <div className={styles.divider}></div>
          <p className={styles.subtitle}>
            TODOS OS MESES DO ANO temos aulas, cursos e mentorias para VOCÊ, sua crew ou sua escola.
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.desc}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Aprenda onde estiver, continue lapidando suas técnicas e construindo sua identidade de forma contínua ONLINE. Assim, na vida real, você se tornará IMBATÍVEL.
          </p>
          <button className={styles.ctaButton}>
            Conheça Nossos Cursos
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className={`${styles.decorativeElement} ${styles.element1}`}></div>
      <div className={`${styles.decorativeElement} ${styles.element2}`}></div>
    </section>
  );
};

export default OnlineProgram;
