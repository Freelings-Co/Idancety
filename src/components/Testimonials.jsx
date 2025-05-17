import { useEffect, useRef, useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      quote: "O IDANCETY mudou completamente minha visão sobre o que posso alcançar como artista. Mais que técnica, aprendi a transformar minha história pessoal em arte com propósito.",
      author: "Mariana Silva",
      role: "22 anos, Participante da Edição Piloto",
      image: "testimonial-1.jpg"
    },
    {
      quote: "Como mentor, vi jovens talentos com potencial incrível, mas sem oportunidades, transformarem-se em artistas completos em poucas semanas. O modelo do IDANCETY é revolucionário.",
      author: "Ricardo Fernandes",
      role: "Coreógrafo e Mentor",
      image: "testimonial-2.jpg"
    },
    {
      quote: "Investir no IDANCETY significa apostar na transformação cultural com bases sólidas e métricas claras. A combinação de propósito social e formato inovador cria um caso único no mercado.",
      author: "Patrícia Mendonça",
      role: "Investidora",
      image: "testimonial-3.jpg"
    }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="depoimentos" className="section testimonials-section" ref={sectionRef}>
      <div className="grid-background"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">DEPOIMENTOS</h2>
        
        <div className="testimonials-container animate-on-scroll">
          <div className="testimonials-slider">
            <div 
              className="testimonials-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card glow-card">
                    <div className="testimonial-quote">
                      <div className="quote-icon"></div>
                      <p>{testimonial.quote}</p>
                    </div>
                    
                    <div className="testimonial-author">
                      <div className="author-image">
                        <div 
                          className="image" 
                          style={{ backgroundImage: `url('../assets/images/${testimonial.image}')` }}
                        ></div>
                      </div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonials-controls">
            <div className="dots">
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="video-teaser animate-on-scroll">
          <h3>GALERIA / VÍDEO PROMOCIONAL</h3>
          <div className="video-container glow-effect">
            <div className="video-placeholder">
              <div className="play-button">
                <div className="play-icon"></div>
              </div>
              <div className="video-title">
                IDANCETY - Seu ID+ pode mudar a cidade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
