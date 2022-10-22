import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import ComponentiPage from './pages/ComponentiPage';
import EsempiPage from './pages/EsempiPage';
import GooseFormDemoPage from './pages/GooseFormDemoPage';

import HomePage from './pages/HomePage';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/:nomeComponente/:tipoGenerale/:tipoSpecifico" element={<GooseFormDemoPage />} />

          <Route path="/componenti/:id" element={<ComponentiPage />} />
          
          <Route path="/esempi/:id" element={<EsempiPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
