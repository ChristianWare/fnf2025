"use client";

import styles from "./Solutionii.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Traditional from "../../../public/images/traditional.jpg";
import Digital from "../../../public/images/digital.jpg";
import Subscription from "../../../public/images/subscription.jpg";
import Service from "../../../public/images/service.jpg";
import Booking from "../../../public/images/booking.jpg";
import Marketplace from "../../../public/images/marketplace.jpg";
import Dropshipping from "../../../public/images/dropshipping.jpg";
import Membership from "../../../public/images/membership.jpg";
import B2b from "../../../public/images/b2b.jpg";
import Social from "../../../public/images/ social.jpg";

const data = [
  {
    id: 1,
    title: "Traditional Retail E-commerce",
    desc: "Focuses on selling physical products directly to consumers through online stores. Examples include Amazon, Walmart.com, and Target.com, featuring product catalogs, shopping carts, and various shipping options.",
    src: Traditional,
  },
  {
    id: 2,
    title: "Digital Product E-commerce",
    desc: "Sells downloadable or accessible digital goods without physical shipping. Examples include software platforms, stock photo sites, and e-book stores, with secure download links and digital rights management systems.",
    src: Digital,
  },
  {
    id: 3,
    title: "Subscription-Based E-commerce",
    desc: "Charges recurring fees for products or services delivered on a regular schedule. Examples include Netflix, Dollar Shave Club, and meal kit services, featuring subscription management and recurring billing systems.",
    src: Subscription,
  },
  {
    id: 4,
    title: "Service-Based E-commerce",
    desc: "Sells professional services rather than physical products through online platforms. Examples include freelance marketplaces and consulting services, with service catalogs, booking systems, and provider profiles.",
    src: Service,
  },
  {
    id: 5,
    title: "Booking/Reservation Systems",
    desc: "Facilitates scheduling and reservations for services like accommodations or dining. Examples include Airbnb, Booking.com, and OpenTable, with availability calendars and reservation management features.",
    src: Booking,
  },
  {
    id: 6,
    title: "Marketplace Platforms",
    desc: "Connects multiple sellers with buyers in one unified platform. Examples include eBay, Etsy, and Alibaba, featuring seller accounts, rating systems, and commission structures for transactions.",
    src: Marketplace,
  },
  {
    id: 7,
    title: "Dropshipping E-commerce",
    desc: "Sells products that are fulfilled by third-party suppliers without inventory management. Examples include many Shopify stores, with supplier integration and automated order routing capabilities.",
    src: Dropshipping,
  },
  {
    id: 9,
    title: "Membership Sites",
    desc: "Provides access to exclusive content or services behind a paywall. Examples include online courses and private communities, with member-only areas and tiered access levels for different subscriptions.",
    src: Membership,
  },
  {
    id: 10,
    title: "Business-to-Business (B2B) E-commerce",
    desc: "Focuses on transactions between businesses rather than individual consumers. Examples include Grainger and Alibaba, featuring bulk ordering capabilities, corporate account management, and specialized pricing structures.",
    src: B2b,
  },
  {
    id: 11,
    title: "Social Commerce",
    desc: "Integrates shopping directly into social media platforms for seamless purchasing. Examples include Instagram Shops and Facebook Marketplace, with social integration and influencer connection features.",
    src: Social,
  },
];

export default function Solutionii() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.heading}>
              What is an <br /> Ecommerce website?
            </h2>
            <p className={styles.copy}>
              An e-commerce (electronic commerce) website is a digital platform
              that facilitates the buying and selling of products or services
              over the internet. At its core, an e-commerce website serves as a
              virtual marketplace where transactions occur electronically
              without requiring physical presence.
            </p>
          </div>
          <div className={styles.middle}>
            <span className={styles.subheading}>
              breakdown of the main types (Click a box to learn more) :
            </span>
            <div className={styles.dataBox}>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    activeIndex === index
                      ? `${styles.card} ${styles.active}`
                      : styles.card
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.bottom}>
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.imgContainer}
              >
                <Image
                  src={data[activeIndex].src}
                  alt={data[activeIndex].title}
                  title={data[activeIndex].title}
                  fill
                  className={styles.img}
                  priority
                />
                <div className={styles.overlay}></div>
                <div className={styles.descriptionContainer}>
                  <p className={styles.descriptionText}>
                    {data[activeIndex].desc}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
