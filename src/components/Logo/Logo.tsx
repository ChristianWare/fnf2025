"use client";

import styles from "./Logo.module.css";
import Link from "next/link";

interface Props {
  size?: string;
}

const Logo = ({ size = "" }: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[size]}`}>
      {/* ¯\_(ツ)_/¯  */}
      Chris Ware
    </Link>
  );
};
export default Logo;
