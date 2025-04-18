/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import Image from "next/image";
import styles from "./GalleryGrid.module.css";
import { useState, useEffect } from "react";
import SectionHeading3 from "@/components/SectionHeading3/SectionHeading3";
import { StaticImageData } from "next/image";
import Back from "../../../../../public/icons/next.svg";
import Next from "../../../../../public/icons/next.svg";
import Cancel from "../../../../../public/icons/next.svg";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: number;
  src: StaticImageData;
}

interface GalleryGridProps {
  gallery: readonly GalleryItem[];
}

const GalleryGrid = ({ gallery }: GalleryGridProps) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(gallery.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  // Add keyboard event handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openModal) return;

      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    // Add the event listener when the modal is open
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when component unmounts or modal closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModal, slideNumber]); // Re-apply when these values change

  return (
    <div className={styles.container}>
      <SectionHeading3 title='Gallery' />
      <div className={styles.gallery}>
        {gallery.map((item, index) => (
          <div key={item.id} className={styles.imgContainer4}>
            <Image
              src={item.src}
              alt={`Gallery image ${index + 1}`}
              fill
              className={styles.img}
              onClick={() => handleOpenModal(index)}
            />
          </div>
        ))}

        {openModal && (
          <div className={styles.modalContainer}>
            <Cancel
              className={styles.close}
              onClick={handleCloseModal}
              width={40}
              height={40}
            />
            <div className={styles.fullScreenImage}>
              <Back
                className={styles.prev}
                onClick={prevSlide}
                width={40}
                height={40}
              />

              <AnimatePresence mode='wait'>
                <motion.div
                  key={slideNumber}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={styles.imageWrapper}
                >
                  <Image
                    src={gallery[slideNumber].src}
                    alt={`Gallery image ${slideNumber + 1}`}
                    fill
                    className={styles.modalImg}
                  />
                </motion.div>
              </AnimatePresence>

              <Next
                className={styles.next}
                onClick={nextSlide}
                width={40}
                height={40}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryGrid;
