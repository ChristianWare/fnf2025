/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ProjectSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Img1 from "../../../public/images/ecomm.jpeg";
import Img2 from "../../../public/images/heroii.jpeg";
import Img3 from "../../../public/images/heroiii.jpeg";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import ServiceHero from "../ServicePage/ServiceHero/ServiceHero";

const projectData = [
  {
    id: 1,
    title: "Project Name 1",
    type: <Arrow className={styles.icon} />,
    description: "Project Name 1",
    label: <Arrow className={styles.icon2} />,
    src: Img1,
  },
  {
    id: 2,
    title: "Project Name 2",
    type: <Arrow className={styles.icon} />,
    description: "Project Name 2",
    label: <Arrow className={styles.icon2} />,
    src: Img2,
  },
  {
    id: 3,
    title: "Project Name 3",
    type: <Arrow className={styles.icon} />,
    description: "Project Name 3",
    label: <Arrow className={styles.icon2} />,
    src: Img3,
  },
  {
    id: 4,
    title: "Project Name 4",
    type: <Arrow className={styles.icon} />,
    description: "Project Name 4",
    label: <Arrow className={styles.icon2} />,
    src: Img1,
  },
  {
    id: 5,
    title: "Project Name 5",
    type: <Arrow className={styles.icon} />,
    description: "Project Name 5",
    label: <Arrow className={styles.icon2} />,
    src: Img2,
  },
  {
    id: 6,
    title: "Project Name 6",
    type: <Arrow className={styles.icon} />,
    description: "Project Name 6",
    label: <Arrow className={styles.icon} />,
    src: Img3,
  },
];

// Define position constants similar to the original tutorial
const POSITIONS = {
  BOTTOM: 0,
  MIDDLE: -80,
  TOP: -160,
};

export default function ProjectSection() {
  const projectsListRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [displayedImage, setDisplayedImage] = useState(Img1); // Default to Img1

  useEffect(() => {
    // Initialize refs array for each project
    projectRefs.current = projectRefs.current.slice(0, projectData.length);
  }, []);

  useEffect(() => {
    let mouseTimeout: NodeJS.Timeout | null = null;
    let ticking = false;

    const updateProjects = () => {
      if (!projectsListRef.current) return;

      // Check if active project still has mouse over it
      if (activeProject !== null) {
        const activeProjectElement =
          projectRefs.current[
            projectData.findIndex((p) => p.id === activeProject)
          ];
        if (activeProjectElement) {
          const rect = activeProjectElement.getBoundingClientRect();
          const isStillOver =
            lastMousePosition.x >= rect.left &&
            lastMousePosition.x <= rect.right &&
            lastMousePosition.y >= rect.top &&
            lastMousePosition.y <= rect.bottom;

          if (!isStillOver) {
            // Mouse has left the active project
            setActiveProject(null);
          }
        }
      }

      // Check if mouse is over any project
      projectRefs.current.forEach((projectRef, index) => {
        if (!projectRef) return;

        const rect = projectRef.getBoundingClientRect();
        const isMouseOver =
          lastMousePosition.x >= rect.left &&
          lastMousePosition.x <= rect.right &&
          lastMousePosition.y >= rect.top &&
          lastMousePosition.y <= rect.bottom;

        if (isMouseOver && activeProject !== projectData[index].id) {
          // Mouse has entered a new project
          handleMouseEnter(projectData[index].id, index);
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Update mouse position
      const newPosition = { x: e.clientX, y: e.clientY };
      setLastMousePosition(newPosition);
      setIsMouseMoving(true);

      // Reset timeout for mouse inactivity
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }

      if (!projectsListRef.current) return;

      // Check if mouse is inside projects list
      const projectsListRect = projectsListRef.current.getBoundingClientRect();
      const isInsideProjectsList =
        newPosition.x >= projectsListRect.left &&
        newPosition.x <= projectsListRect.right &&
        newPosition.y >= projectsListRect.top &&
        newPosition.y <= projectsListRect.bottom;

      if (isInsideProjectsList) {
        // Set timeout to handle mouse inactivity
        mouseTimeout = setTimeout(() => {
          setIsMouseMoving(false);
        }, 2000);

        // Immediately check for projects under mouse
        projectRefs.current.forEach((projectRef, index) => {
          if (!projectRef) return;

          const rect = projectRef.getBoundingClientRect();
          const isMouseOver =
            newPosition.x >= rect.left &&
            newPosition.x <= rect.right &&
            newPosition.y >= rect.top &&
            newPosition.y <= rect.bottom;

          if (isMouseOver && activeProject !== projectData[index].id) {
            // Found project under mouse, immediately trigger hover
            handleMouseEnter(projectData[index].id, index);
          }
        });
      }

      // Update projects on next animation frame
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProjects();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProjects();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (mouseTimeout) clearTimeout(mouseTimeout);
    };
  }, [lastMousePosition, activeProject]);

  const handleMouseEnter = useCallback((projectId: number, index: number) => {
    setActiveProject(projectId);
    setDisplayedImage(projectData[index].src);
  }, []);

  const handleMouseLeave = (projectId: number) => {
    setActiveProject(null);
    // Optional: Reset to default image when no project is hovered
    // setDisplayedImage(Img1);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading2 title='4: Featured Work' />

        <div className={styles.content}>
          <div className={styles.projectDataContainer} ref={projectsListRef}>
            {projectData.map((project, index) => (
              <div
                key={project.id}
                className={styles.card}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                onMouseEnter={() => handleMouseEnter(project.id, index)}
                onMouseLeave={() => handleMouseLeave(project.id)}
              >
                <div
                  className={styles.projectWrapper}
                  style={{
                    transform:
                      activeProject === project.id
                        ? `translateY(${POSITIONS.MIDDLE}px)`
                        : `translateY(${POSITIONS.TOP}px)`,
                  }}
                >
                  <div className={styles.projectInfo}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <h4 className={styles.type}>{project.type}</h4>
                  </div>
                  <div className={styles.projectDetails}>
                    <h3 className={styles.description}>
                      {project.description}
                    </h3>
                    {project.label}
                  </div>
                  <div className={styles.projectInfo}>
                    <h3 className={styles.title}>{project.title}</h3>
                    {project.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.right}>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={displayedImage}
                alt=''
                title='Project Preview:'
              />
            </div>
          </div>
        </div>
        <ServiceHero />
        <div className={styles.btnContainer}>
          <Button btnType='secondary' text='View All Projects' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
