import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import Contact2 from "@/components/Contact2/Contact2";
import Pricing from "@/components/PricingPage/Pricing/Pricing";
import AboutHero from "@/components/AboutHero/AboutHero";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Faq from "@/components/Faq/Faq";
import ListOfServices from "@/components/ServicePage/ListOfServices/ListOfServices";
// import PageIntro from "@/components/PageIntro/PageIntro";
// import Img1 from "../../public/images/about.jpeg";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <Impressions />
        <AboutHero />
        <ServicesSection />
        <ListOfServices />
        <ProjectSection />
        <Pricing />
        <Faq />
        {/* <PageIntro
          title='Ready to elevate your e-commerce experience?'
          introTitle='Fonts & Footers'
          src={Img1}
          copy="Let's discuss how we can help your business grow with a custom e-commerce solution that meets your unique needs."
        /> */}
        <FinalCTA />
        <Contact2 />
      </div>
    </main>
  );
}
