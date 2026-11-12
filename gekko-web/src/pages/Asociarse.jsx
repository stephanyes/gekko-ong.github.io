// src/pages/Asociarse.jsx
import React, { useState } from 'react';
import './Asociarse.css';

export default function Asociarse() {
const [formData, setFormData] = useState({
    nombre: '',
    codigoArea: '',
    celular: '',
    email: '',
    reprocann: '',
    asunto: '',
    consulta: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'codigoArea' || name === 'celular') {
      const soloNumeros = value.replace(/[^\d\s-]/g, '');
      setFormData((prev) => ({ ...prev, [name]: soloNumeros }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulación de envío de formulario
    setTimeout(() => {
      setStatus('submitted');
      setFormData({
        nombre: '',
        codigoArea: '',
        celular: '',
        email: '',
        reprocann: '',
        asunto: '',
        consulta: ''
      });

      // Restaurar estado del botón a los 3 segundos
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 800);
  };
  return (
    <main className="admissions-main">
      <div className="admissions-container">
        <div className="admissions-grid">
          {/* Columna Izquierda: Copys de la marca */}
          <section className="admissions-copy">
            <div className="admissions-eyebrow">
              <span className="eyebrow-dot"></span>
              <span className="eyebrow-text">ADMISIÓN DE SOCIOS</span>
            </div>

            <h1 className="admissions-headline">
              Hablemos de acceso medicinal responsable.
            </h1>

            <p className="admissions-paragraph">
              Escribinos para consultas sobre requisitos de ingreso, vinculación en REPROCANN y disponibilidad de cupos en nuestra Asociación Civil. Te responderemos a la brevedad con información clara y trazable.
            </p>
          </section>

          {/* Columna Derecha: Tarjeta con Formulario */}
          <section className="admissions-form-section">
            <div className="form-card">
              <div className="form-header">
                <span className="form-header-eyebrow">Portal Socios</span>
                <h2 className="form-header-title">Enviar solicitud</h2>
              </div>

              <form className="admissions-form" onSubmit={handleSubmit}>
                {/* Fila 1: Nombre */}
                <div className="form-group">
                  <label htmlFor="nombre" className="form-label">
                    NOMBRE *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="form-input"
                    required
                    placeholder="Tu nombre y apellido"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>

                {/* Fila 2: Teléfono (Código de Área + Celular) */}
                <div className="form-row-phone">
                  <div className="form-group">
                    <label htmlFor="codigoArea" className="form-label">
                      CÓD. ÁREA
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      id="codigoArea"
                      name="codigoArea"
                      className="form-input"
                      maxLength={5}
                      placeholder="11 (sin 0)"
                      value={formData.codigoArea}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="celular" className="form-label">
                      CELULAR
                    </label>
                    <input
                      type="tel"
                      inputMode="numeric"
                      id="celular"
                      name="celular"
                      className="form-input"
                      maxLength={12}
                      placeholder="1234 5678 (sin 15)"
                      value={formData.celular}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Fila 3: Email */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    required
                    placeholder="tuemail@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Fila 4: Estado REPROCANN */}
                <div className="form-group">
                  <label htmlFor="reprocann" className="form-label">
                    ESTADO REPROCANN
                  </label>
                  <select
                    id="reprocann"
                    name="reprocann"
                    className="form-select"
                    required
                    value={formData.reprocann}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Seleccioná tu estado actual
                    </option>
                    <option value="aprobado">Trámite aprobado</option>
                    <option value="en_curso">Trámite en curso</option>
                    <option value="no_tengo">No tengo</option>
                  </select>
                </div>

                {/* Fila 5: Asunto */}
                <div className="form-group">
                  <label htmlFor="asunto" className="form-label">
                    ASUNTO *
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    className="form-input"
                    required
                    placeholder="Motivo de tu mensaje"
                    value={formData.asunto}
                    onChange={handleChange}
                  />
                </div>

                {/* Fila 6: Consulta */}
                <div className="form-group">
                  <label htmlFor="consulta" className="form-label">
                    CONSULTA *
                  </label>
                  <textarea
                    id="consulta"
                    name="consulta"
                    className="form-textarea"
                    required
                    placeholder="Escribí aquí tu mensaje o consulta sobre vinculación..."
                    value={formData.consulta}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Botón Submit */}
                <div className="form-footer">
                  <button
                    type="submit"
                    className="pill-btn pill-primary form-submit-btn"
                    disabled={status === 'submitting'}
                    style={{
                      opacity: status === 'submitting' ? 0.75 : 1,
                      backgroundColor: status === 'submitted' ? '#244b3a' : undefined
                    }}
                  >
                    {status === 'submitting'
                      ? 'ENVIANDO...'
                      : status === 'submitted'
                      ? 'SOLICITUD ENVIADA'
                      : 'ENVIAR CONSULTA'}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}