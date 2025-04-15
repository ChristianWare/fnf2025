import styles from "./SectionHeading3.module.css";

interface Props {
  title: string;
  color?: string;
}

export default function SectionHeading3({ title, color = "" }: Props) {
  return (
    <div className={styles.headingContainer}>
      <div className={`${styles.hcTop} ${styles[color]}`} />
      <h2 className={styles.heading}>{title}</h2>
    </div>
  );
}
