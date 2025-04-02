import styles from "./Owner.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import Author from "../../../public/images/authorii.png";

const Owner = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.parent}>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                &quot;At Fonts & Footers, we don’t just build websites—we create
                e-commerce experiences that drive sales and build lasting
                connections. Seeing our clients thrive is what fuels our
                passion.&quot;
              </h2>
              <p className={styles.author}>
                Chris Ware － <br />
                Founder & Lead Developer
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.pulsingCircles}></div>
              <div className={styles.imgContainer}>
                <Image src={Author} alt='' fill className={styles.img} />
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Owner;
