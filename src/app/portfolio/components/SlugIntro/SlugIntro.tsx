"use client";

import styles from "./SlugIntro.module.css";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

// Define interface for the props
interface TagItem {
  id: number;
  tag: string;
}

// Define interface for the props
interface SlugIntroProps {
  project: {
    title: string;
    src: StaticImageData;
    description?: string;
    tags?: readonly TagItem[];
  };
}

gsap.registerPlugin(ScrollTrigger);

export default function SlugIntro({ project }: SlugIntroProps) {
  const refs = {
    overlay: useRef<HTMLDivElement>(null),
  };

  useGSAP(() => {
    // Overlay animation
    if (refs.overlay.current) {
      gsap.fromTo(
        refs.overlay.current,
        { opacity: 0 },
        {
          opacity: 0.7,
          scrollTrigger: {
            trigger: refs.overlay.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []); // <- this line was missing

  return (
    <section className={styles.container}>
      <div className={styles.overlay} ref={refs.overlay}></div>

      <div className={styles.imgContainer}>
        <Image
          src={project.src}
          alt={project.title}
          title={project.title}
          fill
          className={styles.img}
          priority
        />
      </div>
    </section>
  );
}
