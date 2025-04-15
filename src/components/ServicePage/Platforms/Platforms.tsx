import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./Platforms.module.css";
import SectionHeading3 from "@/components/SectionHeading3/SectionHeading3";
import Button from "@/components/Button/Button";

const data = [
  {
    id: 1,
    platform: "Shopify & Shopify Plus",
    description:
      "A user-friendly hosted platform ideal for businesses of all sizes, with Shopify Plus offering enterprise-grade features for high-volume merchants and complex business requirements.",
  },
  {
    id: 2,
    platform: "WooCommerce",
    description:
      "A flexible, open-source plugin for WordPress that provides complete control over your store and works well for businesses already using WordPress or those wanting extensive customization options.",
  },

  {
    id: 3,
    platform: "Wix",
    description:
      "A user-friendly website builder with integrated e-commerce capabilities, perfect for small businesses and entrepreneurs looking for a simple, all-in-one solution with minimal technical requirements.",
  },
  {
    id: 4,
    platform: "Custom solutions",
    description:
      "Tailor-made e-commerce systems built from the ground up to address unique business requirements that can't be met by existing platforms, offering maximum flexibility and scalability.",
  },
];

export default function Platforms() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading3
              title='E-commerce Platforms We Work With'
              color='orange'
            />
            <h3 className={styles.headingii}>
              We specialize in developing on industry-leading e-commerce
              platforms, customizing them to meet your specific business needs:
            </h3>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x.id} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.index}>{x.id}.</span>
                  <h4 className={styles.title}>{x.platform}</h4>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.cta}>
          <h4 className={styles.ctaTitle}>
            Not sure which platform is right for you?
          </h4>
          <div className={styles.btnContainer}>
            <Button
              href='/contact'
              text='Contact us for a consultation'
            btnType='secondary'
            />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
