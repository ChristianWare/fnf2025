import styles from "./Pricing.module.css";
import { pricing } from "@/lib/data";
import Button from "@/components/Button/Button";
import LayoutWrapper from "@/components/LayoutWrapper";
import ServicesSectionIntro from "@/components/ServicesSectionIntro/ServicesSectionIntro";

const cardsData = [
  { id: 1, title: "4:" },
  { id: 3, title: "Pricing" },
];

const Pricing = () => {
  return (
    <section className={styles.container}>
      <ServicesSectionIntro data={cardsData} />

      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Package Options</h2>
          </div>
          <div className={styles.bottom}>
            {pricing.map((x) => (
              <div className={styles.card} key={x.id}>
                <div className={styles.cardTop}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.description}>
                    <span className={styles.idealFor}>Ideal For : </span>
                    {x.description}
                  </p>
                  <div className={styles.timeframe}>{x.timeframe}</div>
                </div>
                <div className={styles.price}>${x.price}</div>
                <div className={styles.btnContainer}>
                  <Button
                    text='Book Your session'
                    href='/contact'
                    btnType='primary'
                  />
                </div>
                <div className={styles.featureBox}>
                  <p className={styles.feature}>{x.features}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default Pricing;
