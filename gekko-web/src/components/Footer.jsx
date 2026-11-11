import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-inner">
        <div className="footer-main-grid">

          {/* 1. Left Area: Brand */}
          <div className="footer-brand-area">
            <div className="footer-brand-header">
              <svg className="footer-logo-glyph" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <mask id="footerGeckoMask">
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
                  mask="url(#footerGeckoMask)"
                />
              </svg>
              <div className="footer-brand-text-group">
                <span className="footer-brand-name">GEKKO CLUB SOCIAL</span>
                <span className="footer-brand-subtitle">ASOCIACIÓN CIVIL</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Cultivo colaborativo y fitoterapia de alta calidad. Entregas directas y seguras en CABA, Argentina.
            </p>
            <span className="footer-brand-tag">Registro Ley 27.350 · 2026</span>
          </div>

          {/* 2. Right Area: 4-Column Sub-grid */}
          <div className="footer-nav-subgrid">
            {/* Col A: Navegación */}
            <div className="footer-col">
              <h3 className="footer-col-header">NAVEGACIÓN</h3>
              <ul className="footer-nav-list">
                <li><Link to="/#heroStage" className="footer-nav-link">Inicio</Link></li>
                <li><Link to="/#asociacion" className="footer-nav-link">La Asociación</Link></li>
                <li><Link to="/geneticas" className="footer-nav-link">Genéticas</Link></li>
                <li><Link to="/cultivo" className="footer-nav-link">Cultivo</Link></li>
                <li><Link to="/#faq" className="footer-nav-link">FAQs</Link></li>
              </ul>
            </div>

            {/* Col B: Admisión */}
            <div className="footer-col">
              <h3 className="footer-col-header">CUPOS Y ACCESO</h3>
              <p className="footer-text-block">Información sobre requisitos de ingreso y vinculación.</p>
              <a
                href="https://wa.me/5491199999999?text=Hola%20Gekko%2C%20quiero%20recibir%20informaci%C3%B3n%20para%20asociarme"
                className="footer-ghost-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                SOLICITAR INFO
              </a>
            </div>

            {/* Col C: Contacto */}
            <div className="footer-col">
              <h3 className="footer-col-header">CONTACTO</h3>
              <p className="footer-contact-item">CABA, Buenos Aires</p>
              <p className="footer-contact-item">Argentina</p>
              <p className="footer-contact-item" style={{ marginTop: '0.5rem' }}>
                <a href="https://instagram.com/gekkosocialclub" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  @gekkosocialclub
                </a>
              </p>
            </div>

            {/* Col D: Legal */}
            <div className="footer-col">
              <h3 className="footer-col-header">LEGAL</h3>
              <p className="footer-text-block">
                Actividades enmarcadas estrictamente bajo la Ley 27.350 y el programa REPROCANN. Prohibida su comercialización a terceros.
              </p>
            </div>
          </div>

        </div>

        {/* Sub-footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="bottom-bar-left">
            <svg className="bottom-bar-left-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="bottom-bar-left-text">ACCESO EXCLUSIVO PARA SOCIOS CON REPROCANN ACTIVO</span>
          </div>

          <div className="bottom-bar-center">
            <span className="footer-developer-credit">Developed by Gekko</span>
          </div>

          <div className="bottom-bar-right">
            <span className="footer-copyright">GEKKO ASOCIACIÓN CIVIL © 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}