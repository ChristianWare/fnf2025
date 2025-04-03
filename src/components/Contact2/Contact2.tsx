// import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import LayoutWrapper from "../LayoutWrapper";
// import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./Contact2.module.css";

// const cardsData = [
//   { id: 1, title: "Drop" },
//   { id: 2, title: "Us" },
//   { id: 3, title: "A Line" },
// ];

export default function Contact2() {
  return (
    <section className={styles.container}>
      {/* <ServicesSectionIntro data={cardsData} /> */}
      <LayoutWrapper>
        {/* <ContactForm /> */}
        
        <Footer />
      </LayoutWrapper>
    </section>
  );
}
