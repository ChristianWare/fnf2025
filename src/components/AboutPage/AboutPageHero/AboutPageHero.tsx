import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./AboutPageHero.module.css";
import Img1 from "../../../../public/images/aboutii.jpeg";
import Image from "next/image";
import SectionIntro from "@/components/SectionIntro/SectionIntro";

export default function AboutPageHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <div className={styles.overlay} />
            <div className={styles.top}>
              <SectionIntro
                title='About Us'
                color='black'
                dotColor='blackDot'
              />
            </div>
            <Image src={Img1} alt='' title='' fill className={styles.img} />
            <div className={styles.contentChildren}>
              <h1 className={styles.heading}>
                We build e-commerce experiences that drive growth
              </h1>
              <div className={styles.middle}>
                <p className={styles.copy}>
                  Fonts & Footers is a specialized e-commerce development agency
                  helping businesses of all sizes establish and optimize their
                  online presence. With a focus on user experience, conversion
                  optimization, and technical excellence, we create online
                  stores that not only look great but also drive real business
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
