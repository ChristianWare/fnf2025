import styles from "./ListOfServices.module.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionHeading2 from "@/components/SectionHeading2/SectionHeading2";
import Image from "next/image";
import Devlopment from "../../../../public/images/servicesHero.jpg";
import Booking from "../../../../public/images/bookingii.jpg";
import Button from "@/components/Button/Button";
// import SectionHeading3 from "@/components/SectionHeading3/SectionHeading3";
// import SectionHeading from "@/components/SectionHeading/SectionHeading";
// import Strategy from "../../../../public/images/strategy.jpg";
// import Design from "../../../../public/images/design.jpg";
// import Integration from "../../../../public/images/integration.jpg";
// import Growth from "../../../../public/images/growth.jpg";
// import Support from "../../../../public/images/support.jpg";

const data = [
  // {
  //   id: 1,
  //   service: "Strategy & Planning",
  //   headline: "Building a foundation for success",
  //   desc: "Every successful e-commerce project starts with a clear strategy. We work with you to understand your business goals, target audience, and competitive landscape to create a roadmap for success.",
  //   src: Strategy,
  //   servicesInclude: [
  //     {
  //       id: 1.1,
  //       serviceName: "E-commerce business model analysis",
  //       description:
  //         "We evaluate your business model to identify the most effective e-commerce approach for your specific goals and market.",
  //     },
  //     {
  //       id: 1.2,
  //       serviceName: "User research and persona development",
  //       description:
  //         "We research your target audience to create detailed buyer personas that guide design and functionality decisions.",
  //     },
  //     {
  //       id: 1.3,
  //       serviceName: "Competitive analysis",
  //       description:
  //         "We analyze your competitors' online presence to identify opportunities for differentiation and competitive advantage.",
  //     },
  //     {
  //       id: 1.4,
  //       serviceName: "Content strategy",
  //       description:
  //         "We develop a comprehensive plan for your product descriptions, category pages, and marketing content to maximize engagement and SEO.",
  //     },
  //     {
  //       id: 1.5,
  //       serviceName: "Technical requirements planning",
  //       description:
  //         "We define the technical specifications needed to support your business goals and customer expectations.",
  //     },
  //     {
  //       id: 1.6,
  //       serviceName: "Platform selection guidance",
  //       description:
  //         "We help you choose the optimal e-commerce platform based on your business needs, budget, and growth plans.",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   service: "Design & User Experience",
  //   headline: "Creating experiences that convert",
  //   desc: "Your online store should not only reflect your brand but also guide customers smoothly through the purchase journey. Our design team creates intuitive, engaging interfaces that drive conversions while providing an exceptional user experience.",
  //   src: Design,
  //   servicesInclude: [
  //     {
  //       id: 2.1,
  //       serviceName: "Brand implementation",
  //       description:
  //         "We translate your brand identity into a cohesive digital experience that resonates with your target audience.",
  //     },
  //     {
  //       id: 2.2,
  //       serviceName: "Responsive UI/UX design",
  //       description:
  //         "We create intuitive, visually appealing interfaces that adapt seamlessly to all screen sizes and devices.",
  //     },
  //     {
  //       id: 2.3,
  //       serviceName: "Mobile optimization",
  //       description:
  //         "We ensure your store delivers an exceptional shopping experience on smartphones and tablets, where most e-commerce browsing now occurs.",
  //     },
  //     {
  //       id: 2.4,
  //       serviceName: "Checkout flow optimization",
  //       description:
  //         "We streamline the checkout process to minimize abandonment and maximize conversion rates at this critical stage.",
  //     },
  //     {
  //       id: 2.5,
  //       serviceName: "Product page design",
  //       description:
  //         "We craft compelling product pages that showcase your offerings and provide all the information customers need to make purchase decisions.",
  //     },
  //     {
  //       id: 2.6,
  //       serviceName: "Navigation and information architecture",
  //       description:
  //         "We structure your site to make it easy for customers to find products and information, improving user experience and conversion rates.",
  //     },
  //   ],
  // },
  {
    id: 3,
    service: "E-commerce Development",
    headline: "Building robust, scalable online stores",
    desc: "Our development team brings your e-commerce vision to life with clean, efficient code and seamless integrations. We build on industry-leading platforms while customizing the functionality to meet your specific business requirements.",
    src: Devlopment,
    servicesInclude: [
      {
        id: 3.1,
        serviceName: "Custom e-commerce development",
        description:
          "We build tailored e-commerce solutions that address your unique business requirements and customer needs.",
      },
      {
        id: 3.2,
        serviceName: "Platform migration (Shopify, WooCommerce, etc.)",
        description:
          "We seamlessly transition your existing store to a new platform while preserving your data, SEO, and customer experience.",
      },
      {
        id: 3.3,
        serviceName: "Payment gateway integration",
        description:
          "We implement secure, reliable payment processing options that support your customers' preferred payment methods.",
      },
      {
        id: 3.4,
        serviceName: "Shipping and tax configuration",
        description:
          "We set up accurate shipping calculations and tax applications to prevent checkout surprises and abandoned carts.",
      },
      {
        id: 3.5,
        serviceName: "Inventory management",
        description:
          "We implement systems to track and display product availability in real-time across all your sales channels.",
      },
      {
        id: 3.6,
        serviceName: "Product data import and setup",
        description:
          "We efficiently organize and import your product catalog with all necessary attributes, variations, and media.",
      },
    ],
  },
  {
    id: 4,
    service: "Booking‑Site Development",
    headline: "Fast, friction‑free scheduling & reservations",
    desc: "We build conversion‑focused booking platforms for service brands—salons, luxury car services, vacation rentals, clinics, and more. Each site delivers a seamless, mobile‑first flow from availability search to paid confirmation, fully integrated with your back‑office tools.",
    src: Booking,
    servicesInclude: [
      {
        id: 4.1,
        serviceName: "Custom booking‑flow design",
        description:
          "We map and code a user journey that matches your service logic—single appointments, multi‑step rentals, or group sessions—so guests book in under 60 seconds.",
      },
      {
        id: 4.2,
        serviceName: "Real‑time calendar & resource sync",
        description:
          "Your online availability pulls live data from Google Calendar, Microsoft 365, or PMS (Property‑Management System) APIs, eliminating double‑bookings.",
      },
      {
        id: 4.3,
        serviceName: "Integrated payments & deposits",
        description:
          "Stripe and Square gateways handle deposits, full charges, or split payments while keeping you PCI compliant.",
      },
      {
        id: 4.4,
        serviceName: "Automated reminders & no‑show protection",
        description:
          "SMS and email reminders reduce no‑shows by up to 40 %. Optional card‑on‑file or late‑cancel fees protect revenue.",
      },
      {
        id: 4.5,
        serviceName: "Multi‑location & staff management",
        description:
          "We build admin dashboards where you assign services, set staff hours, and manage pricing per location—all in one place.",
      },
      {
        id: 4.6,
        serviceName: "Analytics & occupancy reporting",
        description:
          "Custom dashboards surface key KPIs like utilisation rate, average booking value, and repeat‑guest percentage so you can optimise pricing and staffing.",
      },
    ],
  },
  // {
  //   id: 4,
  //   service: "Systems Integration",
  //   headline: "Connecting your digital ecosystem",
  //   desc: "Modern e-commerce businesses rely on multiple systems working together seamlessly. We ensure your online store integrates with your existing business tools and processes for maximum efficiency.",
  //   src: Integration,
  //   servicesInclude: [
  //     {
  //       id: 4.1,
  //       serviceName: "ERP integration",
  //       description:
  //         "We connect your e-commerce platform with your enterprise resource planning system to synchronize inventory, orders, and customer data.",
  //     },
  //     {
  //       id: 4.2,
  //       serviceName: "CRM connection",
  //       description:
  //         "We link your store to your customer relationship management system to create a unified view of customer interactions.",
  //     },
  //     {
  //       id: 4.3,
  //       serviceName: "Marketing automation setup",
  //       description:
  //         "We integrate email marketing and other automation tools to nurture leads and drive repeat purchases.",
  //     },
  //     {
  //       id: 4.4,
  //       serviceName: "Inventory management systems",
  //       description:
  //         "We synchronize your e-commerce platform with warehouse and inventory systems to maintain accurate stock levels.",
  //     },
  //     {
  //       id: 4.5,
  //       serviceName: "Accounting software integration",
  //       description:
  //         "We connect your store with your accounting software to streamline financial tracking and reporting.",
  //     },
  //     {
  //       id: 4.6,
  //       serviceName: "Shipping and fulfillment integration",
  //       description:
  //         "We integrate with shipping providers and fulfillment centers to automate order processing and delivery.",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   service: "Optimization & Growth",
  //   headline: "Continuously improving performance",
  //   desc: "Launching your store is just the beginning. We help you analyze performance data and implement ongoing optimizations to increase conversions, average order value, and customer lifetime value.",
  //   src: Growth,
  //   servicesInclude: [
  //     {
  //       id: 5.1,
  //       serviceName: "Conversion rate optimization",
  //       description:
  //         "We identify and remove conversion barriers to turn more of your visitors into paying customers.",
  //     },
  //     {
  //       id: 5.2,
  //       serviceName: "A/B testing",
  //       description:
  //         "We conduct systematic experiments to determine which design elements and content drive the best results.",
  //     },
  //     {
  //       id: 5.3,
  //       serviceName: "Performance optimization",
  //       description:
  //         "We enhance your site's loading speed and responsiveness to reduce bounce rates and improve user satisfaction.",
  //     },
  //     {
  //       id: 5.4,
  //       serviceName: "SEO implementation",
  //       description:
  //         "We optimize your site structure, content, and technical elements to improve visibility in search engine results.",
  //     },
  //     {
  //       id: 5.5,
  //       serviceName: "Analytics setup and reporting",
  //       description:
  //         "We configure tracking tools and create dashboards that provide actionable insights into your store's performance.",
  //     },
  //     {
  //       id: 5.6,
  //       serviceName: "Customer journey analysis",
  //       description:
  //         "We map and analyze the entire customer experience to identify opportunities for improvement and personalization.",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   service: "Ongoing Support & Maintenance",
  //   headline: "Keeping your store running smoothly",
  //   desc: "E-commerce platforms require regular updates and maintenance to ensure security, performance, and compatibility. Our support plans provide peace of mind that your online store will continue to perform at its best.",
  //   src: Support,
  //   servicesInclude: [
  //     {
  //       id: 6.1,
  //       serviceName: "Platform updates and security patches",
  //       description:
  //         "We keep your e-commerce platform and plugins up-to-date to maintain security and access the latest features.",
  //     },
  //     {
  //       id: 6.2,
  //       serviceName: "Performance monitoring",
  //       description:
  //         "We continuously track your site's speed, uptime, and other key metrics to ensure optimal performance.",
  //     },
  //     {
  //       id: 6.3,
  //       serviceName: "Bug fixes and troubleshooting",
  //       description:
  //         "We quickly identify and resolve any issues that arise to minimize disruption to your business.",
  //     },
  //     {
  //       id: 6.4,
  //       serviceName: "Content updates",
  //       description:
  //         "We help you keep your product information, promotions, and other content fresh and relevant.",
  //     },
  //     {
  //       id: 6.5,
  //       serviceName: "Feature enhancements",
  //       description:
  //         "We implement new functionality to meet evolving business needs and customer expectations.",
  //     },
  //     {
  //       id: 6.6,
  //       serviceName: "Technical support",
  //       description:
  //         "We provide responsive assistance to address questions and concerns from you and your team.",
  //     },
  //   ],
  // },
];

export default function ListOfServices() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading2 title='Our Web Development Services' />
        <div className={styles.content}>
          {data.map((a) => (
            <div key={a.id} className={styles.section}>
              <h3 className={styles.title}>{a.service}</h3>
              <div className={styles.bottom}>
                <div className={styles.imgContainer}>
                  <Image
                    src={a.src}
                    alt=''
                    title=''
                    fill
                    className={styles.img}
                  />
                </div>
                {a.servicesInclude.slice(0, 2).map((b) => (
                  <div key={b.id} className={styles.card}>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTop}>
                        {/* <span className={styles.index}>0{index + 1}</span> */}
                        <h3 className={styles.serviceName}>{b.serviceName}</h3>
                      </div>
                      <div className={styles.cardBottom}>
                        <p className={styles.description}>{b.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.index}>{a.id}</span>
                  </div>
                </div> */}
              </div>
              {/* <p className={styles.desc}>{a.desc}</p> */}
              <div className={styles.btnContainer}>
                <Button
                  text='Learn More'
                  btnType='normal'
                  href='/services'
                  showChevron={true}
                />
              </div>
            </div>
          ))}
          {/* {data.map((x) => (
              <div key={x.id} className={styles.section}>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img1}
                    alt=''
                    title=''
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.index}>{x.id}</span>
                  </div>
                </div>
              </div>
            ))} */}
        </div>
        <div className={styles.btnBottomContainer}>
          <Button
            text='Start My Project'
            btnType='primary'
            href='/contact'
            marquee={true}
          />
        </div>
      </LayoutWrapper>
    </section>
  );
}
