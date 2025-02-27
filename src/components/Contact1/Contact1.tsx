import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Contact.module.css";

export default function Contact1() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading number='7' title='Enough about us' />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h3 className={styles.heading}>Let&lsquo;s talk about you</h3>
          </div>
          <div className={styles.right}>
            <h3 className={styles.heading}>7 Questions</h3>
            <h3 className={styles.heading}>To make sure we&lsquo;re</h3>
            <h3 className={styles.heading}>a good fit</h3>
            <div className={styles.btnContainer}>
              <Button text='Learn More' btnType='primary' href='/' />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
