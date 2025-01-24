import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/header/Header.jsx'
import './App.css'
import Hero from "./components/hero/Hero.jsx";
import CozySocials from "./components/decor/CozySocials.jsx";
import PlantDecor from "./components/decor/PlantDecor.jsx";
import Login from "./components/hero/Login.jsx";
import Floor from "./components/decor/Floor.jsx";
import Register from "./components/hero/Register.jsx";

const Layout = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Floor />
      <PlantDecor />

      <main className="cozy-container relative z-10 py-8 px-0">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
        <CozySocials />
      </div>
    </BrowserRouter>
  );
}

export default App;