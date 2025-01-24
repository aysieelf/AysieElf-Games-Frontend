import Header from './components/header/Header.jsx'
import './App.css'
import Hero from "./components/hero/Hero.jsx";
import CozyCorner from "./components/decor/CozySocials.jsx";
import PlantDecor from "./components/decor/PlantDecor.jsx";
import Login from "./components/hero/Login.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Floor from "./components/decor/Floor.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={
                  <div className="min-h-screen relative overflow-hidden">
                      <CozyCorner/>
                      <PlantDecor/>


                      <main className="cozy-container relative z-10 py-8 px-0">
                          <Header/>
                          <Hero/>
                      </main>
                  </div>
              }/>
                <Route path={"/login"} element={
                    <div className="min-h-screen relative overflow-hidden">
                        <Floor/>
                        <CozyCorner/>
                        <PlantDecor/>


                        <main className="cozy-container relative z-10 py-8 px-0">
                            <Header/>
                            <Login/>
                        </main>
                    </div>
                }/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
