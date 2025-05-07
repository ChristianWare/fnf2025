import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import OtherThings from "@/components/OtherThings/OtherThings";

import ProjectPreview from "@/components/PortfolioPage/ProjectPreview/ProjectPreview";
import Faq from "@/components/Faq/Faq";
import PortfolioPageIntro from "./components/PortfolioPageIntro/PortfolioPageIntro";

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioPageIntro />
      <ProjectPreview />
      <Faq />
      <OtherThings />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
