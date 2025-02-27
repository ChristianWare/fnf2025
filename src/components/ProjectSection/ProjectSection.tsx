import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./ProjectSection.module.css";

const cardsData = [
  { id: 1, title: "6:" },
  { id: 2, title: "recent" },
  { id: 3, title: "projects" },
];

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      <ServicesSectionIntro data={cardsData} />
    </section>
  );
}
