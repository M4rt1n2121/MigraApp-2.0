import { useState } from 'react';

const EmergencyButton = ({ language }) => {
  const [isActive, setIsActive] = useState(false);

  const emergencyContacts = [
    { 
      name: {
        es: 'Emergencias',
        pt: 'Emergências',
        en: 'Emergencies',
        fr: 'Urgences',
        zh: '紧急情况'
      }, 
      number: '911', 
      icon: 'local_police' 
    },
    { 
      name: {
        es: 'Apoyo MIDES',
        pt: 'Apoio MIDES',
        en: 'MIDES Support',
        fr: 'Soutien MIDES',
        zh: 'MIDES 支持'
      }, 
      number: '0800 8798', 
      icon: 'support' 
    },
    { 
      name: {
        es: 'Apoyo Psicológico',
        pt: 'Apoio Psicológico',
        en: 'Psychological Support',
        fr: 'Soutien Psychologique',
        zh: '心理支持'
      }, 
      number: '0800 1920', 
      icon: 'psychology' 
    }
  ];

  const handleEmergencyClick = () => {
    setIsActive(!isActive);
    if (!isActive) {
      // Aquí se podría implementar el envío de una alerta
      console.log('Botón de emergencia activado');
    }
  };

  const getButtonText = () => {
    switch(language) {
      case 'es': return 'EMERGENCIA';
      case 'pt': return 'EMERGÊNCIA';
      case 'en': return 'EMERGENCY';
      case 'fr': return 'URGENCE';
      case 'zh': return '紧急情况';
      default: return 'EMERGENCY';
    }
  };

  const getTitleText = () => {
    switch(language) {
      case 'es': return 'Contactos de emergencia';
      case 'pt': return 'Contactos de emergência';
      case 'en': return 'Emergency contacts';
      case 'fr': return 'Contacts d\'urgence';
      case 'zh': return '紧急联系人';
      default: return 'Emergency contacts';
    }
  };

  const getCloseText = () => {
    switch(language) {
      case 'es': return 'Cerrar';
      case 'pt': return 'Fechar';
      case 'en': return 'Close';
      case 'fr': return 'Fermer';
      case 'zh': return '关闭';
      default: return 'Close';
    }
  };

  return (
    <div className={`emergency-button ${isActive ? 'active' : ''}`}>
      <button 
        className="emergency-btn"
        onClick={handleEmergencyClick}
        aria-label="Botón de emergencia"
      >
        <span className="material-icons">emergency</span>
        <span>{getButtonText()}</span>
      </button>

      {isActive && (
        <div className="emergency-contacts">
          <h3>
            {getTitleText()}
          </h3>
          <div className="contacts-list">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="contact-item">
                <span className="material-icons">{contact.icon}</span>
                <div className="contact-info">
                  <span className="contact-name">{contact.name[language] || contact.name.es}</span>
                  <a href={`tel:${contact.number}`} className="contact-number">
                    {contact.number}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button 
            className="close-emergency"
            onClick={() => setIsActive(false)}
          >
            {getCloseText()}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmergencyButton;