import { useEffect, useRef } from 'react';
import styles from '../styles/MusicLab.module.css';

const MusicLab = () => {

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
  return (
    <section id="musiclab" className={styles.musicLabSection} ref={sectionRef}>
      <div 
        className={styles.backgroundImage}
        style={{
          backgroundImage: "url('/src/assets/images/studiobg.webp')"
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
          
          <div className={`${styles.floatingElement} ${styles.element1} animate-on-scroll`}></div>
          <div className={`${styles.floatingElement} ${styles.element2} animate-on-scroll`}></div>
        </div>
      </div>
    </section>
  );
};

export default MusicLab;
