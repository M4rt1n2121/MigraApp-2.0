import IconGrid from '../components/IconGrid';
import { proceduresItems } from '../data/appData';

const Procedures = ({ language }) => {
  return (
    <div className="page procedures">
      <h2>
        {language === 'es' 
          ? 'Trámites Importantes' 
          : language === 'pt' 
            ? 'Tramites Importantes' 
            : language === 'en'
              ? 'Important Procedures'
              : language === 'fr'
                ? 'Démarches Importantes'
                : '重要手续'
        }
      </h2>
      <IconGrid items={proceduresItems} language={language} />
    </div>
  );
};

export default Procedures;