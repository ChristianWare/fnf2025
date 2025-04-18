import Contact2 from "@/components/Contact2/Contact2";
import OtherThings from "@/components/OtherThings/OtherThings";
import PageIntro from "@/components/PageIntro/PageIntro";
import Img1 from "../../../public/images/aboutii.jpeg";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
// import ServiceHero from "@/components/ServicePage/ServiceHero/ServiceHero";
import ListOfServices from "@/components/ServicePage/ListOfServices/ListOfServices";
import Platforms from "@/components/ServicePage/Platforms/Platforms";

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        title='Comprehensive ecommerce solutions'
        introTitle='Our Services'
        src={Img1}
        copy='From strategy to launch and beyond, we provide the expertise you need to create and grow a successful online store.'
      />
      {/* <ServiceHero /> */}
      <ListOfServices />
      <Platforms />
      <OtherThings />
      <FinalCTA />
      <Contact2 />
    </main>
  );
}
