import { useState, type JSX } from 'react'
import './App.css'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Header from './components/Header';
import Servicios from './pages/Servicios';
import Productos from './pages/Productos';

function App(): JSX.Element {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;