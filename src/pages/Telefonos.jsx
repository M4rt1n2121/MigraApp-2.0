import React from 'react';
import { useNavigate } from 'react-router-dom';

const Telefonos = ({ language }) => {
  const navigate = useNavigate();

  const telefonosData = [
    { departamento: 'Oficina Central', telefono: '+598 2030 1800' },
    { departamento: 'Departamento de Residencias', telefono: '+598 2030 1817' },
    { departamento: 'Inspectoria Aeropuerto Internacional de Carrasco', telefono: '+598  2030 1701 ' }
  ];

  const content = {
    es: {
      title: 'Teléfonos',
      back: 'Volver',
      departamento: 'Departamento',
      telefono: 'Teléfono'
    },
    pt: {
      title: 'Telefones',
      back: 'Voltar',
      departamento: 'Departamento',
      telefono: 'Telefone'
    },
    en: {
      title: 'Telephones',
      back: 'Back',
      departamento: 'Department',
      telefono: 'Phone'
    },
    fr: {
      title: 'Téléphones',
      back: 'Retour',
      departamento: 'Département',
      telefono: 'Téléphone'
    },
    zh: {
      title: '电话',
      back: '返回',
      departamento: '部门',
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
        <div className="telefonos-list">
          {telefonosData.map((item, index) => (
            <div key={index} className="telefono-item">
              <h3>{item.departamento}</h3>
              <a href={`tel:${item.telefono}`} className="telefono-link">
                {item.telefono}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Telefonos;