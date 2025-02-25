import Hero from "@/components/Hero/Hero";
import LayoutWrapper from "@/components/LayoutWrapper";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

export default function Home() {
  return (
    <main>
      <Hero />
      <LayoutWrapper>
        <SectionHeading number='1' title='First impressions matter' />
      </LayoutWrapper>
    </main>
  );
}
