import styles from "./AboutIntro.module.css";
import LayoutWrapper from "../../LayoutWrapper";

export default function AboutIntro() {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.content}>
        <div className={styles.left}>
          <LayoutWrapper>
            <div className={styles.leftContent}>
              <p className={styles.heading}>
                Founded by a team of e-commerce enthusiasts with backgrounds in
                both design and development, Fonts & Footers was born from the
                recognition that successful online stores require both beautiful
                aesthetics and robust functionality.{" "}
              </p>
              <p className={styles.copy}>
                Our name represents this philosophy – &ldquo;Fonts&rdquo;
                symbolizes the design elements that create emotional connections
                with your customers, while &ldquo;Footers&rdquo; represents the
                solid technical foundation that supports your business growth.
              </p>
              <p className={styles.copy}>
                Since our founding, we&apos;ve helped businesses across various
                industries establish and grow their e-commerce presence, always
                with a focus on creating solutions that convert visitors into
                customers and customers into advocates.
              </p>
            </div>
          </LayoutWrapper>
        </div>
        <div className={styles.right}></div>
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
}
