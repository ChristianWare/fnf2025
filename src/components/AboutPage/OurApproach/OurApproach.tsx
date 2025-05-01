import styles from "./OurApproach.module.css";
// import SectionHeading3 from "@/components/SectionHeading3/SectionHeading3";
import SlowLoading from "../../../../public/icons/badLoading.svg";
import BadMobile from "../../../../public/icons/badMobile.svg";
import BadCheckout from "../../../../public/icons/badCheckout.svg";
import BadVisibility from "../../../../public/icons/badSearch.svg";

const data = [
  {
    id: 1,
    title: "Slow Page Loading Times",
    desc: "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your online brand's reputation.",
    icon: <SlowLoading className={styles.icon} />,
  },
  {
    id: 2,
    title: "Bad Mobile Phone Experience",
    desc: "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices, resulting in lost opportunities as customers shop on the go.",
    icon: <BadMobile className={styles.icon} />,
  },
  {
    id: 3,
    title: "Complicated Checkout Process",
    desc: "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
    icon: <BadCheckout className={styles.icon} />,
  },
  {
    id: 4,
    title: "Low Search Engine Visibility",
    desc: "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
    icon: <BadVisibility className={styles.icon} />,
  },
];

interface Props {
  background?: string;
}

export default function OurApproach({ background = "" }: Props) {
  return (
    <section className={`${styles.container} ${styles[background]}`}>
      <div className={styles.content}>
        {/* <div className={styles.top}>
          <SectionHeading3 title='' />
        </div> */}
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <h4 className={styles.title}>{x.title}</h4>
              {x.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
