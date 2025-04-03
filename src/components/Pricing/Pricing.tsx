import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./Pricing.module.css";

const cardsData = [
  { id: 1, title: "5:" },
  { id: 3, title: "Pricing" },
];

const pricingData = [
  {
    id: 2845654656,
    title: "Business",
    href: "/services/business-websites",
    mostPopular: false,
    prices: [
      {
        id: 1,
        price: "295 / Month",
      },
      {
        id: 2,
        price: "2,832 / Year",
      },
    ],
    includes: [
      {
        id: 28.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 28.3,
        feature: "Custom coded website",
      },
      {
        id: 28.4,
        feature: "SEO Services",
      },
      {
        id: 28.5,
        feature: "12 Blog Articles/year",
      },
      {
        id: 28.88888,
        feature: "12 Blog Articles/year",
      },
    ],
    btnType: "tertiary",
  },
  {
    id: 27,
    title: "E-Commerce",
    href: "/services/ecommerce-stores",
    mostPopular: true,
    prices: [
      {
        id: 1,
        price: "315 / Month",
      },
      {
        id: 2,
        price: "3,024 / Year",
      },
    ],
    includes: [
      {
        id: 27.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 27.3,
        feature: "Custom coded website",
      },
      {
        id: 27.4,
        feature: "SEO Services",
      },
      {
        id: 27.5,
        feature: "24 Blog Articles/year",
      },
      {
        id: 27.6,
        feature: "Chat bot",
      },
    ],
  },
  {
    id: 28,
    title: "Booking",
    href: "/services/booking-platforms",
    mostPopular: false,

    prices: [
      {
        id: 1,
        price: "375 / Month",
      },
      {
        id: 2,
        price: "3,600 / Year",
      },
    ],
    includes: [
      {
        id: 28.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 28.3,
        feature: "Custom coded website",
      },
      {
        id: 28.4,
        feature: "SEO Services",
      },
      {
        id: 28.5,
        feature: "36 Blog Articles/year",
      },
      {
        id: 28.6,
        feature: "Chat bot",
      },
    ],
  },
  {
    id: 29,
    title: "Booking",
    href: "/services/booking-platforms",
    mostPopular: false,

    prices: [
      {
        id: 1.29,
        price: "375 / Month",
      },
      {
        id: 2.29,
        price: "3,600 / Year",
      },
    ],
    includes: [
      {
        id: 29.2,
        feature: "Stripe Payment Gateway",
      },
      {
        id: 29.3,
        feature: "Custom coded website",
      },
      {
        id: 29.4,
        feature: "SEO Services",
      },
      {
        id: 29.5,
        feature: "36 Blog Articles/year",
      },
      {
        id: 29.6,
        feature: "Chat bot",
      },
    ],
  },
];
export default function Pricing() {
  return (
    <>
      <ServicesSectionIntro data={cardsData} />
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.bottom}>
              <div className={styles.dataMapContainer}>
                {pricingData.map((x) => (
                  <div key={x.id} className={styles.card}>
                    <div className={styles.tab}>{x.title}</div>
                    <div className={styles.cardTop}>
                      {/* <h4 className={styles.title}>{x.title}</h4> */}
                      <span className={styles.price}>$5,000</span>
                    </div>
                    <div className={styles.cardBottom}>
                      {x.includes.map((y) => (
                        <ul key={y.id} className={styles.itemContainer}>
                          <li className={styles.item}>
                            {y.feature}
                            <span className={styles.blackDot} />
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.btnContainer}>
              <Button btnType='secondary' href='/' text='More Details' />
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </>
  );
}
