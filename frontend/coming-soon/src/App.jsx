import { useState } from 'react'
import Header from './components/header/Header.jsx'
import './App.css'
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";
import CozyWindow from "./components/decor/CozyWindow.jsx";
import PottedPlants from "./components/decor/PottedPlants.jsx";
import CozyCorner from "./components/decor/CozyCorner.jsx";

function App() {
  return (
      <div className="min-h-screen relative overflow-hidden">
          <CozyWindow/>
          <PottedPlants/>
          <CozyCorner/>


          <main className="cozy-container relative z-10 py-8">
              <Header/>
              <Hero/>
              <Footer/>
          </main>
      </div>
  )
}

export default App
