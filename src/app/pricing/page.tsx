import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public/images/pricing.jpg";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Pricing from "@/components/PricingPage/Pricing/Pricing";

export default function PricingPage() {
  return (
    <main>
      <PageIntro
        title='Transparent pricing '
        introTitle='Pricing'
        src={Img1}
        copy="At Fonts & Footers, we understand that every e-commerce business has unique needs and goals. That's why we've designed our pricing structure to be flexible and transparent. Whether you're launching a new online store or optimizing an existing one, we have a solution that fits your requirements and budget."
      />
      <Pricing />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
