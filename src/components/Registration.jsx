import { useState } from 'react';
import '../styles/Registration.css';
import CountdownTimer from './CountdownTimer';

const Registration = () => {
  const [targetDate] = useState('2025-08-31T23:59:59');
  return (
    <section id="inscricao" className="registration-section">
      <div className="container">
        <div className="registration-content">
          <h2>Faça sua inscrição</h2>
          <p>Clique no botão abaixo para se inscrever no nosso evento</p>
          
          <div className="countdown-section">
            <h3>Inscrições encerram em:</h3>
            <CountdownTimer targetDate={targetDate} />
          </div>
          
          <div className="registration-button-container">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfVeZH8Fl6BjoIa4BrgHGyHiOXAgI1QbbahgTe7euW34sr3rg/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
              className="registration-button"
            >
              Fazer Inscrição
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
