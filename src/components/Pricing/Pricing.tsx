import styles from "./Pricing.module.css";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import { pricing } from "@/lib/data";

const cardsData = [
  { id: 1, title: "4:" },
  { id: 3, title: "Pricing" },
];

// const pricingData = [
//   {
//     id: 2845654656,
//     title: "Business",
//     href: "/services/business-websites",
//     mostPopular: false,
//     prices: [
//       {
//         id: 1,
//         price: "295 / Month",
//       },
//       {
//         id: 2,
//         price: "2,832 / Year",
//       },
//     ],
//     includes: [
//       {
//         id: 28.2,
//         feature: "Stripe Payment Gateway",
//       },
//       {
//         id: 28.3,
//         feature: "Custom coded website",
//       },
//       {
//         id: 28.4,
//         feature: "SEO Services",
//       },
//       {
//         id: 28.5,
//         feature: "12 Blog Articles/year",
//       },
//       {
//         id: 28.88888,
//         feature: "12 Blog Articles/year",
//       },
//     ],
//     btnType: "tertiary",
//   },
//   {
//     id: 27,
//     title: "E-Commerce",
//     href: "/services/ecommerce-stores",
//     mostPopular: true,
//     prices: [
//       {
//         id: 1,
//         price: "315 / Month",
//       },
//       {
//         id: 2,
//         price: "3,024 / Year",
//       },
//     ],
//     includes: [
//       {
//         id: 27.2,
//         feature: "Stripe Payment Gateway",
//       },
//       {
//         id: 27.3,
//         feature: "Custom coded website",
//       },
//       {
//         id: 27.4,
//         feature: "SEO Services",
//       },
//       {
//         id: 27.5,
//         feature: "24 Blog Articles/year",
//       },
//       {
//         id: 27.6,
//         feature: "Chat bot",
//       },
//     ],
//   },
//   {
//     id: 28,
//     title: "Booking",
//     href: "/services/booking-platforms",
//     mostPopular: false,

//     prices: [
//       {
//         id: 1,
//         price: "375 / Month",
//       },
//       {
//         id: 2,
//         price: "3,600 / Year",
//       },
//     ],
//     includes: [
//       {
//         id: 28.2,
//         feature: "Stripe Payment Gateway",
//       },
//       {
//         id: 28.3,
//         feature: "Custom coded website",
//       },
//       {
//         id: 28.4,
//         feature: "SEO Services",
//       },
//       {
//         id: 28.5,
//         feature: "36 Blog Articles/year",
//       },
//       {
//         id: 28.6,
//         feature: "Chat bot",
//       },
//     ],
//   },
//   {
//     id: 29,
//     title: "Booking",
//     href: "/services/booking-platforms",
//     mostPopular: false,

//     prices: [
//       {
//         id: 1.29,
//         price: "375 / Month",
//       },
//       {
//         id: 2.29,
//         price: "3,600 / Year",
//       },
//     ],
//     includes: [
//       {
//         id: 29.2,
//         feature: "Stripe Payment Gateway",
//       },
//       {
//         id: 29.3,
//         feature: "Custom coded website",
//       },
//       {
//         id: 29.4,
//         feature: "SEO Services",
//       },
//       {
//         id: 29.5,
//         feature: "36 Blog Articles/year",
//       },
//       {
//         id: 29.6,
//         feature: "Chat bot",
//       },
//     ],
//   },
// ];
export default function Pricing() {
  return (
    <>
      <ServicesSectionIntro data={cardsData} />
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.top}>
              <h3 className={styles.heading}>
                We believe in forming long-term partnerships with our clients,
                which is why we focus on delivering value rather than simply
                completing projects. Our pricing reflects this commitment to
                your ongoing success.
              </h3>
            </div>
            <div className={styles.bottom}>
              {pricing.slice(0, 3).map((x) => (
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
                      btnType='outline'
                    />
                  </div>
                  {/* <div className={styles.featureBox}>
                    <p className={styles.feature}>{x.features}</p>
                  </div> */}
                </div>
              ))}
            </div>
            <div className={styles.btnContainerii}>
              <Button
                text='Book a free call'
                btnType='primary'
                href='/contact'
                marquee={true}
              />
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </>
  );
}
