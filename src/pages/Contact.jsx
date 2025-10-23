import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <>
    <Navbar />
    <section className="contact">
      <div className="contact-container">
        <h2>Contactame</h2>
        <p className="contact-subtitle">
          Si querés ponerte en contacto conmigo, podés enviarme un mensaje o escribirme a mis redes.
        </p>

        <form
          className="contact-form"
          action="https://formspree.io/f/mdkwdlnn"
          method="POST"
        >
          <input type="text" name="name" placeholder="Tu nombre" required />
          <input type="email" name="email" placeholder="Tu correo" required />
          <textarea name="message" placeholder="Tu mensaje" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>

        <div className="contact-socials">
          <a href="mailto:leandrocorredoia@gmail.com">
            <i className="fa-solid fa-envelope icon" />
            Mail
          </a>
          <a
            href="https://www.linkedin.com/in/leandrocorredoira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin icon" />
            LinkedIn
          </a>
          <a
            href="https://github.com/14Leandro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github icon" />
            GitHub
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
