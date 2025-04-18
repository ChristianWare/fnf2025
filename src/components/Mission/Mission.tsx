"use client";

import styles from "./Mission.module.css";
import Continuous from "../../../public/icons/continuous.svg";
import Measurable from "../../../public/icons/measurable.svg";
import Partner from "../../../public/icons/partner.svg";
import Qoq from "../../../public/icons/qoq.svg";
import Transparency from "../../../public/icons/transparency.svg";
import SectionHeading3 from "../SectionHeading3/SectionHeading3";

const mission = [
  {
    feature: "Quality over quantity",
    desc: "We take on a limited number of projects to ensure each client receives our full attention and the highest quality work.",
    summary: "Excellence",
    icon: <Qoq className={styles.icon} />,
  },
  {
    feature: "Transparency",
    desc: "We believe in open communication about processes, timelines, and outcomes.",
    summary: "Honesty",
    icon: <Transparency className={styles.icon} />,
  },
  {
    feature: "Measurable results",
    desc: "We focus on metrics that matter to your business, not just vanity statistics.",
    summary: "Impact",
    icon: <Measurable className={styles.icon} />,
  },
  {
    feature: "Long-term partnerships",
    desc: "We build relationships with our clients that extend beyond the initial project launch.",
    summary: "Commitment",
    icon: <Partner className={styles.icon} />,
  },
  {
    feature: "Continuous learning",
    desc: "The e-commerce landscape is constantly evolving, and we stay at the forefront of industry developments.",
    summary: "Growth",
    icon: <Continuous className={styles.icon} />,
  },
];
const Mission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
       
        <SectionHeading3 title='Our Values' color='orange' />
        <div className={styles.bottom}>
          {mission.map((x, index) => (
            <div key={index} className={styles.box}>
              {x.icon}
              <div className={styles.boxBottom}>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
                <span className={styles.tag}>{x.summary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Mission;
