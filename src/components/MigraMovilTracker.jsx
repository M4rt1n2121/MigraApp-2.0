import { useState, useEffect } from 'react';

const MigraMovilTracker = ({ language }) => {
  const [locations, setLocations] = useState([
    { id: 1, name: 'Montevideo Centro', address: 'Av. 18 de Julio 1452', schedule: 'Lunes a Viernes 9:00-16:00', distance: '2.5 km' },
    { id: 2, name: 'Ciudad Vieja', address: 'Pza. Independencia 776', schedule: 'Martes y Jueves 10:00-15:00', distance: '3.8 km' },
    { id: 3, name: 'Pocitos', address: 'Av. Brasil 2345', schedule: 'Miércoles y Viernes 9:30-14:30', distance: '5.2 km' }
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="migra-movil-tracker">
      <h3>
        {language === 'es' 
          ? 'Migra Móvil - Ubicaciones' 
          : 'Migra Mobile - Locations'
        }
      </h3>
      
      <div className="locations-list">
        {locations.map(location => (
          <div 
            key={location.id} 
            className={`location-item ${selectedLocation === location.id ? 'active' : ''}`}
            onClick={() => setSelectedLocation(
              selectedLocation === location.id ? null : location.id
            )}
          >
            <div className="location-header">
              <span className="material-icons">directions_bus</span>
              <div className="location-info">
                <h4>{location.name}</h4>
                <p>{location.address}</p>
              </div>
              <span className="distance">{location.distance}</span>
            </div>
            
            {selectedLocation === location.id && (
              <div className="location-details">
                <p><strong>{language === 'es' ? 'Horario:' : 'Schedule:'}</strong> {location.schedule}</p>
                <button className="schedule-btn">
                  {language === 'es' ? 'Agendar Turno' : 'Schedule Appointment'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MigraMovilTracker;