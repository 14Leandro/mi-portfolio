import { Link } from "react-router-dom";
import avatar from '../assets/avatar.jpg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutMe() {
  return (
    <>
    <Navbar />
    <section className="about">
      <div className="about-container">
        {/* ===== Texto principal ===== */}
        <div className="about-text">
          <h1>Sobre mí</h1>
          <p>
            ¡Hola! Soy <strong>Leandro Corredoira</strong>, desarrollador web Full Stack apasionado por crear
            interfaces limpias, funcionales y centradas en la experiencia del usuario.  
            Me formé como <strong>Técnico Universitario en Desarrollo de Aplicaciones Informáticas</strong> en la 
            Universidad Nacional del Centro de la Provincia de Buenos Aires.
          </p>
          <p>
            Disfruto aprender nuevas tecnologías, resolver problemas y llevar ideas a la realidad a través del código.
            Actualmente busco seguir creciendo profesionalmente mientras desarrollo proyectos que me desafíen y me hagan mejorar día a día.
          </p>

          <h2>Tecnologías y herramientas</h2>
          <div className="skills-grid">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Node.js</span>
            <span>Git / GitHub</span>
          </div>

          <Link to="/contacto" className="btn-contact">
            Hablemos
          </Link>
        </div>

        {/* ===== Imagen / Avatar ===== */}
        <div className="about-image">
          <img src={avatar} alt="Leandro Corredoira" />
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
