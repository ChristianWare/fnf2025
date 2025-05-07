import styles from "./VideoSection.module.css";

interface Props {
  project: {
    video: string;
  };
}

export default function VideoSection({ project }: Props) {
  return (
    <div className={styles.container}>
      <video preload='auto' autoPlay muted loop className={styles.video}>
        <source src={project.video} />
      </video>
    </div>
  );
}
