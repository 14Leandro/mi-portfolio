// src/pages/ProjectDetail.jsx
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetail() {
    const { id } = useParams();

    const projects = [
        {
            id: "turnero",
            title: "Turnero para negocios",
            description:
                "Aplicación web para gestionar turnos de forma simple y eficiente, ideal para peluquerías, talleres o consultorios.",
            details:
                "Este sistema permite a los clientes reservar turnos online, ver disponibilidad, recibir recordatorios por correo y gestionar múltiples sucursales.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
        },
        {
            id: "gimnasio",
            title: "Sistema para gimnasios",
            description:
                "Plataforma que permite controlar socios, pagos y rutinas de entrenamiento.",
            details:
                "Incluye panel de administración, control de membresías, notificaciones de pagos y gestión de entrenadores.",
            tech: ["PHP", "MySQL", "Bootstrap"],
        },
        {
            id: "red-social",
            title: "Red social futbolera",
            description:
                "Espacio donde los fanáticos del fútbol pueden compartir opiniones, camisetas y noticias.",
            details:
                "Proyecto tipo red social con publicaciones, comentarios y sistema de amigos. Inspirado en Twitter, pero 100% futbolero.",
            tech: ["React", "Node.js", "MongoDB"],
        },
        {
            id: "blog",
            title: "Blog personal con React y Node.js",
            description:
                "Sitio donde comparto artículos, proyectos y avances en mi aprendizaje como desarrollador.",
            details:
                "Desarrollado con React y un backend en Node.js con Express. Implementa autenticación JWT y un editor de texto enriquecido.",
            tech: ["React", "Node.js", "Express", "MongoDB"],
        },
        {
            id: "portfolio",
            title: "Portfolio",
            description:
                "Sitio donde comparto artículos, proyectos y avances en mi aprendizaje como desarrollador.",
            details:
                "Mi portfolio personal hecho con React y Tailwind. Muestra mis trabajos, contacto y enlaces a redes.",
            tech: ["React", "Tailwind CSS"],
        },
    ];

    const project = projects.find((project) => project.id === id);

    if (!project) {
        return (
            <>
                <Navbar />
                <section className="project-detail">
                    <h2>Proyecto no encontrado</h2>
                    <Link to="/proyectos" className="back-btn">
                        ← Volver
                    </Link>
                </section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <section className="project-detail">
                <h2>{project.title}</h2>
                <p>{project.details}</p>

                <div className="skills">
                    {project.tech.map((t, i) => (
                        <span key={i}>{t}</span>
                    ))}
                </div>

                <Link to="/proyectos" className="back-btn">
                    Volver
                </Link>
            </section>
            <Footer />
        </>
    );
}
