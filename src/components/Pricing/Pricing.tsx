import LayoutWrapper from "../LayoutWrapper";
import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./Pricing.module.css";

const cardsData = [
  { id: 1, title: "5:" },
  { id: 2, title: "Pricing" },
];

export default function Pricing() {
  return (
    <section className={styles.container}>
      <ServicesSectionIntro data={cardsData} />
      <LayoutWrapper>
        <div className={styles.content}>
          <h3 className={styles.heading}>
            Before you proceed, a few things you should know about us
          </h3>
        </div>
      </LayoutWrapper>
    </section>
  );
}
