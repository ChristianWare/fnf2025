import styles from "./Impressions.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Image from "next/image";
import Img1 from "../../../public/images/handshake.png";

export default function Impressions() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading number='1' title='First impressions matter' />
        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.heading}>
              In a world where decisions are made in a matter of seconds, you
              only get one shot.
            </h3>
            <div className={styles.imgContainer}>
              <Image src={Img1} fill alt='' title='' className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.righContent}>
              <p className={styles.copy}>
                Whether you’re targeting investors, customers or users, you not
                only have to get to the point quickly, you have to give them a
                reason to believe you’re about to make their lives better, or at
                least make life itself better.
                <br />
                <br />
                Strong strategic core messaging is what lies behind that strong
                first impression.
              </p>
              <h3 className={styles.headingii}>
                It is also the foundation for whatever comes{" "}
                <span className={styles.highlight}>next</span>
              </h3>
              <h3 className={styles.headingiii}>
                we partner with ambitious founders and executive teams who want
                to stand out and go big.
              </h3>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
