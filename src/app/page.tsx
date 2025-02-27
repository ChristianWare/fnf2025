import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";

import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Process from "@/components/Process/Process";
import VideoSection from "@/components/VideoSection/VideoSection";
import OtherThings from "@/components/OtherThings/OtherThings";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <Impressions />
        <ServicesSection />
        <ServiceDetails />
        <Process />
        <VideoSection />
        <OtherThings />
        <Pricing />
      </div>
    </main>
  );
}
