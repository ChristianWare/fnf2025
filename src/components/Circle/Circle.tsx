// import LayoutWrapper from "../LayoutWrapper";
import styles from "./Circle.module.css";

export default function Circle() {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
        <div className={styles.outerCircle}>
          <svg
            className={styles.curveText}
            viewBox='0 0 500 500'
            preserveAspectRatio='xMidYMid meet'
          >
            <defs>
              <path
                id='circlePath'
                d='
                  M250,250
                  m-225,0
                  a225,225 0 1,1 450,0
                  a225,225 0 1,1 -450,0
                '
              />
            </defs>
            <text
              fontFamily='var(--SuisseIntlCondensed)'
              transform='uppercase'
              fontSize='24'
              fill='var(--blackii)'
            >
              <textPath
                href='#circlePath'
                startOffset='25%'
                textAnchor='middle'
                dy='-8'
              >
                Our Technology Systems
              </textPath>
            </text>
          </svg>
          <div className={styles.innerCircle}>
            <div className={styles.quad1}>option</div>
            <div className={styles.quad2}>option</div>
            <div className={styles.quad3}>option</div>
            <div className={styles.quad4}>option</div>
          </div>
          <div className={styles.centerCircle}>
            <span className={styles.centerText}>RESTORE</span>
          </div>{" "}
        </div>
      {/* </LayoutWrapper> */}
    </section>
  );
}
