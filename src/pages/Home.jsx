import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconGrid from '../components/IconGrid';
import EmergencyButton from '../components/EmergencyButton';
import { homeItems } from '../data/appData';

const Home = ({ language }) => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="page home">
      <div className="welcome-banner">
        <h2>
          {language === 'es' 
            ? 'Bienvenido a Uruguay' 
            : language === 'pt' 
              ? 'Bem-vindo ao Uruguai' 
              : language === 'en'
                ? 'Welcome to Uruguay'
                : language === 'fr'
                  ? 'Bienvenue en Uruguay'
                  : '欢迎来到乌拉圭'
          }
        </h2>
        <p>
          {language === 'es' 
            ? 'Esta aplicación te ayudará a encontrar servicios, hacer trámites y conectarte con la comunidad'
            : language === 'pt' 
              ? 'Este aplicativo irá ajudá-lo a encontrar serviços, realizar tramites e conectar-se com a comunidade'
              : language === 'en'
                ? 'This application will help you find services, complete procedures and connect with the community'
                : language === 'fr'
                  ? 'Cette application vous aidera à trouver des services, effectuer des démarches et vous connecter avec la communauté'
                  : '此应用程序将帮助您查找服务、完成手续并与社区联系'
          }
        </p>
      </div>

      <IconGrid 
        items={homeItems} 
        language={language} 
        onItemClick={handleItemClick}
      />
      
      <div className="emergency-section">
        <EmergencyButton language={language} />
      </div>

      <div className="quick-guide">
        <h3>
          {language === 'es' 
            ? 'Al llegar a Uruguay'
            : language === 'pt' 
              ? 'Ao chegar no Uruguai'
              : language === 'en'
                ? 'Upon arriving in Uruguay'
                : language === 'fr'
                  ? 'À l\'arrivée en Uruguay'
                  : '抵达乌拉圭后'
          }
        </h3>
        <div className="guide-steps">
          <div className="step">
            <span className="step-number">1</span>
            <p>
              {language === 'es' 
                ? 'Evita problemas futuros y registra tu ingreso al país ante Migración'
                : language === 'pt' 
                  ? 'Evite problemas futuros e registre sua entrada no país na Migração'
                  : language === 'en'
                    ? 'Avoid future problems and register your entry into the country with Migration'
                    : language === 'fr'
                      ? 'Évitez les problèmes futurs et enregistrez votre entrée dans le pays auprès de la Migration'
                      : '避免未来的问题，并在移民局登记入境'
              }
            </p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <p>
              {language === 'es' 
                ? 'Ve al apartado de Trámites y realiza el que corresponda, tal como inicio de residencia o certificado para solicitantes de refugio.'
                : language === 'pt' 
                  ? 'Vá para a seção de Tramites e faça o que for necessário, como início de residência ou certificado para solicitantes de refúgio.'
                  : language === 'en'
                    ? 'Go to the Procedures section and complete the relevant one, such as starting residency or obtaining a certificate for asylum seekers.'
                    : language === 'fr'
                      ? 'Allez dans la section Démarches et effectuez celle qui correspond, comme le début de la résidence ou le certificat pour les demandeurs d\'asile.'
                      : '前往"手续"部分并完成相关手续，例如开始居留或为寻求庇护者获取证书。'
              }
            </p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <p>
              {language === 'es' 
                ? 'Una vez iniciado el tramite puedes soliicitar una constancia para preasentar ante los Servicios de Salud y acceder a ella.'
                : language === 'pt' 
                  ? 'Uma vez iniciado o tramite você pode solicitar uma constância para apresentar aos Servicios de Saúde e acessá-la.'
                  : language === 'en'
                    ? 'Once the procedure has started, you can request a certificate to present to Health Services and access it.'
                    : language === 'fr'
                      ? 'Une fois la démarche commencée, vous pouvez demander un certificat à présenter aux Services de Santé et y accéder.'
                      : '一旦手续开始，您可以申请一份证书以提交给卫生服务部门并获得访问权限。'
              }
            </p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <p>
              {language === 'es' 
                ? 'Inscribe a tus hijos en la escuela'
                : language === 'pt' 
                  ? 'Inscreva seus filhos na escola'
                  : language === 'en'
                    ? 'Enroll your children in school'
                    : language === 'fr'
                      ? 'Inscrivez vos enfants à l\'école'
                      : '为您的孩子办理学校入学'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;