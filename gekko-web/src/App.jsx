// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ajustá la ruta según dónde esté tu Navbar
import Footer from './components/Footer'; // (Hacé lo mismo con el Footer si ya lo separaste)
import ScrollToTop from './components/ScrollToTop'; // <-- 1. Lo importás

import Home from './pages/Home';
import Asociarse from './pages/Asociarse';
import Geneticas from './pages/Geneticas';
import Cultivos from './pages/Cultivos';

export default function App() {
  return (
    <>
      <ScrollToTop /> {/* <-- 2. Lo agregás arriba de todo */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/asociarse" element={<Asociarse />} />
        <Route path="/geneticas" element={<Geneticas />} />
        <Route path="/cultivos" element={<Cultivos />} />
      </Routes>

      <Footer />
    </>
  );
}