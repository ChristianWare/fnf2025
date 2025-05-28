import LayoutWrapper from "../LayoutWrapper";
import styles from "./Circle.module.css";

export default function Circle() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.outerCircle}>
          <p className={styles.title}>Out Technology Systems</p>
          <div className={styles.innerCircle}>
            <div className={styles.quad1}>option</div>
            <div className={styles.quad2}>option</div>
            <div className={styles.quad3}>option</div>
            <div className={styles.quad4}>option</div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
