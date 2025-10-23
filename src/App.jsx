import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import './styles/global.css';
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sobre-mi" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
