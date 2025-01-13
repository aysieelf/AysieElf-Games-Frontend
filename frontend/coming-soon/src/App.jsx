import { useState } from 'react'
import Header from './components/header/Header.jsx'
import './App.css'
import Hero from "./components/hero/Hero.jsx";
import Footer from "./components/hero/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <Header />
          <Hero />
          <Footer />
      </div>
  )
}

export default App
