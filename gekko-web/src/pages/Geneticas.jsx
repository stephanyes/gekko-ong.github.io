// src/pages/Geneticas.jsx
import React from 'react';
import './Geneticas.css';
import cogolloDark from '../assets/cogollo_dark.jpeg';

const strainsData = [
  {
    id: 'frutilato',
    name: 'Frutilato',
    badge: 'Híbrida Cítrica',
    imgSrc: cogolloDark, // Ajustar según las imágenes reales
    altText: 'Flor de cannabis Frutilato',
    terpenes: 'Limoneno • Mirceno • Cariofileno',
    desc: 'Destaca por un aroma dulzón intenso a frutas maduras y notas cremosas. Brinda una experiencia equilibrada, óptima para aliviar tensiones diarias sin perder foco.',
    specs: [
      { label: 'Ratio CBD / THC', val: 'Equilibrado' },
      { label: 'Maduración', val: '8-9 Semanas' }
    ]
  },
  {
    id: 'king-juice',
    name: 'King Juice',
    badge: 'Sativa Dominante',
    imgSrc: cogolloDark,
    altText: 'Flor de cannabis King Juice',
    terpenes: 'Terpinoleno • Pineno • Ocimeno',
    desc: 'Genética vibrante caracterizada por un perfil cítrico punzante y tropical. Recomendada para momentos de estimulación creativa, claridad mental y energía.',
    specs: [
      { label: 'Aroma', val: 'Cítrico Tropical' },
      { label: 'Maduración', val: '9-10 Semanas' }
    ]
  },
  {
    id: 'cuban-affair',
    name: 'Cuban Affair',
    badge: 'Indica Dominante',
    imgSrc: cogolloDark,
    altText: 'Flor de cannabis Cuban Affair',
    terpenes: 'Cariofileno • Linalool • Humuleno',
    desc: 'Variedad caracterizada por su alta concentración de tricomas cristalinos y matices terrosos con especias. Brinda profunda relajación corporal y bienestar nocturno.',
    specs: [
      { label: 'Resina', val: 'Alta Densidad' },
      { label: 'Maduración', val: '8 Semanas' }
    ]
  }
];

export default function Geneticas() {
  return (
    <main className="page-container">
      {/* Page Header */}
      <section className="page-header">
        <div className="eyebrow-badge">
          <span className="amber-dot"></span>
          <span>Perfil Terpénico &amp; Estabilidad</span>
        </div>
        <h1 className="page-title">Genéticas Selectas</h1>
        <p className="page-subtitle">
          Desarrolladas bajo estrictos controles fitoterapéuticos. Variedades con perfiles de cannabinoides y terpenos optimizados para el bienestar integral de nuestros socios.
        </p>
      </section>

      {/* Cards Grid */}
      <section className="strains-grid">
        {strainsData.map((strain) => (
          <article className="strain-card" key={strain.id}>
            <div className="strain-img-wrapper">
              <span className="strain-badge">{strain.badge}</span>
              <img
                className="strain-img strain-img-blend"
                src={strain.imgSrc}
                alt={strain.altText}
              />
            </div>
            <div className="strain-content">
              <h2 className="strain-name">{strain.name}</h2>
              <div className="strain-terpenes">{strain.terpenes}</div>
              <p className="strain-desc">{strain.desc}</p>

              <div className="strain-specs-row">
                {strain.specs.map((spec, index) => (
                  <div className="spec-item" key={index}>
                    <span className="spec-item-label">{spec.label}</span>
                    <span className="spec-item-val">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}