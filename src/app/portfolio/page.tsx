import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import OtherThings from "@/components/OtherThings/OtherThings";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public/images/portfolio.jpg";
import OurApproach from "@/components/AboutPage/OurApproach/OurApproach";
import ProjectPreview from "@/components/PortfolioPage/ProjectPreview/ProjectPreview";
import Faq from "@/components/Faq/Faq";

export default function PortfolioPage() {
  return (
    <main>
      <PageIntro
        title='Our work speaks for itself'
        introTitle='Portfolio'
        src={Img1}
        copy='Explore our portfolio of successful e-commerce projects across various industries and business models.'
      />
      <ProjectPreview />
      <OurApproach background='white' />
      <Faq />
      <OtherThings />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
