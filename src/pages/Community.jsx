import IconGrid from '../components/IconGrid';
import { communityItems } from '../data/appData';
/*Comunidad*/
const Community = ({ language }) => {
  return (
    <div className="page community">
      <h2>
        {language === 'es' 
          ? 'Comunidad y Redes' 
          : language === 'pt' 
            ? 'Comunidade e Redes' 
            : language === 'en'
              ? 'Community and Networks'
              : language === 'fr'
                ? 'Communauté et Réseaux'
                : '社区和网络'
        }
      </h2>
      <IconGrid items={communityItems} language={language} />
    </div>
  );
};

export default Community;