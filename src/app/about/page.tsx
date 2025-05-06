import AboutIntro from "@/components/AboutPage/AboutIntro/AboutIntro";
import OurApproach from "@/components/AboutPage/OurApproach/OurApproach";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import OtherThings from "@/components/OtherThings/OtherThings";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public/images/servicesHero.jpg";
import Problem from "@/components/AboutPage/Problem/Problem";
import Compare from "@/components/AboutPage/Compare/Compare";
import Faq from "@/components/Faq/Faq";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title='We build ecommerce experiences that drive growth'
        // copy='Fonts & Footers is a specialized e-commerce development agencyhelping businesses of all sizes establish and optimize their online presence. With a focus on user experience, conversion optimization, and technical excellence, we create online stores that not only look great but also drive real business results.'
      />
      {/* <AboutIntro />
      <OurApproach />
      <HowItWorks />
      <Problem />
      <Compare />
      <Faq />
      <OtherThings /> */}
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
