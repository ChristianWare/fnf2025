import styles from "./ProjectPreview.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import Image from "next/image";
import { projects } from "@/lib/data";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
import Link from "next/link";


export default function ProjectPreview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionHeading2 title='Recent projects' />
          <div className={styles.bottom}>
            {projects.map((x) => (
              <Link href={`/portfolio/${x.slug}`} key={x.id}>
                <div className={styles.card}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      fill
                      alt={x.title}
                      title={x.title}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.cardBottom}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <span className={styles.tag}>
                      {x.tags ? x.tags[0] : "Ecommerce"}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
