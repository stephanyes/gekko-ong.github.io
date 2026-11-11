// src/pages/Cultivos.jsx
import React, { useState } from 'react';
import './Cultivos.css';

const roomsData = [
  {
    id: 'sala-1',
    tag: 'SALA 01',
    name: 'Vegetación & Madres',
    desc: 'Espacio optimizado para preservar genéticas madre selectas y promover un desarrollo radicular y vegetativo vigoroso antes de la etapa floral.',
    specs: [
      { label: 'Fotoperíodo', val: '18 / 6 hrs' },
      { label: 'Iluminación', val: 'LED Spectrum Tech' },
      { label: 'Riego', val: 'Automatizado por pulsos' }
    ],
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop',
        alt: 'Foto Sala 1 - Visión General',
        caption: 'Vista general del dosel botánico en etapa vegetativa.'
      },
      {
        src: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=1200&auto=format&fit=crop',
        alt: 'Foto Sala 1 - Sistema de Riego',
        caption: 'Detalle de nutrición orgánica y control de humedad relativa.'
      },
      {
        src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop',
        alt: 'Foto Sala 1 - Iluminación LED',
        caption: 'Paneles LED de alta eficiencia diseñados para desarrollo genético.'
      }
    ]
  },
  {
    id: 'sala-2',
    tag: 'SALA 02',
    name: 'Floración High-Density',
    desc: 'Ambiente de floración intensiva con control de temperatura, flujo de aire unidireccional y máxima intensidad fotónica para la maduración óptima de tricomas.',
    specs: [
      { label: 'Fotoperíodo', val: '12 / 12 hrs' },
      { label: 'Temperatura', val: '21°C - 24°C' },
      { label: 'Extracción', val: 'Filtrado carbón activo' }
    ],
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop',
        alt: 'Foto Sala 2 - Floración',
        caption: 'Estructura de floración avanzada en entorno controlado.'
      },
      {
        src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop',
        alt: 'Foto Sala 2 - Macro de flores',
        caption: 'Maduración de pistilos y densidad de resina botánica.'
      },
      {
        src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop',
        alt: 'Foto Sala 2 - Control de flujo de aire',
        caption: 'Monitoreo térmico y renovación continua de aire.'
      }
    ]
  }
];

function RoomCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-caption">{slide.caption}</div>
          </div>
        ))}
      </div>

      <button
        className="carousel-btn prev"
        onClick={prevSlide}
        aria-label="Anterior"
      >
        ❮
      </button>
      <button
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Siguiente"
      >
        ❯
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Cultivos() {
  return (
    <main className="page-container">
      <section className="page-header">
        <div className="eyebrow-badge">
          <span className="amber-dot"></span>
          <span>Infraestructura Indoor</span>
        </div>
        <h1 className="page-title">Salas de Cultivo &amp; Parámetros</h1>
        <p className="page-subtitle">
          Espacios diseñados con atmósfera controlada, nutrición precisa e iluminación de última generación para asegurar la máxima estabilidad botánica y fitoterapéutica.
        </p>
      </section>

      {roomsData.map((room) => (
        <section className="room-section" id={room.id} key={room.id}>
          <div className="room-header">
            <div className="room-title-group">
              <span className="room-tag">{room.tag}</span>
              <h2 className="room-name">{room.name}</h2>
              <p className="room-desc">{room.desc}</p>
            </div>

            <div className="room-specs">
              {room.specs.map((spec, index) => (
                <div className="spec-pill" key={index}>
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-val">{spec.val}</span>
                </div>
              ))}
            </div>
          </div>

          <RoomCarousel slides={room.slides} />
        </section>
      ))}
    </main>
  );
}