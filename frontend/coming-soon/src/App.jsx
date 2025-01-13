import { useState } from 'react'
import Header from './components/header/Header.jsx'
import './App.css'
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
      <div className="min-h-screen flex flex-col bg-cozy-bg">
          <Header />
          <Hero />
          <Footer />
      </div>
  )
}

export default App
