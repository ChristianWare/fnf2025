import Circle from "../Circle/Circle";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Focus.module.css";

export default function Focus() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <Circle />
          </div>
          <div className={styles.right}>
            <p className={styles.copy}>
              Fonts & Footers exists exclusively for small to mid-sized
              businesses that sell physical products online. Whether you move
              five SKUs or five thousand, we concentrate on headless Shopify and
              custom Next.js storefronts that scale with you. By niching down,
              we stay razor-sharp on e-commerce trends, checkout psychology, and
              back-office integrations that matter most to merchants—not generic
              “all-in-one” web services.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
