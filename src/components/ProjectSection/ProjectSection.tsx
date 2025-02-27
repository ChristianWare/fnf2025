import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
// import ServicesSectionIntro from "../ServicesSectionIntro/ServicesSectionIntro";
import styles from "./ProjectSection.module.css";

// const cardsData = [
//   { id: 1, title: "6:" },
//   { id: 2, title: "recent" },
//   { id: 3, title: "projects" },
// ];

const projectData = [
  { id: 1, title: "Project Name" },
  { id: 2, title: "Project Name" },
  { id: 3, title: "Project Name" },
  { id: 3, title: "Project Name" },
  { id: 3, title: "Project Name" },
  { id: 3, title: "Project Name" },
];

export default function ProjectSection() {
  return (
    <section className={styles.container}>
      {/* <ServicesSectionIntro data={cardsData} /> */}
      <SectionHeading number='4' title='Recent Projects' />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <span className={styles.clients}>Clients (2013-2025)</span>
            <div className={styles.projectDataContainer}>
              {projectData.map((x) => (
                <div key={x.id} className={styles.card}>
                  <h3 className={styles.title}>{x.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
