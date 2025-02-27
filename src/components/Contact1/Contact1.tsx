import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

export default function Contact1() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading number='4' title='Enough about us' />
      </LayoutWrapper>
    </section>
  );
}
