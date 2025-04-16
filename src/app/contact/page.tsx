import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public//images/contact.jpg";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import OtherThings from "@/components/OtherThings/OtherThings";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        title="Let's build your ecommerce success story"
        introTitle='Contact Us'
        src={Img1}
        copy='Ready to discuss your project? Our team is here to help you create an e-commerce experience that drives growth for your business.
'
      />
      <OtherThings />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
