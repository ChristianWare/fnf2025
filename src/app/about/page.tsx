import AboutHero from "@/components/AboutHero/AboutHero";
import AboutIntro from "@/components/AboutIntro/AboutIntro";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
// import Contact1 from "@/components/Contact1/Contact1";
// import Contact2 from "@/components/Contact2/Contact2";
// import FinalCTA from "@/components/FinalCTA/FinalCTA";
// import OtherThings from "@/components/OtherThings/OtherThings";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <HowItWorks />
      {/* <OtherThings />
      <Contact1 />
      <Contact2 />
      <FinalCTA /> */}
    </main>
  );
}
