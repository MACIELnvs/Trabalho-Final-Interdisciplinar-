import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Home from './pages/Home.jsx'
import Listagem from './pages/Listagem.jsx'
import Update from './pages/Update.jsx'
import AddRemove from './pages/AddRemove.jsx'

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <main className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listagem" element={<Listagem />} />
        <Route path="/AddRemove" element={<AddRemove/>} />
        <Route  path="/Update" element={<Update/>} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
