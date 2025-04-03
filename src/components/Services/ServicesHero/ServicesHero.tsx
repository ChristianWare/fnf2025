import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./ServicesHero.module.css";

const data = [
  {
    id: 1,
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
            {}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
