"use client";

import styles from "./Logo.module.css";
import Link from "next/link";

interface Props {
  size?: string;
}

const Logo = ({ size = "" }: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[size]}`}>
      Fonts & Footers
    </Link>
  );
};
export default Logo;
