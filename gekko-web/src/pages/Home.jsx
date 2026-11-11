import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cogolloLight from '../assets/cogollo_light.jpeg';
import cogolloDark from '../assets/cogollo_dark.jpeg';
import fotoVertical from '../assets/2.jpeg';
import fotoHorizontal from '../assets/1.jpeg';
import './Home.css';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const { hash } = useLocation();

  // 1. Scroll suave según Hash
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [hash]);

  // 2. Animación de Entrada Web Animations API (WAAPI)
  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) return;

    const easeOutExpo = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const animations = [];

    const trackingDot = document.getElementById('trackingDot');
    const eyebrowLabel = document.getElementById('eyebrowLabel');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const heroSummary = document.getElementById('heroSummary');
    const heroCta = document.getElementById('heroCta');
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const card3 = document.getElementById('card3');

    if (trackingDot) {
      animations.push(trackingDot.animate([
        { clipPath: 'circle(0% at 50% 50%)', opacity: 0 },
        { clipPath: 'circle(100% at 50% 50%)', opacity: 1 }
      ], { duration: 500, delay: 200, easing: 'ease-out', fill: 'backwards' }));
    }

    if (eyebrowLabel) {
      animations.push(eyebrowLabel.animate([
        { transform: 'translateX(-12px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 }
      ], { duration: 600, delay: 280, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (line1) {
      animations.push(line1.animate([
        { transform: 'translateY(110%)' },
        { transform: 'translateY(0%)' }
      ], { duration: 850, delay: 380, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (line2) {
      animations.push(line2.animate([
        { transform: 'translateY(110%)' },
        { transform: 'translateY(0%)' }
      ], { duration: 850, delay: 500, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (heroSummary) {
      animations.push(heroSummary.animate([
        { transform: 'translateY(24px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ], { duration: 750, delay: 650, easing: easeOutExpo, fill: 'backwards' }));
    }

    if (heroCta) {
      animations.push(heroCta.animate([
        { transform: 'translateY(20px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
      ], { duration: 700, delay: 780, easing: easeOutExpo, fill: 'backwards' }));
    }

    [card1, card2, card3].forEach((card, index) => {
      if (card) {
        animations.push(card.animate([
          { transform: 'translateY(38px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ], { duration: 800, delay: 600 + (index * 130), easing: easeOutExpo, fill: 'backwards' }));
      }
    });

    return () => {
      animations.forEach(anim => anim.cancel());
    };
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const faqs = [
    {
      num: '01',
      title: '¿ES LEGAL LO QUE HACEN?',
      content: 'Sí. Gekko funciona como una Asociación Civil vinculada a la salud bajo el marco de la Ley 27.350 y el programa REPROCANN. El acceso es exclusivo para miembros registrados y aprobados.'
    },
    {
      num: '02',
      title: '¿NECESITO TENER REPROCANN?',
      content: 'Sí, es un requisito legal excluyente contar con la credencial del REPROCANN vigente y vincularse formalmente a nuestra Asociación Civil para acceder al cultivo colaborativo.'
    },
    {
      num: '03',
      title: '¿QUÉ ES EL REPROCANN?',
      content: 'Es el Registro del Programa de Cannabis del Ministerio de Salud, que autoriza el cultivo controlado y el acceso a derivados para fines medicinales, terapéuticos y paliativos.'
    },
    {
      num: '04',
      title: '¿QUIÉNES PUEDEN INSCRIBIRSE?',
      content: 'Cualquier persona que cuente con indicación médica y haya completado el trámite oficial en la plataforma del Ministerio de Salud a través de un profesional vinculado.'
    },
    {
      num: '05',
      title: '¿VENDEN AL PÚBLICO EN GENERAL?',
      content: 'No. Gekko no es un dispensario comercial ni un growshop. Operamos estrictamente a puertas cerradas proveyendo fitoterapia de alta calidad únicamente a nuestros socios activos.'
    },
    {
      num: '06',
      title: '¿HACEN ENVÍOS?',
      content: 'Sí. Para garantizar la trazabilidad y discreción, la logística es gestionada directamente por nosotros con entregas seguras y exclusivas dentro del ámbito de CABA.'
    }
  ];

  return (
    <main>
      {/* SECTION 1: HERO */}
      <section className="hero-stage" id="heroStage">
        <div className="backdrop-viewport" aria-hidden="true">
          <div className="backdrop-container">
            <picture className="backdrop-media-wrap light-only">
              <source media="(orientation: portrait)" srcSet={cogolloLight} />
              <img
                id="heroPhoto"
                className="backdrop-media"
                src={cogolloLight}
                alt="Flor de cannabis macro Cuban Affair"
              />
            </picture>

            <picture className="backdrop-media-wrap dark-only">
              <source media="(orientation: portrait)" srcSet={cogolloDark} />
              <img
                id="heroPhotoDark"
                className="backdrop-media dark-bud-img"
                src={cogolloDark}
                alt="Flor de cannabis macro en fondo oscuro"
              />
            </picture>
          </div>
        </div>

        <section className="content-stage">
          <div className="copy-zone">
            <div className="eyebrow-badge" id="eyebrowBadge">
              <span className="amber-dot" id="trackingDot"></span>
              <span className="eyebrow-text" id="eyebrowLabel">ASOCIACIÓN CIVIL • REPROCANN</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line-mask">
                <span className="title-line" id="line1">Bienestar integral.</span>
              </span>
              <span className="title-line-mask">
                <span className="title-line" id="line2">Cultivo responsable.</span>
              </span>
            </h1>

            <p className="hero-summary" id="heroSummary">
              Cultivo colaborativo y fitoterapia de alta calidad. Genéticas meticulosamente seleccionadas y entregas seguras en CABA exclusivas para nuestros socios.
            </p>

            <Link to="/asociarse" className="pill-btn pill-primary hero-cta" id="heroCta">
              Solicitar Admisión
            </Link>
          </div>

          <div className="metrics-zone" aria-label="Características destacadas">
            <article className="glass-card" id="card1">
              <div className="card-top">
                <span className="card-label">GENÉTICAS</span>
                <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 1 8.3A9.23 9.23 0 0 1 11 20c.11-1.42.54-5.84 2-8.5" />
                </svg>
              </div>

              <div className="card-pill-row">
                <span className="mini-pill">THC 18%</span>
                <span className="mini-pill highlight">CBD 1%</span>
              </div>

              <div className="card-image-wrapper">
                <img className="card-inner-img light-only" src={cogolloLight} alt="Genética Cuban Affair" />
                <img className="card-inner-img dark-only" src={cogolloDark} alt="Genética Cuban Affair" />
              </div>

              <div className="card-bottom">CUBAN AFFAIR</div>
            </article>

            <article className="glass-card" id="card2">
              <div className="card-top">
                <span className="card-label">CULTIVO</span>
                <svg className="card-icon" viewBox="0 0 24 24">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="card-main">Indoor</div>
              <div className="card-bottom">PARÁMETROS CONTROLADOS</div>
            </article>

            <article className="glass-card" id="card3">
              <div className="card-top">
                <span className="card-label">ENTREGAS</span>
                <svg className="card-icon" viewBox="0 0 24 24">
                  <path d="M10 17h4V5H2v12h3" />
                  <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
                  <path d="M14 17h1" />
                  <circle cx="7.5" cy="17.5" r="2.5" />
                  <circle cx="17.5" cy="17.5" r="2.5" />
                </svg>
              </div>
              <div className="card-main">Directas</div>
              <div className="card-bottom">CABA PUERTA A PUERTA</div>
            </article>
          </div>
        </section>
      </section>

      {/* SECTION 2: LA ASOCIACIÓN */}
      <section className="asociacion-section" id="asociacion">
        <header className="asociacion-header">
          <div className="section-eyebrow">NUESTRA HISTORIA</div>
          <h2 className="section-title">Ciencia, naturaleza y comunidad</h2>
        </header>

        <div className="asociacion-grid">
          <div className="asociacion-col-left">
            <img className="asociacion-img-vertical" src={fotoVertical} alt="Registro botánico" />
          </div>
          <div className="asociacion-col-right">
            <div className="asociacion-text-block">
              <p className="asociacion-paragraph">
                Nacimos con la convicción de que el acceso a la salud debe fundamentarse en la rigurosidad científica, la empatía y la soberanía botánica. En Gekko Club Social cultivamos un puente entre la sabiduría ancestral de las plantas y los estándares clínicos contemporáneos, priorizando siempre la estabilidad genética, la pureza terapéutica y el acompañamiento personalizado a cada uno de nuestros socios registrados.
              </p>
              <p className="asociacion-paragraph">
                Cada proceso dentro de nuestras salas de cultivo se rige por parámetros analíticos de precisión: nutrición orgánica, iluminación espectral optimizada y curado meticuloso en atmósfera controlada. Nuestra meta trasciende el cultivo; construimos una comunidad informada, segura y respaldada legalmente bajo la Ley 27.350, donde el bienestar integral es una realidad accesible, transparente y responsable.
              </p>
            </div>
            <img className="asociacion-img-horizontal" src={fotoHorizontal} alt="Detalle de laboratorio botánico" />
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ & PROTOCOLO */}
      <section className="faq-section" id="faq">
        <header className="section-header">
          <div className="section-eyebrow">Transparencia y Seguridad</div>
          <h2 className="section-title">Preguntas Frecuentes y Protocolo</h2>
        </header>

        <div className="faq-grid">
          <div className="faq-accordion" role="region" aria-label="Preguntas Frecuentes">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <article key={index} className={`accordion-card ${isOpen ? 'active' : ''}`}>
                  <button
                    className="accordion-header"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="accordion-num">{faq.num}</span>
                    <span className="accordion-title">{faq.title}</span>
                    <span className="accordion-icon-wrap" aria-hidden="true">
                      <svg className="accordion-icon" viewBox="0 0 24 24">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <line className="icon-vbar" x1="12" y1="5" x2="12" y2="19" />
                      </svg>
                    </span>
                  </button>
                  <div className="accordion-panel" role="region">
                    <div className="accordion-content">
                      <div className="accordion-body">{faq.content}</div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="protocol-sticky-wrapper">
            <div className="protocol-card">
              <svg className="shield-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span className="protocol-label">PROTOCOLO DE ACCESO</span>
              <p className="protocol-main-text">ACCESO EXCLUSIVO PARA SOCIOS CON REPROCANN ACTIVO</p>
              <div className="protocol-divider" aria-hidden="true"></div>
              <p className="protocol-footer-text">Información orientada estrictamente a personas registradas bajo el marco legal vigente.</p>
            </div>
          </aside>
        </div>

        {/* Contacto */}
        <div className="contact-panel" id="contacto">
          <div className="contact-text">
            <span className="contact-eyebrow">¿TENÉS OTRA DUDA?</span>
            <p className="contact-paragraph">Estamos para ayudarte. Escribinos por WhatsApp y te responderemos a la brevedad.</p>
          </div>
          <div className="contact-buttons">
            <a
              href="https://wa.me/5491199999999?text=Hola%20Gekko%2C%20quiero%20recibir%20informaci%C3%B3n%20para%20asociarme"
              className="btn-ghost-luxury"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>CONSULTAR POR WHATSAPP</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/gekkosocialclub"
              className="btn-ghost-luxury"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>SEGUINOS EN INSTAGRAM</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}