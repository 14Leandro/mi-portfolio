import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} Leandro Corredoira - Todos los derechos reservados</p>
      <div className="socials">
        <a
          href="https://github.com/14Leandro"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/leandrocorredoira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <Link to="/contacto">Contacto</Link>
        {/* <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">Twitter</a> */}
      </div>
    </footer>
  );
}
