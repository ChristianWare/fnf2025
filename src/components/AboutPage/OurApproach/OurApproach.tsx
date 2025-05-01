import styles from "./OurApproach.module.css";
import SectionHeading3 from "@/components/SectionHeading3/SectionHeading3";

const data = [
  {
    id: 1,
    title: "Very Slow Page Loading Times",
    desc: "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your online brand's reputation.",
  },
  {
    id: 2,
    title: "Bad Mobile Phone Experience",
    desc: "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
  },
  {
    id: 3,
    title: "Complicated Checkout Process",
    desc: "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
  },
  {
    id: 4,
    title: "Low Search Engine Visibility",
    desc: "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
  },
];

interface Props {
  background?: string;
}

export default function OurApproach({ background = "" }: Props) {
  return (
    <section className={`${styles.container} ${styles[background]}`}>
      <div className={styles.content}>
        <div className={styles.top}>
          <SectionHeading3 title='' />
          {/* <h3 className={styles.headingii}>
            We believe that successful e-commerce experiences balance art and
            science. Our approach combines:
          </h3> */}
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
    </section>
  );
}
