import styles from "./VideoSection.module.css";

interface Props {
  video: string;
}

export default function VideoSection({ video }: Props) {
  return (
    <div className={styles.container}>
      <video preload='auto' autoPlay muted loop className={styles.video}>
        <source src={video} />
      </video>
    </div>
  );
}
