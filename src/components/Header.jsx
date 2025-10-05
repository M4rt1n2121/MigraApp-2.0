import { languages } from '../data/appData';
/*Barra de Navegacíon con iconos y selector de lenguaje*/ 
const Header = ({ currentPage, setCurrentPage, language, setLanguage }) => {
  const getTitleText = () => {
    switch(language) {
      case 'es': return 'Guía Migrantes UY';
      case 'pt': return 'Guia de Migrantes UY';
      case 'en': return 'Migrants Guide UY';
      case 'fr': return 'Guide des Migrants UY';
      case 'zh': return '乌拉圭移民指南';
      default: return 'Guía Migrantes UY';
    }
  };
/*logo de DNM*/ 
  return (
    <header className="header">
      <div className="header-top">  
        <div className="logo">
          <img src="/dnm.gif" alt="Logo Guía Migrante UY" className="logo-image"
            width="40" 
            height="40"
          />
          <h1>{getTitleText()}</h1>
        </div>
        <div className="language-selector">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Seleccionar idioma"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <nav className="nav">
        <button 
          className={currentPage === 'home' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('home')}
          aria-label="Inicio"
        >
          <span className="material-icons">home</span>
          <span className="nav-text">
            {language === 'es' ? 'Inicio' : 
             language === 'pt' ? 'Início' : 
             language === 'en' ? 'Home' :
             language === 'fr' ? 'Accueil' : '首页'}
          </span>
        </button>
        
        <button 
          className={currentPage === 'procedures' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('procedures')}
          aria-label="Trámites"
        >
          <span className="material-icons">description</span>
          <span className="nav-text">
            {language === 'es' ? 'Trámites' : 
             language === 'pt' ? 'Tramites' : 
             language === 'en' ? 'Procedures' :
             language === 'fr' ? 'Démarches' : '手续'}
          </span>
        </button>

        <button 
          className={currentPage === 'services' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('services')}
          aria-label="Servicios"
        >
          <span className="material-icons">local_hospital</span>
          <span className="nav-text">
            {language === 'es' ? 'Servicios' : 
             language === 'pt' ? 'Serviços' : 
             language === 'en' ? 'Services' :
             language === 'fr' ? 'Services' : '服务'}
          </span>
        </button>
        <button 
          className={currentPage === 'Migra Movil' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('migra-movil')}>
          
        
          <span className="material-icons">airport_shuttle</span>
          <span className="nav-text">
            {language === 'es' ? 'Migra Movil' : 
             language === 'pt' ? 'Migra Móvel' : 
             language === 'en' ? 'Migra Mobile' :
             language === 'fr' ? 'Migra Movil' : '米格拉移动'}
          </span>
        </button>
        
              
        <button 
          className={currentPage === 'community' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentPage('community')}
          aria-label="Comunidad"
        >
          <span className="material-icons">people</span>
          <span className="nav-text">
            {language === 'es' ? 'Comunidad' : 
             language === 'pt' ? 'Comunidade' : 
             language === 'en' ? 'Community' :
             language === 'fr' ? 'Communauté' : '社区'}
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;