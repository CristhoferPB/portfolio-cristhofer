import styles from "../styles/Footer.module.css";

export default function Footer({
  t = {
    footer: {
      description: "Desenvolvedor e Product Designer",
      email: "cristhofer.pb@hotmail.com",
      whatsapp: "+55 54 99165-9210",
      linkedin: "linkedin.com/in/cristhofer-pastorio",
      rights: "Todos os direitos reservados."
    }
  }
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.name}>Cristhofer Pastório Barbosa</h3>

        <p className={styles.description}>
          {t.footer?.description || "Desenvolvedor e Product Designer"}
        </p>

        <div className={styles.links}>
          {/* EMAIL */}
          <a
            href="mailto:cristhofer.pb@hotmail.com"
            className={styles.link}
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5Z" />
            </svg>
            {t.footer?.email || "cristhofer.pb@hotmail.com"}
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/5554991659210"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d="M12.04 2a9.94 9.94 0 0 0-9.96 9.94A9.8 9.8 0 0 0 3.6 17.3L2 22l4.8-1.5a9.9 9.9 0 0 0 5.24 1.46h.01A9.94 9.94 0 0 0 22 12.04 9.94 9.94 0 0 0 12.04 2Z" />
            </svg>
            {t.footer?.whatsapp || "+55 54 99165-9210"}
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/cristhofer-pastorio/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-4V8Z" />
            </svg>
            {t.footer?.linkedin || "linkedin.com/in/cristhofer-pastorio"}
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/CristhoferPB"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <svg viewBox="0 0 24 24" className={styles.icon}>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.34-1.75-1.34-1.75-1.1-.76.08-.74.08-.74 1.22.08 1.86 1.26 1.86 1.26 1.08 1.84 2.84 1.3 3.54 1 .1-.78.42-1.3.76-1.6-2.66-.3-5.46-1.34-5.46-5.96 0-1.32.46-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0C17.3 5.28 18.3 5.6 18.3 5.6c.66 1.66.24 2.88.12 3.18.78.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.66-5.48 5.96.44.38.82 1.12.82 2.26v3.34c0 .32.22.68.82.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
            </svg>
            GitHub
          </a>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} — {t.footer?.rights || "Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  );
}
