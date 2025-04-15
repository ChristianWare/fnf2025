import styles from "./ServiceHero.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
// import Img1 from "../../../../public/images/servicesHeroii.jpg";
import Img2 from "../../../../public/images/aboutii.jpeg";
import Arrow from "../../../../public/icons/arrow.svg";

export default function ServiceHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <h1 className={styles.heading}>
                Comprehensive ecommerce solutions
              </h1>
            </div>
            <div className={styles.imgContainer}>
              <Image src={Img2} alt='' title='' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <p className={styles.copy}>
                From strategy to launch and beyond, we provide the expertise you
                need to create and grow a successful online store.
              </p>
            </div>
            <div className={styles.bottomRight}>
              <span className={styles.subHeading}>
                Scroll for More Details
                <Arrow className={styles.arrow} />
              </span>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
