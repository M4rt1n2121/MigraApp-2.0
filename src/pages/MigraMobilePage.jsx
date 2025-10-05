import React, { useState } from 'react';

const MigraMobilePage = ({ language = 'es' }) => {
  const [activeTab, setActiveTab] = useState('ubicacion');

  // Traducciones
  const translations = {
    es: {
      title: "Migra Móvil",
      subtitle: "Consulta las próximas ubicaciones y agenda tu turno",
      ubicaciones: "📍 Ubicaciones",
      agenda: "📅 Mi Turno",
      proximasUbicaciones: "Próximas Ubicaciones",
      ubicacion: "Ubicación",
      fecha: "Fecha",
      horario: "Horario",
      direccion: "Dirección",
      municipio: "Municipio",
      cuposDisponibles: "cupos disponibles",
      agendarTurno: "Agendar Turno",
      miTurno: "Mi Turno Agendado",
      turnoConfirmado: "Turno Confirmado",
      codigoTurno: "Código",
      hora: "Hora",
      estado: "Estado",
      confirmado: "Confirmado",
      cancelarTurno: "Cancelar Turno",
      noTurnos: "No tienes turnos agendados",
      instrucciones: "Selecciona una ubicación para agendar tu turno",
      agendarPara: "Agendar Turno",
      nombre: "Nombre completo",
      cedula: "Cédula de identidad",
      email: "Email",
      telefono: "Teléfono",
      tramite: "Trámite",
      consulta: "Consulta General",
      residencia: "Solicitud de Residencia",
      visa: "Solicitud de Visa",
      documentacion: "Permiso de Menor",
      cancelar: "Cancelar",
      confirmarTurno: "Confirmar Turno",
      turnoAgendado: "Turno agendado exitosamente para",
      seleccionarUbicacion: "Seleccionar ubicación"
    },
    en: {
      title: "Migra Mobile",
      subtitle: "Check upcoming locations and schedule your appointment",
      ubicaciones: "📍 Locations",
      agenda: "📅 My Appointment",
      proximasUbicaciones: "Upcoming Locations",
      ubicacion: "Location",
      fecha: "Date",
      horario: "Schedule",
      direccion: "Address",
      municipio: "Municipality",
      cuposDisponibles: "slots available",
      agendarTurno: "Schedule",
      miTurno: "My Appointment",
      turnoConfirmado: "Appointment Confirmed",
      codigoTurno: "Code",
      hora: "Time",
      estado: "Status",
      confirmado: "Confirmed",
      cancelarTurno: "Cancel",
      noTurnos: "No scheduled appointments",
      instrucciones: "Select a location to schedule",
      agendarPara: "Schedule Appointment",
      nombre: "Full name",
      cedula: "ID number",
      email: "Email",
      telefono: "Phone",
      tramite: "Procedure",
      consulta: "General Inquiry",
      residencia: "Residence Application",
      visa: "Visa Application",
      documentacion: "Minor Permit",
      cancelar: "Cancel",
      confirmarTurno: "Confirm",
      turnoAgendado: "Appointment scheduled for",
      seleccionarUbicacion: "Select location"
    },
    pt: {
      title: "Migra Móvel",
      subtitle: "Consulte os próximos locais e agende seu horário",
      ubicaciones: "📍 Locais",
      agenda: "📅 Meu Horário",
      proximasUbicaciones: "Próximos Locais",
      ubicacion: "Localização",
      fecha: "Data",
      horario: "Horário",
      direccion: "Endereço",
      municipio: "Município",
      cuposDisponibles: "vagas disponíveis",
      agendarTurno: "Agendar",
      miTurno: "Meu Horário",
      turnoConfirmado: "Horário Confirmado",
      codigoTurno: "Código",
      hora: "Hora",
      estado: "Status",
      confirmado: "Confirmado",
      cancelarTurno: "Cancelar",
      noTurnos: "Sem horários agendados",
      instrucciones: "Selecione um local para agendar",
      agendarPara: "Agendar Horário",
      nombre: "Nome completo",
      cedula: "Número de identidade",
      email: "Email",
      telefono: "Telefone",
      tramite: "Trâmite",
      consulta: "Consulta Geral",
      residencia: "Solicitação de Residência",
      visa: "Solicitação de Visto",
      documentacion: "Permissão de Menor",
      cancelar: "Cancelar",
      confirmarTurno: "Confirmar",
      turnoAgendado: "Horário agendado para",
      seleccionarUbicacion: "Selecionar local"
    },
    fr: {
      title: "Migra Mobile",
      subtitle: "Consultez les prochains emplacements et prenez rendez-vous",
      ubicaciones: "📍 Emplacements",
      agenda: "📅 Mon Rendez-vous",
      proximasUbicaciones: "Prochains Emplacements",
      ubicacion: "Emplacement",
      fecha: "Date",
      horario: "Horaire",
      direccion: "Adresse",
      municipio: "Municipalité",
      cuposDisponibles: "créneaux disponibles",
      agendarTurno: "Prendre RDV",
      miTurno: "Mon Rendez-vous",
      turnoConfirmado: "Rendez-vous Confirmé",
      codigoTurno: "Code",
      hora: "Heure",
      estado: "Statut",
      confirmado: "Confirmé",
      cancelarTurno: "Annuler",
      noTurnos: "Aucun rendez-vous",
      instrucciones: "Sélectionnez un emplacement",
      agendarPara: "Prendre Rendez-vous",
      nombre: "Nom complet",
      cedula: "Numéro d'identité",
      email: "Email",
      telefono: "Téléphone",
      tramite: "Démarche",
      consulta: "Consultation Générale",
      residencia: "Demande de Résidence",
      visa: "Demande de Visa",
      documentacion: "Permis pour Mineur",
      cancelar: "Annuler",
      confirmarTurno: "Confirmer",
      turnoAgendado: "Rendez-vous planifié pour",
      seleccionarUbicacion: "Sélectionner"
    },
    zh: {
      title: "移动移民服务",
      subtitle: "查询地点并预约时间",
      ubicaciones: "📍 地点",
      agenda: "📅 我的预约",
      proximasUbicaciones: "即将到来的地点",
      ubicacion: "地点",
      fecha: "日期",
      horario: "时间",
      direccion: "地址",
      municipio: "市政区域",
      cuposDisponibles: "可用名额",
      agendarTurno: "预约",
      miTurno: "我的预约",
      turnoConfirmado: "预约已确认",
      codigoTurno: "代码",
      hora: "时间",
      estado: "状态",
      confirmado: "已确认",
      cancelarTurno: "取消",
      noTurnos: "没有预约",
      instrucciones: "选择地点预约",
      agendarPara: "预约",
      nombre: "全名",
      cedula: "身份证号码",
      email: "电子邮件",
      telefono: "电话",
      tramite: "手续类型",
      consulta: "一般咨询",
      residencia: "居留申请",
      visa: "签证申请",
      documentacion: "未成年人许可",
      cancelar: "取消",
      confirmarTurno: "确认",
      turnoAgendado: "成功预约",
      seleccionarUbicacion: "选择地点"
    }
  };

  const t = translations[language] || translations.es;

  // Datos de ejemplo - ubicaciones futuras del Migra Móvil
  const ubicacionesFuturas = [
    {
      id: 1,
      fecha: '2024-12-15',
      dia: language === 'es' ? 'Lun 15 Dic' : 
           language === 'en' ? 'Mon Dec 15' :
           language === 'pt' ? 'Seg 15 Dez' :
           language === 'fr' ? 'Lun 15 Déc' : '12月15日 周一',
      horario: '09:00 - 16:00',
      ubicacion: language === 'es' ? 'Plaza Independencia' :
                language === 'en' ? 'Independence Square' :
                language === 'pt' ? 'Praça Independência' :
                language === 'fr' ? 'Place Indépendance' : '独立广场',
      direccion: 'Av. 18 de Julio 1450',
      municipio: 'Montevideo',
      cuposDisponibles: 15,
      cuposTotales: 30
    },
    {
      id: 2,
      fecha: '2024-12-16',
      dia: language === 'es' ? 'Mar 16 Dic' : 
           language === 'en' ? 'Tue Dec 16' :
           language === 'pt' ? 'Ter 16 Dez' :
           language === 'fr' ? 'Mar 16 Déc' : '12月16日 周二',
      horario: '10:00 - 17:00',
      ubicacion: language === 'es' ? 'Mercado Agrícola' :
                language === 'en' ? 'Agricultural Market' :
                language === 'pt' ? 'Mercado Agrícola' :
                language === 'fr' ? 'Marché Agricole' : '农产品市场',
      direccion: 'Av. Millán 2700',
      municipio: 'Montevideo',
      cuposDisponibles: 8,
      cuposTotales: 25
    },
    {
      id: 3,
      fecha: '2024-12-17',
      dia: language === 'es' ? 'Mié 17 Dic' : 
           language === 'en' ? 'Wed Dec 17' :
           language === 'pt' ? 'Qua 17 Dez' :
           language === 'fr' ? 'Mer 17 Déc' : '12月17日 周三',
      horario: '08:30 - 15:30',
      ubicacion: language === 'es' ? 'Complejo América' :
                language === 'en' ? 'America Complex' :
                language === 'pt' ? 'Complexo América' :
                language === 'fr' ? 'Complexe América' : '美洲大楼',
      direccion: 'Av. Garzón 1500',
      municipio: 'Montevideo',
      cuposDisponibles: 22,
      cuposTotales: 35
    }
  ];

  return (
    <div className="migra-mobile-page">
      {/* Header */}
      <div className="migra-header">
        <div className="migra-title">
          <span className="material-icons" style={{ fontSize: '2rem', color: '#2874a6' }}>directions_bus</span>
          <h1>{t.title}</h1>
        </div>
        <p className="migra-subtitle">{t.subtitle}</p>
      </div>

      {/* Tabs de Navegación */}
      <div className="migra-tabs">
        <button
          onClick={() => setActiveTab('ubicacion')}
          className={`migra-tab ${activeTab === 'ubicacion' ? 'active' : ''}`}
        >
          {t.ubicaciones}
        </button>
        <button
          onClick={() => setActiveTab('agenda')}
          className={`migra-tab ${activeTab === 'agenda' ? 'active' : ''}`}
        >
          {t.agenda}
        </button>
      </div>

      {/* Contenido según tab activo */}
      <div className="migra-content">
        {activeTab === 'ubicacion' ? (
          <UbicacionesView ubicaciones={ubicacionesFuturas} t={t} language={language} />
        ) : (
          <AgendaView t={t} language={language} />
        )}
      </div>
    </div>
  );
};

// Componente para ver las ubicaciones
const UbicacionesView = ({ ubicaciones, t, language }) => {
  const [ubicacionSeleccionada, setUbicacionSeleccionada] = useState(null);

  return (
    <div>
      <h2 className="section-title">{t.proximasUbicaciones}</h2>
      
      <div className="ubicaciones-grid">
        {ubicaciones.map((ubicacion) => (
          <div key={ubicacion.id} className="ubicacion-card">
            <div className="ubicacion-header">
              <div className="ubicacion-info">
                <h3>{ubicacion.ubicacion}</h3>
                <div className="ubicacion-meta">
                  <span className="fecha">{ubicacion.dia}</span>
                  <span className="horario">{ubicacion.horario}</span>
                </div>
                <p className="direccion">{ubicacion.direccion}</p>
                <p className="municipio">{ubicacion.municipio}</p>
              </div>
              
              <div className="ubicacion-actions">
                <div className={`cupos ${ubicacion.cuposDisponibles > 10 ? 'disponible' : 'limitado'}`}>
                  {ubicacion.cuposDisponibles} {t.cuposDisponibles}
                </div>
                <button
                  onClick={() => setUbicacionSeleccionada(ubicacion)}
                  className="btn-agendar"
                >
                  {t.seleccionarUbicacion}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Agendamiento */}
      {ubicacionSeleccionada && (
        <ModalAgendamiento 
          ubicacion={ubicacionSeleccionada}
          onClose={() => setUbicacionSeleccionada(null)}
          t={t}
          language={language}
        />
      )}
    </div>
  );
};

// Componente para ver turnos agendados
const AgendaView = ({ t, language }) => {
  // Datos de ejemplo - turno agendado
  const turnoAgendado = {
    fecha: language === 'es' ? '16 Dic 2024' :
           language === 'en' ? 'Dec 16, 2024' :
           language === 'pt' ? '16 Dez 2024' :
           language === 'fr' ? '16 Déc 2024' : '2024年12月16日',
    ubicacion: language === 'es' ? 'Mercado Agrícola' :
              language === 'en' ? 'Agricultural Market' :
              language === 'pt' ? 'Mercado Agrícola' :
              language === 'fr' ? 'Marché Agricole' : '农产品市场',
    horario: '10:30',
    codigo: 'MM-2024-00123',
    estado: t.confirmado
  };

  return (
    <div>
      <h2 className="section-title">{t.miTurno}</h2>
      
      {turnoAgendado ? (
        <div className="turno-card confirmado">
          <div className="turno-header">
            <span className="material-icons">check_circle</span>
            <h3>{t.turnoConfirmado}</h3>
          </div>
          
          <div className="turno-info">
            <div className="info-item">
              <label>{t.codigoTurno}</label>
              <span className="codigo">{turnoAgendado.codigo}</span>
            </div>
            <div className="info-item">
              <label>{t.ubicacion}</label>
              <span>{turnoAgendado.ubicacion}</span>
            </div>
            <div className="info-item">
              <label>{t.fecha}</label>
              <span>{turnoAgendado.fecha}</span>
            </div>
            <div className="info-item">
              <label>{t.hora}</label>
              <span>{turnoAgendado.horario}</span>
            </div>
            <div className="info-item">
              <label>{t.estado}</label>
              <span className="estado confirmado">{turnoAgendado.estado}</span>
            </div>
          </div>
          
          <button className="btn-cancelar">
            {t.cancelarTurno}
          </button>
        </div>
      ) : (
        <div className="no-turnos">
          <span className="material-icons">schedule</span>
          <p>{t.noTurnos}</p>
          <p className="instrucciones">{t.instrucciones}</p>
        </div>
      )}
    </div>
  );
};

// Modal para agendar turno
const ModalAgendamiento = ({ ubicacion, onClose, t, language }) => {
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: '',
    cedula: '',
    email: '',
    telefono: '',
    tramite: 'consulta'
  });

  const handleAgendar = () => {
    // Aquí iría la lógica para guardar el turno
    alert(`${t.turnoAgendado} ${ubicacion.ubicacion}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{t.agendarPara}</h2>
          <button onClick={onClose} className="btn-cerrar">
            <span className="material-icons">close</span>
          </button>
        </div>
        
        <div className="ubicacion-seleccionada">
          <h3>{ubicacion.ubicacion}</h3>
          <div className="ubicacion-details">
            <span>{ubicacion.dia}</span>
            <span>{ubicacion.horario}</span>
          </div>
          <p>{ubicacion.direccion}, {ubicacion.municipio}</p>
        </div>
        
        <div className="form-container">
          <div className="input-group">
            <input 
              type="text" 
              placeholder={t.nombre}
              value={datosUsuario.nombre}
              onChange={(e) => setDatosUsuario({...datosUsuario, nombre: e.target.value})}
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              placeholder={t.cedula}
              value={datosUsuario.cedula}
              onChange={(e) => setDatosUsuario({...datosUsuario, cedula: e.target.value})}
            />
          </div>
          <div className="input-group">
            <input 
              type="email" 
              placeholder={t.email}
              value={datosUsuario.email}
              onChange={(e) => setDatosUsuario({...datosUsuario, email: e.target.value})}
            />
          </div>
          <div className="input-group">
            <input 
              type="tel" 
              placeholder={t.telefono}
              value={datosUsuario.telefono}
              onChange={(e) => setDatosUsuario({...datosUsuario, telefono: e.target.value})}
            />
          </div>
          
          <div className="input-group">
            <select 
              value={datosUsuario.tramite}
              onChange={(e) => setDatosUsuario({...datosUsuario, tramite: e.target.value})}
            >
              <option value="consulta">{t.consulta}</option>
              <option value="residencia">{t.residencia}</option>
              <option value="visa">{t.visa}</option>
              <option value="documentacion">{t.documentacion}</option>
            </select>
          </div>
        </div>
        
        <div className="modal-actions">
          <button onClick={onClose} className="btn-secondary">
            {t.cancelar}
          </button>
          <button onClick={handleAgendar} className="btn-primary">
            {t.confirmarTurno}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MigraMobilePage;