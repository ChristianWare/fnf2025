import styles from "./SectionHeading3.module.css";

interface Props {
  title: string;
}

export default function SectionHeading3({ title }: Props) {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.hcTop} />
      <h2 className={styles.heading}>
        {title}
      </h2>
    </div>
  );
}
