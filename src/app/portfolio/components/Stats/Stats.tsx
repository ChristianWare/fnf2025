// Stats.tsx
import styles from "./Stats.module.css";

export interface StatItem {
  id: number;
  title: string;
  desc: string;
}

interface Props {
  stats: readonly StatItem[];
}

export default function Stats({ stats }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.bottom}>
        {stats.map((x) => (
          <div key={x.id} className={styles.card}>
            <div className={styles.cardTop}>
              <span className={styles.index}>{x.desc}</span>
              <p className={styles.title}>{x.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
