import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
// import Process from "@/components/Process/Process";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Contact2 from "@/components/Contact2/Contact2";
import OtherThings from "@/components/OtherThings/OtherThings";
import Pricing from "@/components/Pricing/Pricing";
import AboutHero from "@/components/AboutHero/AboutHero";
import ShuffleHero from "@/components/ShuffleHero/ShuffleHero";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <Impressions />
        <AboutHero />
        <ServicesSection />
        <ServiceDetails />
        <ProjectSection />
        <Pricing />
        <OtherThings />
        <FinalCTA />
        <Contact2 />
      </div>
    </main>
  );
}
