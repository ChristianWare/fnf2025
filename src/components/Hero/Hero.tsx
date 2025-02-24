import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Fonts & Footers</h1>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
}
