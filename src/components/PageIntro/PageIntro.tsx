import styles from "./PageIntro.module.css";
import Image, { StaticImageData } from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import SectionIntro from "../SectionIntro/SectionIntro";
import ContactForm from "../ContactForm/ContactForm";

interface Props {
  title: string;
  introTitle: string;
  src: StaticImageData;
  copy: string;
  
}

export default function PageIntro({ title, introTitle, src, copy }: Props) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <div className={styles.overlay} />
            <div className={styles.top}>
              <SectionIntro
                title={introTitle}
                color='black'
                dotColor='blackDot'
              />
            </div>
            <Image src={src} alt='' title='' fill className={styles.img} />
            <div className={styles.contentChildren}>
              <h2 className={styles.heading}>{title} </h2>
              <div className={styles.middle}>
                <p className={styles.copy}>{copy}</p>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </LayoutWrapper>
    </section>
  );
}
