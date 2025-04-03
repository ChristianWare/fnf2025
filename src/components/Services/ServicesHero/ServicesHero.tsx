import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./ServicesHero.module.css";

const data = [
  {
    id: 1,
    title: "Strategy & Planning",
  },
  {
    id: 2,
    title: "Design & User Experience",
  },
  {
    id: 3,
    title: "E-commerce Development",
  },
  {
    id: 4,
    title: "Systems Integration",
  },
  {
    id: 5,
    title: "Optimization & Growth",
  },
];

export default function ServicesHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h1 className={styles.heading}>
              Comprehensive <br /> e-commerce <br />
              solutions
            </h1>
            <p className={styles.copy}>
              From strategy to launch and beyond, we provide the expertise you
              need to create and grow a successful online store.
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id}>
                <h3 className={styles.title}>{x.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
