// import Button from "../Button/Button";
import styles from "./Contact.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Problem from "../Problem/Problem";
// import SectionHeading from "../SectionHeading/SectionHeading";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";

export default function Contact1() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading2 title='Enough about us' />
        <h3 className={styles.heading}>Let&lsquo;s talk about you</h3>
        <div className={styles.bottom}>
          <Problem />
        </div>
      </LayoutWrapper>
    </section>
  );
}
