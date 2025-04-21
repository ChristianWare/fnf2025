import { getKpis } from "@/lib/kpi";
import styles from "./Dashboard.module.css";
import KpiCard from "./components/KpiCard/KpiCard";

export const revalidate = 60; // 60‑second ISR; tweak as needed

export default async function DashboardPage() {
  const kpis = await getKpis();

  return (
    <main className={styles.container}>
      {kpis.map((kpi) => (
        <KpiCard
          key={kpi.id}
          label={kpi.label}
          value={kpi.value}
          href={kpi.href} // ← NEW
        />
      ))}
    </main>
  );
}
