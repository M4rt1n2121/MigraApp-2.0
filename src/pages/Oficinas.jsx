import React from 'react';
import { useNavigate } from 'react-router-dom';

const Oficinas = ({ language }) => {
  const navigate = useNavigate();

  const oficinasData = [
    { 
      nombre: 'Oficina Central', 
      direccion: 'Av. Libertador 1234, Montevideo',
      telefono: '+598 1234 5678'
    },
    { 
      nombre: 'Inspectoría Este', 
      direccion: 'Av. Italia 567, Montevideo',
      telefono: '+598 1234 5679'
    }
  ];

  const content = {
    es: {
      title: 'Oficinas e Inspectorías',
      back: 'Volver',
      direccion: 'Dirección',
      telefono: 'Teléfono'
    },
    pt: {
      title: 'Oficinas e Inspetorias',
      back: 'Voltar',
      direccion: 'Endereço',
      telefono: 'Telefone'
    },
    en: {
      title: 'Offices and Inspectorates',
      back: 'Back',
      direccion: 'Address',
      telefono: 'Phone'
    },
    fr: {
      title: 'Bureaux et inspections',
      back: 'Retour',
      direccion: 'Adresse',
      telefono: 'Téléphone'
    },
    zh: {
      title: '办公室和检查机构',
      back: '返回',
      direccion: '地址',
      telefono: '电话'
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
        <div className="oficinas-list">
          {oficinasData.map((oficina, index) => (
            <div key={index} className="oficina-item">
              <h3>{oficina.nombre}</h3>
              <p><strong>{t.direccion}:</strong> {oficina.direccion}</p>
              <p><strong>{t.telefono}:</strong> 
                <a href={`tel:${oficina.telefono}`} className="telefono-link">
                  {oficina.telefono}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Oficinas;