import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import ProjectPreview from "@/components/PortfolioPage/ProjectPreview/ProjectPreview";
import Faq from "@/components/Faq/Faq";
import PortfolioPageIntro from "./components/PortfolioPageIntro/PortfolioPageIntro";

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioPageIntro />
      <ProjectPreview />
      <Faq />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
