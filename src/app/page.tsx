import Impressions from "@/components/Impressions/Impressions";
import styles from "./page.module.css";

import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <div className={styles.scrollContainer}>
        <Hero />
        <Impressions />
      </div>
    </main>
  );
}
