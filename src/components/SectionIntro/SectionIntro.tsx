import styles from "./SectionIntro.module.css";

interface Props {
  title: string;
  color: string;
  dotColor: string;
}

export default function SectionIntro({
  title,
  color = "",
  dotColor = "",
}: Props) {
  return (
    <div className={styles.top}>
      <div className={`${styles.circle} ${styles[dotColor]}`}></div>
      <span className={`${styles.span} ${styles[color]}`}> {title}</span>
    </div>
  );
}
