"use client";

import styles from "./AboutUs.module.css";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import Img1 from "../../../public/images/service.jpg";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  // {
  //   id: 1,
  //   title: "Who We Are",
  //   desc: "A boutique e‑commerce dev studio obsessed with sub‑1 s load times and conversion science.",
  // },
  // {
  //   id: 2,
  //   title: "What We Do",
  //   desc: "Design + engineer Shopify and headless storefronts that lift CR an average 23 %.",
  // },
  // {
  //   id: 3,
  //   title: "Why We Do It",
  //   desc: "Every extra second costs 7 % in sales— we hate leaving money on the table as much as you do.",
  // },
  // {
  //   id: 5,
  //   title: "Our Mission",
  //   desc: "Ship 1‑second storefronts and turn browsers into buyers through relentless A/B optimisation.",
  // },
  // {
  //   id: 6,
  //   title: "Our Culture",
  //   desc: "Craft, candour, continuous learning— we cap projects so every client gets founder‑level attention.",
  // },
  // {
  //   id: 4,
  //   title: "What Sets Us Apart",
  //   desc: "Performance‑first code meets story‑driven design— no template bloat, just speed that converts.",
  // },
  {
    id: 4,
    title: "Slow Page",
    desc: "A slow website frustrates customers and leads to abandoned carts, costing you sales and damaging your brand's reputation.",
  },
  {
    id: 5,
    title: "Bad Mobile Experience",
    desc: "Many e-commerce sites struggle to deliver a seamless shopping experience on mobile devices.",
  },
  {
    id: 6,
    title: "Complicated Checkout",
    desc: "A confusing or lengthy checkout process causes potential buyers to abandon their carts, leaving revenue on the table.",
  },
  {
    id: 7,
    title: "Low Search",
    desc: "Without proper optimization, your website fails to rank on search engines, making it hard for potential customers to find you online.",
  },
  {
    id: 8,
    title: "Poor Inventory",
    desc: "Managing products, stock levels, and updates can become overwhelming, leading to mistakes and unhappy customers.",
  },
];

export default function AboutUs() {
  const copyRef = useRef<HTMLParagraphElement>(null);

  // useGSAP(() => {
  //   if (!copyRef.current) return;

  //   gsap.set(copyRef.current, { visibility: "visible" });

  //   const split = new SplitType(copyRef.current, {
  //     types: "lines",
  //     lineClass: styles.line,
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: copyRef.current,
  //       start: "top 80%", // adjust to taste
  //       toggleActions: "play reverse play reverse", // ★ every visit
  //       // markers: true,                 // ← uncomment while debugging
  //     },
  //   });

  //   tl.fromTo(
  //     split.lines,
  //     { y: 200, x: -200, opacity: 0 },
  //     {
  //       y: 0,
  //       x: 0,
  //       opacity: 1,
  //       duration: 2.5,
  //       stagger: 0.075,
  //       ease: "power4.out",
  //       delay: 0.25,
  //     }
  //   );

  //   return () => {
  //     split.revert();
  //     tl.kill();
  //   };
  // });

  useGSAP(() => {
    if (!copyRef.current) return;

    gsap.set(copyRef.current, { visibility: "visible" });

    const split = new SplitType(copyRef.current, {
      types: "lines",
      lineClass: styles.line,
    });

    /* scroll-scrubbed timeline */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: copyRef.current, // watch the paragraph
        start: "top 80%", // when its top hits 90% of viewport
        end: "top 40%", // …animate until it reaches 40% (≈50 vh span)
        scrub: 3,
        // markers: true,
      },
    });

    tl.from(split.lines, {
      y: 200,
      x: -200,
      opacity: 0,
      stagger: 0.075,
      ease: "power4.out",
    });

    return () => {
      split.revert();
      tl.kill();
    };
  });
  return (
    <section className={styles.container} id='about'>
      <div className={styles.parent}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.sectionHeadingContainer}>
              <SectionHeading2 title='Problems we solve' />
            </div>
          </div>
          <div className={styles.right}>
            <p ref={copyRef} className={styles.copy}>
              {/* Fonts&nbsp;&amp;&nbsp;Footers is a Phoenix‑based e‑commerce agency
              that fuses pixel‑perfect design (“Fonts”) with rock‑solid
              engineering (“Footers”). Our team has one north star— speed that
              sells. */}
              Shoppers leave slow, cluttered storefronts in seconds. Generic
              templates and bloated plugins cripple performance, frustrate
              visitors, and drain ad budgets. You deserve a store engineered for
              speed, stability, and storytelling without hiring an in house tech
              team or wading through freelance uncertainty.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.imgContainer}>
              <ParallaxImage
                src={Img1}
                alt='Fonts & Footers office'
                title='Fonts & Footers'
              />
            </div>
          </div>
          <div className={styles.bottomRight}>
            {data.map((item) => (
              <div className={styles.card} key={item.id}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
