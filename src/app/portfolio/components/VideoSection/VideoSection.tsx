import styles from "./VideoSection.module.css";

export default function VideoSection() {
  return (
    <div className={styles.container}>
      <video preload='auto' autoPlay muted loop className={styles.video}>
        <source src='/videos/thunder.mp4' />
      </video>
    </div>
  );
}
