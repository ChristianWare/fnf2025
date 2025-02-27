import styles from "./OtherThings.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../public/images/glass2.png";
import Button from "../Button/Button";

export default function OtherThings() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading number='4' title='About Us' />
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img1} fill alt='' title='' className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <span className={styles.span}>Partners:</span>
              </div>
              <div className={styles.rightBottom}>
                <h4 className={styles.info}>
                  Laxer partners with select strategists, storytellers,
                  designers and content creators on complex projects on a
                  per-need basis
                </h4>
                <div className={styles.btnContainer}>
                  <Button btnType='secondary' text='Work With Us' href='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
