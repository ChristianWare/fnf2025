import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";

import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ServiceDetails from "@/ServiceDetails/ServiceDetails";
import Process from "@/components/Process/Process";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <Impressions />
        <ServicesSection />
        <ServiceDetails />
        <Process />
      </div>
    </main>
  );
}
