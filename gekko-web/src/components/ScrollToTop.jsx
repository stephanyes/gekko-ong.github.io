// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si la URL no tiene un hash (ej: no es /#faq), scrollea arriba de todo
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null; // Este componente no renderiza nada visualmente
}