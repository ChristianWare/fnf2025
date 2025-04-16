import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./PricingIntro.module.css";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";

const data = [
  {
    id: 1,
    title: "Transparent costs",
    desc: "We provide detailed proposals with clear breakdowns of all costs involved.",
  },
  {
    id: 2,
    title: "Flexible options",
    desc: "Choose from our packages or request a custom solution tailored to your specific needs.",
  },
  {
    id: 3,
    title: "Value-based pricing",
    desc: "Our fees reflect the long-term value and ROI our solutions deliver for your business.",
  },
  {
    id: 4,
    title: "No hidden charges",
    desc: "We're upfront about what's included, with no surprise costs appearing later.",
  },
];

export default function PricingIntro() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeaderContainer}>
              <SectionHeading2 title='Our Approach to Pricing' />
            </div>
            <h3 className={styles.headingii}>
              We believe in forming long-term partnerships with our clients,
              which is why we focus on delivering value rather than simply
              completing projects. Our pricing reflects this commitment to your
              ongoing success.
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
