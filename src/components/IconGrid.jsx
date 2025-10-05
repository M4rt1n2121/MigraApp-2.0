import React from 'react';

const IconGrid = ({ items, language, onItemClick }) => {
  return (
    <div className="icon-grid">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="icon-item"
          onClick={() => onItemClick(item.path)}
        >
          {/* Contenido principal - siempre visible */}
          <div className="icon-main-content">
            <div className="icon-container">
              <span className="material-icons">{item.icon}</span>
            </div>
            <h3>{item.title[language]}</h3>
          </div>
          
          {/* Descripción - solo visible en hover */}
          <div className="icon-description">
            <p>{item.description[language]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconGrid;