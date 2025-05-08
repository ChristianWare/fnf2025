// import LayoutWrapper from "../LayoutWrapper";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import styles from "./AboutUs.module.css";
import Img1 from "../../../public/images/service.jpg";

const data = [
  {
    id: 1,
    title: "Who we are",
    desc: "Uptime for every e-commerce site we build",
  },
  {
    id: 2,
    title: "What we do",
    desc: "Faster Website load times than industry standard",
  },
  {
    id: 3,
    title: "Why we do it ",
    desc: "Average days to launch your e-commerce store",
  },
  {
    id: 4,
    title: "What Sets Us Apart",
    desc: "Uptime for every e-commerce site we build",
  },
  {
    id: 5,
    title: "Mission",
    desc: "Faster Website load times than industry standard",
  },
  {
    id: 6,
    title: "Culture",
    desc: "Average days to launch your e-commerce store",
  },
];

export default function AboutUs() {
  return (
    <section className={styles.container} id='about'>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <ParallaxImage src={Img1} alt='' title='Fonts & Footers' />
            </div>
            <p className={styles.copy}>
              Fonts & Footers is an e-commerce web development agency.
              We&apos;re experts at blending the latest technology with creative
              ideas for top-notch results. By working with us, you get personal
              care, support, and a website that boosts engagement and sales. We
              operate out of sunny Phoenix, AZ.
            </p>
          </div>
          <div className={styles.right}>
            {data.map((x) => (
              <div className={styles.card} key={x.id}>
                <h3 className={styles.title}>{x.title}</h3>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
