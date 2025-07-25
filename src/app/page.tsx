// import Impressions from "@/coamponents/Impressions/Impressions";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
// import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Contact2 from "@/components/Contact2/Contact2";
// import Pricing from "@/components/PricingPage/Pricing/Pricing";
// import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Faq from "@/components/Faq/Faq";
import ListOfServices from "@/components/ServicePage/ListOfServices/ListOfServices";
// import Problem from "@/components/AboutPage/Problem/Problem";
import NoiseBg from "@/components/Noise/NoiseBg";
// import HomePageSolutions from "@/components/HomePageSolutions/HomePageSolutions";
import ContactHero from "./contact/components/ContactHero/ContactHero";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import Pricing from "@/components/Pricing/Pricing";
import Focus from "@/components/Focus/Focus";
import AboutIntro from "@/components/AboutPage/AboutIntro/AboutIntro";
import AboutUs from "@/components/AboutUs/AboutUs";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import HomePageSolutions from "@/components/HomePageSolutions/HomePageSolutions";
// import PortfolioPageIntro from "./portfolio/components/PortfolioPageIntro/PortfolioPageIntro";
// import Problem from "@/components/AboutPage/Problem/Problem";
// import Circle from "@/components/Circle/Circle";
// import Mission from "@/components/AboutPage/Mission/Mission";

export default function Home() {
  return (
    <main>
      <NoiseBg>
        <div className={styles.scrollContainer}>
          <Hero />
          <AboutIntro />
          <AboutUs />
          <Focus />
          <ListOfServices />
          <HowItWorks />
          <HomePageSolutions />
          <ProjectSection />
          {/* <PortfolioPageIntro /> */}
          <ServiceDetails />
          <Pricing />
          <Faq />
          <ContactHero />
          <Contact2 />
        </div>
      </NoiseBg>
    </main>
  );
}
