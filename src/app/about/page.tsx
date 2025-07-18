import AboutIntro from "@/components/AboutPage/AboutIntro/AboutIntro";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

import PageIntro from "@/components/PageIntro/PageIntro";

import Problem from "@/components/AboutPage/Problem/Problem";
import Faq from "@/components/Faq/Faq";
// import AboutMission from "@/components/AboutPage/AboutMission/AboutMission";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
// import Mission from "@/components/AboutPage/Mission/Mission";
import HomePageSolutions from "@/components/HomePageSolutions/HomePageSolutions";
import Explain from "@/components/Explain/Explain";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Process from "@/components/Process/Process";
// import Solution from "@/components/Solution/Solution";
import Solutionii from "@/components/Solutionii/Solutionii";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title='We build ecommerce experiences that drive growth'
        // copy='Fonts & Footers is a specialized e-commerce development agencyhelping businesses of all sizes establish and optimize their online presence. With a focus on user experience, conversion optimization, and technical excellence, we create online stores that not only look great but also drive real business results.'
      />
      <Solutionii />
      {/* <Solution /> */}
      <Process />
      <HowItWorks />
      <Explain />
      <AboutIntro />
      {/* <Mission /> */}
      <Problem />
      <HomePageSolutions />
      {/* <AboutMission /> */}
      <ServiceDetails />
      <Faq />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
