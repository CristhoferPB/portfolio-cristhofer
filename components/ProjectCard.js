import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({
  title,
  tags,
  description,
  image,
  results,
  resultsTitle,
  video,
  liveUrl,
  lang,
  onOpenVideo,
}) {
  const handleClick = () => {
    if (liveUrl) {
      window.open(liveUrl, "_blank");
    } else if (video) {
      onOpenVideo(video);
    }
  };

const getCTA = () => {
  const labels = {
    pt: {
      live: "Ver site ao vivo",
      figma: "Ver protótipo",
      case: "Ver estudo do caso",
    },
    en: {
      live: "Visit website",
      figma: "Open prototype",
      case: "View case study",
    },
  };

  const text = labels[lang] || labels.pt;

        // 🔥 Se for Figma
    if (liveUrl?.includes("figma.com")) {
      return { icon: "🎨", label: text.figma };
    }

    // 🔥 Se for site real
    if (liveUrl) {
      return { icon: "↗", label: text.live };
    }

    // 🔥 Caso padrão (Loom)
    return { icon: "▶", label: text.case };
  };

  const cta = getCTA(); 

  

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <p className={styles.description}>{description}</p>

      <div>
        <strong className={styles.resultsTitle}>{resultsTitle}</strong>
        <ul className={styles.resultsList}>
          {results.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleClick} className={styles.cta}>
        {cta.icon} {cta.label}
      </button>
    </div>
  );
}
