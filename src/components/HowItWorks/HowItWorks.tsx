import styles from "./HowItWorks.module.css";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    id: 1,
    feature: "Quality over quantity",
    desc: "We take on a limited number of projects to ensure each client receives our full attention and the highest quality work.",
  },
  {
    id: 2,
    feature: "Transparency",
    desc: "We believe in open communication about processes, timelines, and outcomes.",
  },
  {
    id: 3,
    feature: "Measurable results",
    desc: "We focus on metrics that matter to your business, not just vanity statistics.",
  },
  {
    id: 4,
    feature: "Long-term partnerships",
    desc: "We build relationships with our clients that extend beyond the initial project launch.",
  },
  {
    id: 5,
    feature: "Continuous learning",
    desc: "The e-commerce landscape is constantly evolving, and we stay at the forefront of industry developments.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.box}>
            <div className={styles.middle}>
              <h4 className={styles.heading}>Our Values: What Drives Us</h4>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <div className={styles.indexContainer}>
                    <span className={styles.index}>{x.id}</span>
                  </div>
                  <div>
                    <h3 className={styles.feature}>{x.feature}</h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default HowItWorks;
