import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import ComponentiPage from './pages/ComponentiPage';

import HomePage from './pages/HomePage';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/componenti/:id" element={<ComponentiPage />} />

         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
