"use client";

import LayoutWrapper from "../LayoutWrapper";
// import SectionHeading from "../SectionHeading/SectionHeading";
import SectionIntro from "../SectionIntro/SectionIntro";
import styles from "./Mission.module.css";

const mission = [
  {
    feature: "Quality over quantity",
    desc: "We take on a limited number of projects to ensure each client receives our full attention and the highest quality work.",
  },
  {
    feature: "Transparency",
    desc: "We believe in open communication about processes, timelines, and outcomes.",
  },
  {
    feature: "Measurable results",
    desc: "We focus on metrics that matter to your business, not just vanity statistics.",
  },
  {
    feature: "Long-term partnerships",
    desc: "We build relationships with our clients that extend beyond the initial project launch.",
  },
  {
    feature: "Continuous learning",
    desc: "The e-commerce landscape is constantly evolving, and we stay at the forefront of industry developments.",
  },
];

const Mission = () => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
          <SectionIntro title='Our Values' color='black' dotColor='blackDot' />
          </div>
          <div className={styles.bottom}>
            {mission.map((x, index) => (
              <div key={index} className={styles.box}>
                <span className={styles.index}>{index + 1} .</span>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
        {/* <div className={styles.test}></div> */}
    </div>
  );
};
export default Mission;
