import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          Cristhofer<span className={styles.dot}>.</span>
        </Link>

        {/* LINKS DESKTOP */}
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            {t.nav.home}
          </Link>
          <Link href="/projects" className={styles.link}>
            {t.nav.projects}
          </Link>

          {/* LANGUAGE SWITCH DESKTOP */}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          className={styles.menuButton}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className={styles.mobileMenu}>
          <button
            onClick={() => setOpen(false)}
            style={{
              alignSelf: "flex-end",
              fontSize: "24px",
              background: "none",
              border: "none",
              color: "#fff",
            }}
          >
            ✕
          </button>

          <Link
            href="/"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {t.nav.home}
          </Link>

          <Link
            href="/projects"
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {t.nav.projects}
          </Link>

          {/* LANGUAGE SWITCH MOBILE */}
          <button
            onClick={() => {
              setLang(lang === "pt" ? "en" : "pt");
              setOpen(false);
            }}
            style={{
              marginTop: "32px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#ffffff",
              padding: "10px",
              borderRadius: "8px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            {lang === "pt" ? "Switch to EN" : "Mudar para PT"}
          </button>
        </div>
      )}
    </>
  );
}
