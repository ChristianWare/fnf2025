import styles from "./OurApproach.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionHeading3 from "@/components/SectionHeading3/SectionHeading3";

const data = [
  {
    id: 1,
    title: "Strategic thinking",
    desc: "We start by understanding your business goals, target audience, and competitive landscape.",
  },
  {
    id: 2,
    title: "Data-informed design",
    desc: "We use research and analytics to guide our design decisions, ensuring your site not only looks good but performs well.",
  },
  {
    id: 3,
    title: "Technical excellence",
    desc: "Our development team builds robust, scalable solutions that grow with your business.",
  },
  {
    id: 4,
    title: "Ongoing optimization",
    desc: "We continually analyze and refine your e-commerce experience to improve conversions and customer satisfaction.",
  },
];

export default function OurApproach() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading3 title='Data-driven design, human-centered solutions' />
            <h3 className={styles.headingii}>
              We believe that successful e-commerce experiences balance art and
              science. Our approach combines:
            </h3>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.index}>{x.id}.</span>
                  <h4 className={styles.title}>{x.title}</h4>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
