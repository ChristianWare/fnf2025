import styles from "./Contact2.module.css";
import Footer from "../Footer/Footer";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Img1 from "../../../public/images/ecomm.jpeg";

export default function Contact2() {
  return (
    <section className={styles.container}>
      <Image src={Img1} alt='' title='' fill className={styles.img} />
      <div className={styles.overlay} />
      <LayoutWrapper>
        <div className={styles.footerContainer}>
          <Footer />
        </div>
      </LayoutWrapper>
    </section>
  );
}
