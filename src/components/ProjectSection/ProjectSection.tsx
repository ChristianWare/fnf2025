/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ProjectSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Img1 from "../../../public/images/ecomm.jpeg";
import Img2 from "../../../public/images/heroii.jpeg";
import Img3 from "../../../public/images/heroiii.jpeg";
import gsap from "gsap";
import Arrow from "../../../public/icons/arrow.svg";
import Button from "../Button/Button";

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
  const projectPreviewRef = useRef<HTMLDivElement>(null);
  const projectsListRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const animatePreview = () => {
      if (!projectPreviewRef.current || !projectsListRef.current) return;

      const projectsListRect = projectsListRef.current.getBoundingClientRect();
      if (
        lastMousePosition.x < projectsListRect.left ||
        lastMousePosition.x > projectsListRect.right ||
        lastMousePosition.y < projectsListRect.top ||
        lastMousePosition.y > projectsListRect.bottom
      ) {
        const previewImages = projectPreviewRef.current.querySelectorAll("img");
        previewImages.forEach((img) => {
          gsap.to(img, {
            scale: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => img.remove(),
          });
        });
      }
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

      if (isInsideProjectsList && projectPreviewRef.current) {
        // Set timeout to handle mouse inactivity
        mouseTimeout = setTimeout(() => {
          setIsMouseMoving(false);
          if (!projectPreviewRef.current) return;

          // Remove all but the last image
          const images = projectPreviewRef.current.querySelectorAll("img");
          if (images.length > 1) {
            const lastImage = images[images.length - 1];
            images.forEach((img) => {
              if (img !== lastImage) {
                gsap.to(img, {
                  scale: 0,
                  duration: 0.4,
                  ease: "power2.out",
                  onComplete: () => img.remove(),
                });
              }
            });
          }
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
      } else {
        // Mouse outside project list, remove images
        animatePreview();
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
          animatePreview();
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

  const handleMouseEnter = useCallback(
    (projectId: number, index: number) => {
      setActiveProject(projectId);

      if (projectPreviewRef.current) {
        // Clear existing images first to prevent stacking
        const existingImages =
          projectPreviewRef.current.querySelectorAll("img");
        existingImages.forEach((img) => {
          gsap.killTweensOf(img); // Kill any existing animations
          img.remove();
        });

        // Create image element
        const img = document.createElement("img");
        img.src = projectData[index].src.src;
        img.style.position = "absolute";
        img.style.top = "0";
        img.style.left = "0";
        img.style.scale = "0";
        img.style.zIndex = Date.now().toString();
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.willChange = "transform";

        // Add to DOM
        projectPreviewRef.current.appendChild(img);

        // Force a reflow
        document.body.offsetHeight;

        // Apply animation (using fromTo for more control)
        gsap.fromTo(
          img,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
            overwrite: true,
            immediateRender: true,
          }
        );
      }
    },
    [projectPreviewRef]
  );

  const handleMouseLeave = (projectId: number) => {
    setActiveProject(null);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading number='3' title='Featured Work' />

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
        </div>
        <div className={styles.btnContainer}>
          <Button btnType='secondary' text='View All Projects' href='/' />
        </div>
      </LayoutWrapper>
      <div className={styles.projectPreview} ref={projectPreviewRef}></div>
    </section>
  );
}
