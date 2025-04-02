import styles from "./Footer.module.css";
import Arrow from "../../../public/icons/arrow.svg";
import Insta from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Link from "next/link";
import Logo from "../Logo/Logo";

const services = [
  { id: 1, name: "Works" },
  { id: 2, name: "About" },
  { id: 3, name: "Services" },
  { id: 4, name: "Journal" },
  { id: 5, name: "Contact" },
];

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <Logo size='large' />
          <div className={styles.leftBottom}>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='LinkedIn'
              className={styles.detail}
            >
              <LinkedIn className={styles.icon} />
            </Link>
            <Link
              href='https://www.facebook.com/fontsandfooters/'
              target='_blank'
              aria-label='Facebook'
              className={styles.detail}
            >
              <Facebook className={styles.icon} />
            </Link>
            <Link
              href='https://www.instagram.com/fontsandfooters/'
              target='_blank'
              aria-label='Instagram'
              className={styles.detail}
            >
              <Insta className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <ul className={styles.servicesContainer}>
            {services.map((x) => (
              <li className={styles.service} key={x.id}>
                {x.name}
                <span className={styles.blackDot}>
                  <Arrow className={styles.arrow} />
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.copyRight}>© 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
