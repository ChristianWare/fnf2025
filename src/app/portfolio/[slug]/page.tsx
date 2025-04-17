"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";
import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./ProjectDetail.module.css";
import SlugIntro from "../components/SlugIntro/SlugIntro";
import Contact2 from "@/components/Contact2/Contact2";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import OtherThings from "@/components/OtherThings/OtherThings";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <LayoutWrapper>
        <div className={styles.container}>
          <h1>Project not found</h1>
          <Link href='/projects'>Back to projects</Link>
        </div>
      </LayoutWrapper>
    );
  }

  return (
    // <LayoutWrapper>
    //   <div className={styles.container}>
    //     <Link href='/portfolio' className={styles.backLink}>
    //       ← Back to projects
    //     </Link>

    //     <h1 className={styles.title}>{project.title}</h1>

    //     <div className={styles.imageContainer}>
    //       {/* <Image
    //         src={project.src}
    //         alt={project.title}
    //         className={styles.image}
    //         fill
    //         priority
    //         sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    //       /> */}
    //     </div>

    //     <div className={styles.tags}>
    //       {project.tags &&
    //         project.tags.map((tag) => (
    //           <span key={tag} className={styles.tag}>
    //             {tag}
    //           </span>
    //         ))}
    //     </div>

    //     <div className={styles.description}>
    //       <p>{project.description || "No description available."}</p>

    //       {/* Add more project details here */}
    //     </div>
    //   </div>
    // </LayoutWrapper>
    <main>
      <div className={styles.scrollContainer}>
        <SlugIntro project={project} />
        <ProjectDetails project={project} />
        <OtherThings />
        <FinalCTA />
        <Contact2 />
      </div>
    </main>
  );
}
