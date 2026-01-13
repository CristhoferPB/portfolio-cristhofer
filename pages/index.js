import SEO from '../components/SEO'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import styles from "../styles/Hero.module.css";
import Image from "next/image";

export default function Home({ t, lang, setLang }) {
  return (
    <div>
      {/* SEO */}
      <SEO
        title="Cristhofer Pastório | Product Designer & Vibe Coder"
        description="Portfólio de Cristhofer Pastório: UX/UI, Product Design, Design Systems e desenvolvimento front-end. Transformo ideias em experiências digitais incríveis."
        image="/images/profile.jpg"
        url="https://cristhofer-pastorio.dev.br"
      />

      <Navbar t={t} lang={lang} setLang={setLang} />

      <main style={{ padding: "80px 24px 80px" }}>
        {/* HERO */}
        <section className={styles.hero}>
          <div>
            <h1>
              {t.hero.title}
              <br />
              <span style={{ color: "#8B5CF6" }}>
                {t.hero.subtitle}
              </span>
            </h1>

            <p>
              {t.hero.description} <br />
              Especialista em criar produtos digitais que combinam UX/UI design e desenvolvimento front-end. {" "}
              <strong>Vibe coder</strong> para protótipos interativos e experiências únicas.
            </p>
          </div>

          <Image
            src="/images/profile.jpg"
            alt="Foto de Cristhofer Pastório - Product Designer e Vibe Coder"
            width={220}
            height={220}
            className={styles.profileImage}
            priority
          />
        </section>

        {/* SKILLS */}
        <section style={{ maxWidth: "1100px", margin: "0 auto 120px" }}>
          <h2 style={{ marginBottom: "32px" }}>Skills</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              "Product Design",
              "UX Research",
              "UI Design",
              "Design Systems",
              "Information Architecture",
              "User Flows",
              "Prototyping",
              "Responsive Design",
              "Conversion & Usability",
              "Vibe Coding"
            ].map((skill, index) => (
              <div
                key={skill}
                style={{
                  background: "rgb(242, 238, 255)",
                  color: "rgb(75, 0, 255)",
                  padding: "18px",
                  borderRadius: "12px",
                  fontWeight: 500,
                  opacity: 0,
                  transform: "translateY(10px)",
                  animation: `fadeUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer t={t} />
      <ScrollToTop />
    </div>
  );
}
