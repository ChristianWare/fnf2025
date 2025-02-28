import LayoutWrapper from "../LayoutWrapper";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <video preload='auto' autoPlay muted loop className={styles.video}>
            <source src='./videos/glass.mp4' />
          </video>
          {/* <div className={styles.imgOverlay}></div> */}
          <div className={styles.contentChildren}>
            <h2 className={styles.heading}>
              We Build <br /> Innovative <br /> Websites
            </h2>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
