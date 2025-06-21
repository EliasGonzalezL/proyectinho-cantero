import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Inicio from './pantallas/inicio.jsx';
import InicioSesion from './pantallas/iniciosesion.jsx';
import Registro from './pantallas/registro.jsx';
import './index.css';
import Perfil from './pantallas/perfil.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/" element={<Inicio />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/formulario" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);