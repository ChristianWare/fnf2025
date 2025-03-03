import AboutIntro from "@/components/AboutIntro/AboutIntro";
// import Contact1 from "@/components/Contact1/Contact1";
import Contact2 from "@/components/Contact2/Contact2";
import Explain from "@/components/Explain/Explain";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import OtherThings from "@/components/OtherThings/OtherThings";

export default function AboutPage() {
  return (
    <main>
      <Explain />
      <AboutIntro />
      <OtherThings />
      <Contact2 />
      <FinalCTA />
    </main>
  );
}
