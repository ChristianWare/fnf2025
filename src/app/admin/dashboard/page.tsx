import { getKpis } from "@/lib/kpi";
import styles from "./Dashboard.module.css";
import KpiCard from "./components/KpiCard/KpiCard";

export const revalidate = 60;

export default async function DashboardPage() {
  const kpis = await getKpis();

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Admin Dashboard</h1>
      <div className={styles.content}>
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.id}
            label={kpi.label}
            value={kpi.value}
            href={kpi.href}
          />
        ))}
      </div>
    </main>
  );
}
