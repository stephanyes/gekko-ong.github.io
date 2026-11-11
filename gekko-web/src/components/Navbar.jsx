import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  // Helper para detectar la ruta activa
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="site-header" id="siteHeader">
        {/* Logo */}
        <Link to="/" className="brand-logo" onClick={closeMobileMenu} aria-label="Gekko Club Social Inicio">
          <svg className="logo-glyph" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <mask id="headerGeckoFootMask">
                <rect x="0" y="0" width="100" height="120" fill="#ffffff" />
                <path d="M 44 116 C 45 96 46 80 50 71 C 52 66 57 66 59 73 C 60 83 56 98 56 116 Z" fill="#000000" />
                <circle cx="50" cy="71" r="7.5" fill="#000000" />
                <path d="M 48 72 Q 38 71 27 67" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" />
                <circle cx="26" cy="66.5" r="5.2" fill="#000000" />
                <path d="M 49 70 Q 43 54 41 42" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
                <circle cx="40.5" cy="40.5" r="5.2" fill="#000000" />
                <path d="M 52 69 Q 59 56 67 45" stroke="#000000" strokeWidth="6" strokeLinecap="round" />
                <circle cx="67.5" cy="44.5" r="5.2" fill="#000000" />
                <path d="M 53 72 Q 67 73 78 68" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" />
                <circle cx="79" cy="67.5" r="5.2" fill="#000000" />
              </mask>
            </defs>
            <path
              d="M 50 14 C 52 17, 88 56, 88 81 C 88 101, 71 115, 50 115 C 29 115, 12 101, 12 81 C 12 56, 48 17, 50 14 Z"
              fill="#D4A359"
              mask="url(#headerGeckoFootMask)"
            />
          </svg>
          <span className="brand-title">Gekko</span>
        </Link>

        {/* Center Links (Navegación Desktop) */}
        <nav className="main-nav" aria-label="Navegación principal">
          <Link to="/#asociacion" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
            La Asociación
          </Link>
          <Link to="/geneticas" className={`nav-item ${isActive('/geneticas') ? 'active' : ''}`}>
            Genéticas
          </Link>
          <Link to="/cultivos" className={`nav-item ${isActive('/cultivos') ? 'active' : ''}`}>
            Cultivo
          </Link>
          <Link to="/#faq" className={`nav-item ${isActive('/#faq') ? 'active' : ''}`}>
            Preguntas Frecuentes
          </Link>
          <Link to="/#contacto" className={`nav-item ${isActive('/#contacto') ? 'active' : ''}`}>
            Contacto
          </Link>
        </nav>

        {/* Right Header Actions (ThemeToggle + CTAs + Burger agrupados) */}
        <div className="header-actions">
          <ThemeToggle />

          <a
            href="https://wa.me/5491199999999?text=Hola%20Gekko%2C%20soy%20socio%20y%20deseo%20acceder"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-secondary"
          >
            Acceso Socios
          </a>

          <Link to="/asociarse" className={`pill-btn pill-primary ${isActive('/asociarse') ? 'active' : ''}`}>
            Asociarse
          </Link>

          {/* Hamburguesa Mobile */}
          <button
            type="button"
            className="burger-btn"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
            aria-expanded={mobileOpen}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </header>

      {/* Drawer Mobile controlado por estado */}
      <div className={`mobile-menu-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <Link to="/#asociacion" className="mobile-nav-link" onClick={closeMobileMenu}>
          La Asociación
        </Link>
        <Link to="/geneticas" className="mobile-nav-link" onClick={closeMobileMenu}>
          Genéticas
        </Link>
        <Link to="/cultivos" className="mobile-nav-link" onClick={closeMobileMenu}>
          Cultivo
        </Link>
        <Link to="/#faq" className="mobile-nav-link" onClick={closeMobileMenu}>
          Preguntas Frecuentes
        </Link>
        <Link to="/#contacto" className="mobile-nav-link" onClick={closeMobileMenu}>
          Contacto
        </Link>
        
        <div className="mobile-actions">
          <a
            href="https://wa.me/5491199999999?text=Hola%20Gekko%2C%20soy%20socio%20y%20deseo%20acceder"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn pill-secondary"
            onClick={closeMobileMenu}
          >
            Acceso Socios
          </a>
          <Link to="/asociarse" className="pill-btn pill-primary" onClick={closeMobileMenu}>
            Asociarse
          </Link>
        </div>
      </div>
    </>
  );
}