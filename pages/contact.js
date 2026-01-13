import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { i18nPT, i18nEN } from "../lib/i18n-pt"; // ou ajusta para o caminho correto
import { useState } from "react";

export default function Contact() {
  const [lang, setLang] = useState("pt"); // default PT
  const t = lang === "pt" ? i18nPT : i18nEN;

  return (
    <div>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main style={{ padding: "40px" }}>
        <h2>{t.nav?.contact || "Contact Me"}</h2>
        <ul>
          <li>Email: <a href="mailto:cristhofer.pb@hotmail.com">cristhofer.pb@hotmail.com</a></li>
          <li>Phone: +55 54 99165-9210</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/cristhofer-pastorio" target="_blank" rel="noopener noreferrer">linkedin.com/in/cristhofer-pastorio</a></li>
          <li>GitHub: <a href="https://github.com/CristhoferPB" target="_blank" rel="noopener noreferrer">github.com/CristhoferPB</a></li>
        </ul>
      </main>
      <Footer t={t} />
    </div>
  );
}
