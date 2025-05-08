// import LayoutWrapper from "../LayoutWrapper";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import styles from "./AboutUs.module.css";
import Img1 from "../../../public/images/service.jpg";

/**
 * Fast‑scan “About” stats that reinforce our value proposition.
 * Each desc line ends with a hard metric or differentiator.
 */
const data = [
  {
    id: 1,
    title: "Who We Are",
    desc: "A boutique e‑commerce dev studio obsessed with sub‑1 s load times and conversion science.",
  },
  {
    id: 2,
    title: "What We Do",
    desc: "Design + engineer Shopify and headless storefronts that lift CR an average 23 %.",
  },
  {
    id: 3,
    title: "Why We Do It",
    desc: "Every extra second costs 7 % in sales— we hate leaving money on the table as much as you do.",
  },
  {
    id: 4,
    title: "What Sets Us Apart",
    desc: "Performance‑first code meets story‑driven design— no template bloat, just speed that converts.",
  },
  {
    id: 5,
    title: "Mission",
    desc: "Ship 1‑second storefronts and turn browsers into buyers through relentless A/B optimisation.",
  },
  {
    id: 6,
    title: "Culture",
    desc: "Craft, candour, continuous learning— we cap projects so every client gets founder‑level attention.",
  },
];

export default function AboutUs() {
  return (
    <section className={styles.container} id='about'>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.copy}>
              <strong>Fonts&nbsp;&amp;&nbsp;Footers</strong> is a Phoenix‑based
              e‑commerce agency that fuses pixel‑perfect design (“Fonts”) with
              rock‑solid engineering (“Footers”). Our team has one north star—
              <em>speed that sells</em>. Work with us and you’ll get
              senior‑level attention, transparent sprints, and a storefront that
              outpaces both Google’s Core Web Vitals <em>and</em> your
              competition.
            </p>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={Img1}
                alt='Fonts & Footers office'
                title='Fonts & Footers'
              />
            </div>
          </div>

          <div className={styles.right}>
            {data.map((item) => (
              <div className={styles.card} key={item.id}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
