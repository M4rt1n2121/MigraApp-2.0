import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    es: {
      title: 'Acerca de la Dirección Nacional de Migración',
      back: 'Volver',
      description: 'Información sobre la Dirección Nacional de Migración y sus servicios.'
    },
    pt: {
      title: 'Sobre a Direção Nacional de Migração',
      back: 'Voltar',
      description: 'Informações sobre a Direção Nacional de Migração e seus serviços.'
    },
    en: {
      title: 'About the National Directorate of Migration',
      back: 'Back',
      description: 'Information about the National Directorate of Migration and its services.'
    },
    fr: {
      title: 'À propos de la Direction nationale des migrations',
      back: 'Retour',
      description: 'Informations sur la Direction nationale des migrations et ses services.'
    },
    zh: {
      title: '关于国家移民局',
      back: '返回',
      description: '有关国家移民局及其服务的信息。'
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
        <p>{t.description}</p>
        {/* Contenido específico sobre la institución */}
      </div>
    </div>
  );
};

export default About;