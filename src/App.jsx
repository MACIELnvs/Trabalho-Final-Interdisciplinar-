import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Home from './pages/Home.jsx'
import Cartas from './pages/Cartas.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cartas" element={<Cartas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
