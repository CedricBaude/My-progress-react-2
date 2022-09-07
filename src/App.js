
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Notfound from './pages/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path="*" fonctionne si jamais l'url ne correspond a rien de déclaré au dessus */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
