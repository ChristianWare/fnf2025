"use client";
import React, { MouseEvent, useRef } from "react";
import gsap from "gsap";
import styles from './MomentumLines.module.css';

const THRESHOLD = 200;
const ARRAY_LENGTH = 17;

export default function MomentumLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  const transformX = (el: HTMLDivElement, value: number) => {
    const xTo = gsap.quickTo(el, "x", {
      duration: 0.8,
      ease: "power3.out",
    });
    xTo(value);
  };

  const toggleOpacity = (el: HTMLDivElement, value: number) => {
    const opacityTo = gsap.quickTo(el, "opacity", {
      duration: 0.8,
      ease: "power3.out",
    });
    opacityTo(value);
  };

  const followMouse = (mouseX: number) => {
    if (!containerRef.current) return;
    const lines = containerRef.current?.querySelectorAll(`.${styles.line}`);
    const containerWidth = containerRef.current.offsetWidth;
    
    lines.forEach((line, index) => {
      const lineDiv = line as HTMLDivElement;
      const relativeLeft =
        lineDiv.offsetLeft - containerRef.current!.offsetLeft;
      const xPercentage = mouseX / containerWidth;
      const linePercentage = relativeLeft / containerWidth;
      const gapPercentage = Math.abs(xPercentage - linePercentage);
      const isLastOrFirst = !index || index === lines.length - 1;
      const threshold = isLastOrFirst ? THRESHOLD / 2 : THRESHOLD;
      const gapDiff = Math.min(
        Math.max(mouseX - relativeLeft, -threshold),
        threshold
      );
      
      transformX(lineDiv, gapDiff * (1 - gapPercentage));
      toggleOpacity(lineDiv, 1 - gapPercentage);
    });
  };

  const onMouseMove = (e: MouseEvent) => {
    const mouseX = e.nativeEvent.offsetX;
    followMouse(mouseX);
  };

  const onMouseOut = () => {
    const lines = containerRef.current?.querySelectorAll(`.${styles.line}`);
    lines?.forEach((line) => {
      transformX(line as HTMLDivElement, 0);
      toggleOpacity(line as HTMLDivElement, 1);
    });
  };

  return (
    <article className={styles.article}>
      <div
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
        className={styles.container}
        ref={containerRef}
      >
        {[...new Array(ARRAY_LENGTH).fill(0)].map((_, index) => (
          <div
            key={index}
            className={styles.line}
          ></div>
        ))}
      </div>
    </article>
  );
}