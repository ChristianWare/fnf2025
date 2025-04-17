import styles from "./Stats.module.css";

const data = [
  {
    id: 1,
    title: "Faster mobile site speed",
    desc: "51%",
  },
  {
    id: 2,
    title: "Faster desktop site speed",
    desc: "61%",
  },
  {
    id: 3,
    title: "Increase in conversion rate",
    desc: "85%",
  },
  {
    id: 4,
    title: "Increase in total sales",
    desc: "97%",
  },
];

export default function Stats() {
  return (
    <section className={styles.container}>
      <div className={styles.bottom}>
        {data.map((x) => (
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
