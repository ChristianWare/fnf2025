import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./Contact2.module.css";

const cardsData = [
  { id: 1, title: "8:" },
  { id: 2, title: "Feel Free To " },
  { id: 3, title: "Contact us" },
  { id: 4, title: "Any time" },
];

export default function Contact2() {
  return (
    <section className={styles.container}>
      <ServicesSectionIntro data={cardsData} />
    </section>
  );
}
