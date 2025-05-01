"use client";

import styles from "./Solution.module.css";
import LayoutWrapper from "../LayoutWrapper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import OurApproach from "../AboutPage/OurApproach/OurApproach";
// import SectionIntro from "../SectionIntro/SectionIntro";

// const data = [
//   {
//     id: 1,
//     title: "Strategic Brand Storytelling",
//     desc: "We design online stores that communicate your unique value proposition and brand narrative at every touchpoint, creating emotional connections that transform casual browsers into loyal customers.",
//     span: "one",
//   },
//   {
//     id: 2,
//     title: "Conversion-Focused Design",
//     desc: "Our designs don't just look beautiful—they strategically guide visitors through the buying journey with intuitive navigation, compelling product presentations, and friction-free checkout experiences.",
//     span: "two",
//   },
//   {
//     id: 3,
//     title: "Responsive Technical Excellence",
//     desc: "We build mobile-first, responsive storefronts that deliver exceptional experiences across all devices, ensuring you never lose sales due to technical limitations or poor performance.",
//     span: "three",
//   },
//   {
//     id: 4,
//     title: "Seamless System Integration",
//     desc: "We connect your e-commerce platform with your business systems (inventory, fulfillment, CRM, marketing) to create a unified ecosystem that streamlines operations and enhances customer experiences.",
//     span: "four",
//   },
//   {
//     id: 5,
//     title: "",
//     titleii: "Data-Driven Optimization",
//     desc: "Beyond launch, we continuously analyze performance data to identify opportunities for improvement, implementing strategic enhancements that increase conversions and maximize your ROI.",
//     span: "five",
//   },
// ];

export default function Solution() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void,
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "That's why we create custom e-commerce experiences that solve these exact challenges:";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.5,
        start: "top center",
        end: "bottom center",
        markers: false,
      },
    });

    lettersRef.current.forEach((letter, index) => {
      tl.to(
        letter,
        {
          color: "#FF8F00",
          duration: 0.2,
        },
        index * 0.015
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [lettersRef]);

  return (
    <div className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.revealText}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </h2>
        </div>
          <OurApproach />
        {/* <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={`${styles.card} ${styles[x.span]}`}>
              <h3 className={styles.title}>{x.title}</h3>
              {x.titleii && <h3 className={styles.titleii}>{x.titleii}</h3>}
              <p className={styles.desc}>{x.desc}</p>
            </div>
          ))}
        </div> */}
      </LayoutWrapper>
    </div>
  );
}
