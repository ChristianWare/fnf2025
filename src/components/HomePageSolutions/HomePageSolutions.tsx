// import SectionHeading3 from "../SectionHeading3/SectionHeading3";
import styles from "./HomePageSolutions.module.css";

const data = [
  {
    id: 1,
    title: "Strategic Brand Storytelling",
    desc: "We design online stores that communicate your unique value proposition and brand narrative at every touchpoint, creating emotional connections that transform casual browsers into loyal customers.",
    span: "one",
  },
  {
    id: 2,
    title: "Conversion-Focused Design",
    desc: "Our designs don't just look beautiful—they strategically guide visitors through the buying journey with intuitive navigation, compelling product presentations, and friction-free checkout experiences.",
    span: "two",
  },
  {
    id: 3,
    title: "Responsive Technical Excellence",
    desc: "We build mobile-first, responsive storefronts that deliver exceptional experiences across all devices, ensuring you never lose sales due to technical limitations or poor performance.",
    span: "three",
  },
  {
    id: 4,
    title: "Seamless System Integration",
    desc: "We connect your e-commerce platform with your business systems (inventory, fulfillment, CRM, marketing) to create a unified ecosystem that streamlines operations and enhances customer experiences.",
    span: "four",
  },
  {
    id: 5,
    title: "",
    titleii: "Data-Driven Optimization",
    desc: "Beyond launch, we continuously analyze performance data to identify opportunities for improvement, implementing strategic enhancements that increase conversions and maximize your ROI.",
    span: "five",
  },
];

export default function HomePageSolutions() {
  return (
    <section className={styles.container}>
      {/* <SectionHeading3 title='Our Specialties' color='orange' /> */}
      <div className={styles.bottom}>
        {data.map((x) => (
          <div key={x.id} className={`${styles.card} ${styles[x.span]}`}>
            <h3 className={styles.title}>{x.title}</h3>
            {x.titleii && <h3 className={styles.titleii}>{x.titleii}</h3>}
            <p className={styles.desc}>{x.desc}</p>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}
