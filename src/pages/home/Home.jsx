import avatar from '../../assets/avatar.jpg';
import { Link } from "react-router-dom";
import Projects from '../Projects';

export default function Home() {
  return (
    <>
      <section className="home">
        {/* ===== Navbar Superior ===== */}
        <nav className="home-navbar">
          <Link to="/proyectos">Proyectos</Link>
          <Link to="/sobre-mi">Sobre mí</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>

        {/* ===== Contenido principal ===== */}
        <div className="home-content">
          <div className="home-avatar">
            <img src={avatar} alt="Leandro Corredoira" />
          </div>

          <div className="home-text">
            <h1>Leandro Corredoira</h1>
            <p className="home-subtitle">Desarrollador web Full-Stack</p>

            <div className="skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>React</span>
              <span>Node.js</span>
            </div>

            <Link to="/contacto" className="btn-contact">
              Contáctame
            </Link>
          </div>
        </div>

        {/* ===== Redes sociales (abajo centradas) ===== */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/leandrocorredoira"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/14Leandro"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:leandrocorredoia@gmail.com"
            className="social-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </section>
    </>
  );
}
