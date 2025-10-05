import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Services from './pages/Services'
import Procedures from './pages/Procedures'
import Community from './pages/Community'
import MigraMobilePage from './pages/MigraMobilePage'
// Importar las nuevas páginas
import Normativa from './pages/Normativa'
import Telefonos from './pages/Telefonos'
import About from './pages/About'
import Oficinas from './pages/Oficinas'
import RedesSociales from './pages/RedesSociales.jsx'
import FAQ from './pages/FAQ'
import './App.css'

// Componente que maneja la lógica de tu aplicación
function AppContent() {
  const [language, setLanguage] = useState('es')
  const navigate = useNavigate()
  const location = useLocation()

  // Determinar la página actual basado en la ruta
  const getCurrentPage = () => {
    const path = location.pathname
    if (path === '/services') return 'services'
    if (path === '/procedures') return 'procedures'
    if (path === '/community') return 'community'
    if (path === '/migra-movil') return 'migra-movil'
    if (path === '/normativa') return 'normativa'
    if (path === '/telefonos') return 'telefonos'
    if (path === '/about') return 'about'
    if (path === '/oficinas') return 'oficinas'
    if (path === '/redes-sociales') return 'redes-sociales'
    if (path === '/preguntas-frecuentes') return 'preguntas-frecuentes'
    return 'home'
  }

  const currentPage = getCurrentPage()

  // Función para cambiar de página que también actualiza la ruta
  const setCurrentPage = (page) => {
    switch(page) {
      case 'services': navigate('/services'); break
      case 'procedures': navigate('/procedures'); break
      case 'community': navigate('/community'); break
      case 'migra-movil': navigate('/migra-movil'); break
      case 'normativa': navigate('/normativa'); break
      case 'telefonos': navigate('/telefonos'); break
      case 'about': navigate('/about'); break
      case 'oficinas': navigate('/oficinas'); break
      case 'redes-sociales': navigate('/redes-sociales'); break
      case 'preguntas-frecuentes': navigate('/preguntas-frecuentes'); break
      default: navigate('/')
    }
  }

  return (
    <div className="app">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        language={language}
        setLanguage={setLanguage}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/services" element={<Services language={language} />} />
          <Route path="/procedures" element={<Procedures language={language} />} />
          <Route path="/community" element={<Community language={language} />} />
          <Route path="/migra-movil" element={<MigraMobilePage language={language} />} />
          {/* Nuevas rutas */}
          <Route path="/normativa" element={<Normativa language={language} />} />
          <Route path="/telefonos" element={<Telefonos language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/oficinas" element={<Oficinas language={language} />} />
          <Route path="/redes-sociales" element={<RedesSociales language={language} />} />
          <Route path="/preguntas-frecuentes" element={<FAQ language={language} />} />
        </Routes>
      </main>
    </div>
  )
}

// Componente principal que envuelve todo con Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App