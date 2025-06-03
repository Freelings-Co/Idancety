import React from 'react';
import styles from '../styles/MusicLab.module.css';

const MusicLab = () => {
  return (
    <section id="musiclab" className={styles.musicLabSection}>
      <div 
        className={styles.backgroundImage}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
        }}
      ></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>ID+ MUSICLAB</h2>
          <div className={styles.divider}></div>
          
          <div className={styles.quoteBox}>
            <p className={styles.quote}>
              Quem dança dança com batidas, sons e vozes. Aqui nossos beatmakers criam o som que vai fazer sua cidade dançar. Novas estrelas vão nascer e juntos vamos continuar a transformar. Aumente o volume!
            </p>
          </div>
          
          <div className={`${styles.floatingElement} ${styles.element1}`}></div>
          <div className={`${styles.floatingElement} ${styles.element2}`}></div>
        </div>
      </div>
    </section>
  );
};

export default MusicLab;
