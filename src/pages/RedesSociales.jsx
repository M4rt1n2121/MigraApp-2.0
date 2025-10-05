import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedesSociales = ({ language }) => {
  const navigate = useNavigate();

  const redesData = [
    { nombre: 'Facebook', url: 'https://facebook.com/migracionuy', icon: 'facebook' },
    { nombre: 'Twitter', url: 'https://twitter.com/migracionuy', icon: 'twitter' },
    { nombre: 'Instagram', url: 'https://instagram.com/migracionuy', icon: 'instagram' }
  ];

  const content = {
    es: {
      title: 'Redes Sociales',
      back: 'Volver',
      seguir: 'Seguir en'
    },
    pt: {
      title: 'Redes Sociais',
      back: 'Voltar',
      seguir: 'Seguir no'
    },
    en: {
      title: 'Social Networks',
      back: 'Back',
      seguir: 'Follow on'
    },
    fr: {
      title: 'Réseaux Sociaux',
      back: 'Retour',
      seguir: 'Suivre sur'
    },
    zh: {
      title: '社交网络',
      back: '返回',
      seguir: '关注'
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
        <div className="redes-list">
          {redesData.map((red, index) => (
            <a 
              key={index} 
              href={red.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="red-social-item"
            >
              <span className="material-icons">{red.icon}</span>
              <span>{t.seguir} {red.nombre}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedesSociales;