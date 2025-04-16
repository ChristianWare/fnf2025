import styles from "./ProjectPreview.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";

export default function ProjectPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionHeading2 title='Recent projects' />
          <div className={styles.bottom}>
            {projects.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    fill
                    alt=''
                    title=''
                    className={styles.img}
                  />
                </div>
                <div className={styles.cardBottom}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <span className={styles.tag}>Ecommerce</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
