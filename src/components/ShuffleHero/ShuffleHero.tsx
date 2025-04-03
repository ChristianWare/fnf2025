/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./ShuffleHero.module.css";
import Image from "next/image";
import Img1 from "../../../public/images/heroii.jpeg";
import Img2 from "../../../public/images/heroiii.jpeg";
import Img3 from "../../../public/images/process.jpeg";
import Img4 from "../../../public/images/ecomm.jpeg";
import Img5 from "../../../public/images/aboutiv.jpg";
import Img6 from "../../../public/images/aboutiii.jpg";
import Img7 from "../../../public/images/aboutii.jpeg";
import Img8 from "../../../public/images/about.jpeg";
import Img9 from "../../../public/images/heroii.jpeg";

const ShuffleHero = () => {
  return (
    <section className={styles.section}>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: Img1,
  },
  {
    id: 2,
    src: Img2,
  },
  {
    id: 3,
    src: Img3,
  },
  {
    id: 4,
    src: Img4,
  },
  {
    id: 5,
    src: Img5,
  },
  {
    id: 6,
    src: Img6,
  },
  {
    id: 7,
    src: Img7,
  },
  {
    id: 8,
    src: Img8,
  },
  {
    id: 9,
    src: Img9,
  },
];

const generateSquares = () => {
  return squareData.map((sq: any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={styles.square}
    >
      {/* {sq.src} */}
      <Image src={sq.src} fill alt='' className={styles.img} />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());
    setSquares((prevSquares) => shuffle([...prevSquares]));

    timeoutRef.current = setTimeout(shuffleSquares, 2000);
  };

  return <div className={styles.grid}>{squares}</div>;
};

export default ShuffleHero;
