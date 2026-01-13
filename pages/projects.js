import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import VideoModal from "../components/VideoModal";
import { projectsPT } from "../lib/projects-pt";
import { projectsEN } from "../lib/projects-en";
import SEO from "../components/SEO";

export default function Projects({ t, lang, setLang }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = lang === "pt" ? projectsPT : projectsEN;

  return (
    <div>
      {/* SEO para página de projetos */}
      <SEO
        title={`Projetos | Cristhofer Pastório - Product Designer & Vibe Coder`}
        description={`Confira os projetos de Product Design, UX/UI e desenvolvimento front-end de Cristhofer Pastório. Experiências digitais, Design Systems e vibe coding.`}
        image="/images/projects-preview.png"
        url="https://cristhofer-pastorio.dev.br/projects"
        keywords={[
          'Product Designer',
          'UX/UI',
          'Design System',
          'Front-end',
          'Vue.js',
          'React',
          'Vibe Coder',
          'Prototyping',
          'Portfólio de Projetos',
          'User Experience'
        ]}
      />

      <Navbar t={t} lang={lang} setLang={setLang} />

      <main style={{ padding: "40px" }}>
        <h1 style={{ marginBottom: "24px" }}>{t.nav.projects}</h1>
        <p style={{ marginBottom: "32px", maxWidth: "800px" }}>
          {lang === "pt"
            ? "Aqui você encontra uma seleção dos meus projetos de Product Design e desenvolvimento front-end, incluindo UX/UI, Design Systems e protótipos interativos (vibe coding)."
            : "Here is a selection of my Product Design and front-end projects, including UX/UI, Design Systems, and interactive prototypes (vibe coding)."}
        </p>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              resultsTitle={t.projects.resultsTitle}
              buttonLabel={t.projects.buttonLabel}
              onOpenVideo={() => setSelectedVideo(project.video)}
            />
          ))}
        </div>
      </main>

      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}

      <Footer t={t} />
    </div>
  );
}
