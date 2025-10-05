import IconGrid from '../components/IconGrid';
import { servicesItems } from '../data/appData';

const Services = ({ language }) => {
  return (
    <div className="page services">
      <h2>
        {language === 'es' 
          ? 'Servicios Disponibles' 
          : language === 'pt' 
            ? 'Serviços Disponíveis' 
            : language === 'en'
              ? 'Available Services'
              : language === 'fr'
                ? 'Services Disponibles'
                : '可用服务'
        }
      </h2>
      <IconGrid items={servicesItems} language={language} />
    </div>
  );
};

export default Services;