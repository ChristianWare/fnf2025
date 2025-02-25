import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Impressions.module.css";

export default function Impressions() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading number='1' title='First impressions matter' />
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.heading}>
              In a world where decisions are made in a matter of seconds, you
              only get one shot.
            </h3>
          </div>
          <div className={styles.right}>
            <p className={styles.copy}>
              Whether you’re targeting investors, customers or users, you not
              only have to get to the point quickly, you have to give them a
              reason to believe you’re about to make their lives better, or at
              least make life itself better.
              <br />
              <br />
              Strong strategic core messaging is what lies behind that strong
              first impression.
            </p>
            <h3 className={styles.headingii}>
              It is also the foundation for whatever comes{" "}
              <span className={styles.highlight}>next</span>
            </h3>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
