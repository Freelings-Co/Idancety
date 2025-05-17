import { useEffect, useRef } from 'react';
import '../styles/Store.css';

const Store = () => {
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

  const products = [
    {
      name: 'Camiseta Performance',
      category: 'Vestuário Técnico',
      price: 'R$ 89,90',
      image: 'product-1.jpg'
    },
    {
      name: 'Moletom IDANCETY',
      category: 'Moda Urbana',
      price: 'R$ 159,90',
      image: 'product-2.jpg'
    },
    {
      name: 'Kit Acessórios',
      category: 'Acessórios',
      price: 'R$ 129,90',
      image: 'product-3.jpg'
    },
    {
      name: 'Curso Online',
      category: 'Produtos Digitais',
      price: 'R$ 199,90',
      image: 'product-4.jpg'
    }
  ];

  const specialCollections = [
    'Linhas assinadas por artistas do programa',
    'Edições limitadas de eventos especiais',
    'Colaborações com marcas parceiras',
    'Kits para escolas e projetos sociais'
  ];

  return (
    <section id="loja" className="section store-section" ref={sectionRef}>
      <div className="grid-background"></div>
      <div className="container">
        <h2 className="section-title animate-on-scroll">LOJA IDANCETY</h2>
        
        <div className="store-subtitle animate-on-scroll">
          <h3>PRODUTOS OFICIAIS E EXCLUSIVOS</h3>
        </div>
        
        <div className="store-content">
          <div className="store-info animate-on-scroll">
            <p className="store-intro">
              A Loja IDANCETY oferece uma linha completa de produtos que conectam os fãs e praticantes com o
              movimento:
            </p>
            
            <div className="product-categories">
              <div className="category">
                <div className="category-icon tech-icon"></div>
                <h4>Vestuário Técnico</h4>
                <p>Roupas específicas para dança e performance</p>
              </div>
              
              <div className="category">
                <div className="category-icon urban-icon"></div>
                <h4>Moda Urbana</h4>
                <p>Peças de streetwear com design exclusivo</p>
              </div>
              
              <div className="category">
                <div className="category-icon accessories-icon"></div>
                <h4>Acessórios</h4>
                <p>Itens para prática e apresentação</p>
              </div>
              
              <div className="category">
                <div className="category-icon digital-icon"></div>
                <h4>Produtos Digitais</h4>
                <p>Tutoriais, cursos e música original</p>
              </div>
            </div>
            
            <p className="store-impact">
              Cada compra na loja IDANCETY gera uma porcentagem para o Instituto Dance2Change, criando um ciclo
              sustentável de apoio aos projetos sociais.
            </p>
            
            <div className="special-collections">
              <h4>COLEÇÕES ESPECIAIS:</h4>
              <ul>
                {specialCollections.map((collection, index) => (
                  <li key={index}>{collection}</li>
                ))}
              </ul>
            </div>
            
            <a href="#" className="btn btn-primary store-cta">
              <i className="cart-icon"></i>
              ACESSAR A LOJA
            </a>
          </div>
          
          <div className="store-products animate-on-scroll">
            <div className="products-grid">
              {products.map((product, index) => (
                <div key={index} className="product-card glow-card">
                  <div className="product-image">
                    <div 
                      className="image" 
                      style={{ backgroundImage: `url('../assets/images/${product.image}')` }}
                    ></div>
                    <div className="product-category">{product.category}</div>
                  </div>
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <div className="product-price">{product.price}</div>
                  </div>
                  <button className="product-add-btn">
                    <i className="add-icon"></i>
                    Adicionar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Final Call Section */}
        <div className="final-call animate-on-scroll">
          <h2 className="final-call-title">"O mundo está esperando por você. Mostre seu ID+."</h2>
          
          <div className="final-call-buttons">
            <a href="#inscricoes" className="btn btn-primary">PARTICIPAR</a>
            <a href="#" className="btn btn-secondary">VER APRESENTAÇÃO</a>
            <a href="#" className="btn btn-outline">FALE COM A EQUIPE</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
