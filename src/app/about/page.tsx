import AboutIntro from "@/components/AboutIntro/AboutIntro";
import AboutPageHero from "@/components/AboutPage/AboutPageHero/AboutPageHero";
import OurApproach from "@/components/AboutPage/OurApproach/OurApproach";
import Contact2 from "@/components/Contact2/Contact2";
import OtherThings from "@/components/OtherThings/OtherThings";

export default function AboutPage() {
  return (
    <main>
      <AboutPageHero />
      <AboutIntro />
      <OurApproach />
      <OtherThings />
      <Contact2 />
    </main>
  );
}
