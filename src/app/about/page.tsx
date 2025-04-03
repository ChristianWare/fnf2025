import AboutHero from "@/components/AboutHero/AboutHero";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import Contact2 from "@/components/Contact2/Contact2";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Mission from "@/components/Mission/Mission";
import OtherThings from "@/components/OtherThings/OtherThings";
import Owner from "@/components/Owner/Owner";


export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <HowItWorks />
      <Owner />
      <Mission />
      <OtherThings />
      <Contact2 />
    </main>
  );
}
