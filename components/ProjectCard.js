import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard({
  title,
  tags,
  description,
  image,
  results,
  resultsTitle,
  buttonLabel,
  onOpenVideo,
}) {
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

      <button onClick={onOpenVideo} className={styles.cta}>
        ▶ {buttonLabel}
      </button>
    </div>

  );
}
