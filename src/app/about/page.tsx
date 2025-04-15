import AboutIntro from "@/components/AboutIntro/AboutIntro";
import OurApproach from "@/components/AboutPage/OurApproach/OurApproach";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import OtherThings from "@/components/OtherThings/OtherThings";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public/images/aboutii.jpeg";

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title='We build e-commerce experiences that drive growth'
        introTitle='About Us'
        src={Img1}
        copy='Fonts & Footers is a specialized e-commerce development agencyhelping businesses of all sizes establish and optimize their online presence. With a focus on user experience, conversion optimization, and technical excellence, we create online stores that not only look great but also drive real business results.'
      />
      <AboutIntro />
      <OurApproach />
      <HowItWorks />
      <OtherThings />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
