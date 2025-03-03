import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";

import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Process from "@/components/Process/Process";
import VideoSection from "@/components/VideoSection/VideoSection";
import Contact1 from "@/components/Contact1/Contact1";
// import OtherThings from "@/components/OtherThings/OtherThings";
import Pricing from "@/components/Pricing/Pricing";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

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
        <Pricing />
        <ProjectSection />
        <Contact1 />
        <Contact2 />
        <FinalCTA />
      </div>
    </main>
  );
}
