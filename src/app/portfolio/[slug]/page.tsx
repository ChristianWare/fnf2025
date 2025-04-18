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
import Faq from "@/components/Faq/Faq";

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
    <main>
      <div className={styles.scrollContainer}>
        <SlugIntro project={project} />
        <ProjectDetails project={project} />
        <Faq />
        <OtherThings />
        <FinalCTA />
        <Contact2 />
      </div>
    </main>
  );
}
