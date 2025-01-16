import { useState } from 'react'
import Header from './components/header/Header.jsx'
import './App.css'
import Hero from "./components/hero/Hero.jsx";
import CozyCorner from "./components/decor/CozySocials.jsx";
import PlantDecor from "./components/decor/PlantDecor.jsx";

function App() {
  return (
      <div className="min-h-screen relative overflow-hidden">
          <CozyCorner/>
          <PlantDecor/>


          <main className="cozy-container relative z-10 py-8 px-0">
              <Header/>
              <Hero/>
          </main>
      </div>
  )
}

export default App
