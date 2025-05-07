import Contact2 from "@/components/Contact2/Contact2";
import Faq from "@/components/Faq/Faq";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import ContactHero from "./components/ContactHero/ContactHero";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Faq />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
