import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./ContactHero.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.subHeadingCopyContainer}>
              <span className={styles.subHeading}>General</span>
              <p className={styles.copy}>hello@fontsandfooters.com</p>
              <p className={styles.copy}>623-634-2777</p>
            </div>
            <div className={styles.subHeadingCopyContainer}>
              <span className={styles.subHeading}>New Business</span>
              <p className={styles.copy}>new@fontsandfooters.com</p>
              <p className={styles.copy}>623-634-2777</p>
            </div>
            <div className={styles.subHeadingCopyContainer}>
              <span className={styles.subHeading}>Socials</span>
              <p className={styles.copy}>Instagram.com/fontsandfooters</p>
              <p className={styles.copy}>Facebook/fontsandfooters</p>
              <p className={styles.copy}>Behance/fontsandfooters</p>
              <p className={styles.copy}>LinkedIn/fontsandfooters</p>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
