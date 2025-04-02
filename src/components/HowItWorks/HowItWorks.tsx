import styles from "./HowItWorks.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import SectionIntro from "../SectionIntro/SectionIntro";
// import Offer from "../Offer/Offer";

const data = [
  {
    id: 1,
    feature: "Strategic thinking",
    desc: "We start by understanding your business goals, target audience, and competitive landscape.",
  },
  {
    id: 2,
    feature: "Data-informed design",
    desc: "We use research and analytics to guide our design decisions, ensuring your site not only looks good but performs well.",
  },
  {
    id: 3,
    feature: "Technical excellence",
    desc: "Our development team builds robust, scalable solutions that grow with your business.",
  },
  {
    id: 4,
    feature: "Ongoing optimization",
    desc: "We continually analyze and refine your e-commerce experience to improve conversions and customer satisfaction.",
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.top}>
            <SectionHeading
              number='2'
              title='Data-driven design, human-centered solutions'
            />
          </div>
          <SectionIntro
            title='Our Approach'
            color='black'
            dotColor='blackDot'
          />
          <div className={styles.box}>
            <div className={styles.middle}>
              <div className={styles.middleLeft}>
                <div className={styles.sectionTitle}></div>
              </div>
              <h4 className={styles.heading}>
                We believe that successful e-commerce experiences balance art
                and science. Our approach combines:
              </h4>
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
          {/* <Offer /> */}
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default HowItWorks;
