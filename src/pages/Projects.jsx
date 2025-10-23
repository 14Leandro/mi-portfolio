import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [
    {
      id: "turnero",
      title: "Turnero para negocios",
      description:
        "Aplicación web para gestionar turnos de forma simple y eficiente, ideal para peluquerías, talleres o consultorios.",
    },
    {
      id: "gimnasio",
      title: "Sistema para gimnasios",
      description:
        "Plataforma que permite controlar socios, pagos y rutinas de entrenamiento.",
    },
    {
      id: "red-social",
      title: "Red social futbolera",
      description:
        "Espacio donde los fanáticos del fútbol pueden compartir opiniones, camisetas y noticias.",
    },
    {
      id: "blog",
      title: "Blog personal con React y Node.js",
      description:
        "Sitio donde comparto artículos, proyectos y avances en mi aprendizaje como desarrollador.",
    },
    {
      id: "portfolio",
      title: "Portfolio",
      description:
        "Sitio donde comparto artículos, proyectos y avances en mi aprendizaje como desarrollador.",
    },
  ];

  return (
    <>
    <Navbar />
    <section className="projects">
      <div className="projects-header">
        <h2>Mis Proyectos</h2>
        <p>
          🚧 Actualmente estoy trabajando en nuevos proyectos.  
          Mientras tanto, te dejo algunas ideas en las que estoy planificando trabajar.
        </p>
      </div>

      <div className="projects-grid">
          {projects.map((project) => (
            <Link to={`/proyectos/${project.id}`} key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
    </section>
    <Footer />
    </>
  );
}
