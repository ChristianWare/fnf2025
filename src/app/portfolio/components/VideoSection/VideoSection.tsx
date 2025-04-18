import styles from "./VideoSection.module.css";
import Image from "next/image";
import Img1 from "../../../../../public/images/servicesHeroii.jpg";
import Img2 from "../../../../../public/images/servicesHeroiii.jpg";

export default function VideoSection() {
  return (
    <div className={styles.container}>
      <video preload='auto' autoPlay muted loop className={styles.video}>
        <source src='/videos/thunder.mp4' />
      </video>
      <div className={styles.bottom}>
        <div className={styles.imgContainer}>
          <Image src={Img1} alt='' title='' fill className={styles.img} />
        </div>
        <div className={styles.imgContainer}>
          <Image src={Img2} alt='' title='' fill className={styles.img} />
        </div>
      </div>
    </div>
  );
}
