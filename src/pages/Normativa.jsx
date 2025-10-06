import React from 'react';
import { useNavigate } from 'react-router-dom';

const Normativa = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    es: {
      title: 'Normativa Migratoria',
      description: 'Encuentra toda la normativa migratoria vigente en Uruguay',
      back: 'Volver',
      leyes: 'Leyes y Reglamentos',
      ley18250: 'Ley 18.250 - Migración',
      ley18250Desc: 'Ley de Migración del Uruguay',
      verOnline: 'Ver en línea'
    },
    pt: {
      title: 'Regulamentos de Imigração',
      description: 'Encontre todas as regulamentações de imigração atuais no Uruguai.',
      back: 'Voltar',
      leyes: 'Leis e Regulamentos',
      ley18250: 'Lei 18.250 - Migração',
      ley18250Desc: 'Lei de Migração do Uruguai',
      verOnline: 'Ver online'
    },
    en: {
      title: 'Immigration Regulations',
      description: 'Find all the current immigration regulations in Uruguay',
      back: 'Back',
      leyes: 'Laws and Regulations',
      ley18250: 'Law 18.250 - Migration',
      ley18250Desc: 'Uruguay Migration Law',
      verOnline: 'View online'
    },
    fr: {
      title: 'Règlements sur l immigration',
      description: 'Retrouvez toutes les réglementations d immigration en vigueur en Uruguay.',
      back: 'Retour',
      leyes: 'Lois et Règlements',
      ley18250: 'Loi 18.250 - Migration',
      ley18250Desc: 'Loi sur la Migration de l\'Uruguay',

      verOnline: 'Voir en ligne'
    },
    zh: {
      title: '移民法规',
      description: '查找乌拉圭现行的所有移民法规。',
      back: '返回',
      leyes: '法律和法规',
      ley18250: '法律 18.250 - 移民法',
      ley18250Desc: '乌拉圭移民法',
      verOnline: '在线查看'
    }
  };

  const t = content[language];

  // Datos de normativas
  const normativas = [
    {
      id: 1,
      titulo: t.ley18250,
      descripcion: t.ley18250Desc,
      url: 'https://www.impo.com.uy/bases/leyes/18250-2008',
      fecha: '2008'
    },
    {
      id: 2,
      titulo: 'Decreto 394/009',
      descripcion: 'Reglamentación de la Ley de Migración',
      url: 'https://www.impo.com.uy/bases/decretos/394-2009',
      fecha: '2009'
    },
    {
      id: 3,
      titulo: 'Ley 19.254',
      descripcion: 'Modificaciones a la Ley de Migración',
      url: 'https://www.impo.com.uy/bases/leyes/19254-2014',
      fecha: '2014'
    },
    {
      id: 4,
      titulo: 'Ley 18.076',
      descripcion: 'Derecho al refugio y a los refugiados.',
      url: 'https://www.impo.com.uy/bases/leyes/18076-2006',
      fecha: '2006'
    },
    {
      id: 5,
      titulo: 'Decreto 138/024',
      descripcion: 'Creacion del Programa de Residencias por Arraigo',
      url: 'https://www.impo.com.uy/bases/decretos/138-2024',
      fecha: '2024'
    },
    {
      id: 6,
      titulo: 'Decreto 45/023',
      descripcion: 'Reglamentacion del Art. 33 de la Ley 18.250',
      url: 'https://www.impo.com.uy/bases/decretos/45-2023',
      fecha: '2023'
    }
  ];

  return (
    <div className="page-container">
      <header className="page-header">
        <button onClick={() => navigate(-1)} className="back-button">
          ← {t.back}
        </button>
        <h1>{t.title}</h1>
      </header>
      
      <div className="page-content">
        <p className="page-description">{t.description}</p>
        
        <div className="normativas-section">
          <h2>{t.leyes}</h2>
          
          <div className="normativas-list">
            {normativas.map((normativa) => (
              <div key={normativa.id} className="normativa-card">
                <div className="normativa-header">
                  <h3>{normativa.titulo}</h3>
                  <span className="normativa-fecha">{normativa.fecha}</span>
                </div>
                <p className="normativa-desc">{normativa.descripcion}</p>
                <div className="normativa-actions">
                  <a 
                    href={normativa.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <span className="material-icons">open_in_new</span>
                    {t.verOnline}
                  </a>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="info-section">
          <h3>Información Importante</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="material-icons">info</span>
              <div>
                <h4>Vigencia</h4>
                <p>Todas las normativas mostradas se encuentran vigentes</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="material-icons">verified</span>
              <div>
                <h4>Fuente Oficial</h4>
                <p>Documentos obtenidos de IMPO - Oficina oficial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Normativa;