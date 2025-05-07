import styles from './AboutMission.module.css'
import LayoutWrapper from "@/components/LayoutWrapper";
import Mission from "@/components/Mission/Mission";

export default function AboutMission() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <Mission />
      </LayoutWrapper>
    </section>
  );
}
