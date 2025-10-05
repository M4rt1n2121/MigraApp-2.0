import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAQ = ({ language }) => {
  const navigate = useNavigate();

  const faqData = [
    {
      pregunta: '¿Cómo solicitar residencia?',
      respuesta: 'Para solicitar residencia debe presentar...'
    },
    {
      pregunta: '¿Qué documentos necesito?',
      respuesta: 'Los documentos requeridos son...'
    }
  ];

  const content = {
    es: {
      title: 'Preguntas Frecuentes',
      back: 'Volver'
    },
    pt: {
      title: 'Perguntas Frequentes',
      back: 'Voltar'
    },
    en: {
      title: 'Frequently Asked Questions',
      back: 'Back'
    },
    fr: {
      title: 'Questions Fréquentes',
      back: 'Retour'
    },
    zh: {
      title: '常见问题',
      back: '返回'
    }
  };

  const t = content[language];

  return (
    <div className="page-container">
      <header className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← {t.back}
        </button>
        <h1>{t.title}</h1>
      </header>
      
      <div className="page-content">
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <h3>{item.pregunta}</h3>
              <p>{item.respuesta}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;