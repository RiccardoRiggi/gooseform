import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import ComponentiPage from './pages/ComponentiPage';
import ControlliComplexPpage from './pages/ControlliComplexPage';
import ControlliStandardPpage from './pages/ControlliStandardPage';
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
          
          <Route path="/controlli/standard/:id" element={<ControlliStandardPpage />} />

          <Route path="/controlli/complex/:id" element={<ControlliComplexPpage />} />

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
