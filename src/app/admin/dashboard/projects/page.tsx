import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";
import styles from "./Projects.module.css";

export const revalidate = 60; // refresh list every minute

type PageProps = { searchParams?: { page?: string } };

export default async function ProjectsPage({ searchParams }: PageProps) {
  /* ---------- pagination ---------- */
  const page = Math.max(1, Number(searchParams?.page ?? 1));
  const perPage = 20;
  const skip = (page - 1) * perPage;

  /* ---------- queries ---------- */
  const [projects, total] = await Promise.all([
    prisma.project.findMany({
      skip,
      take: perPage,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        status: true,
        endDate: true,
        createdAt: true,
        company: { select: { id: true, name: true } },
        user: { select: { id: true, name: true } },
      },
    }),
    prisma.project.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / perPage));

  return (
    <section className={styles.container}>
      <Link href='/admin/dashboard' className={styles.back}>
        Back to Dashboard →
      </Link>
      <div className={styles.headerRow}>
        <h1 className={styles.heading}>Projects</h1>
        <Link href='/admin/dashboard/projects/new' className={styles.newBtn}>
          + New Project
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Owner</th>
            <th>Status</th>
            <th>End date</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td>
                <Link href={`/admin/dashboard/projects/${p.id}`}>{p.name}</Link>
              </td>
              <td>
                <Link href={`/admin/dashboard/companies/${p.company.id}`}>
                  {p.company.name}
                </Link>
              </td>
              <td>{p.user.name ?? "—"}</td>
              <td>
                <span className={styles.statusBadge} data-status={p.status}>
                  {p.status.replace("_", " ")}
                </span>
              </td>
              <td>{p.endDate ? format(p.endDate, "MMM d, yyyy") : "—"}</td>
              <td>{format(p.createdAt, "MMM d, yyyy")}</td>
            </tr>
          ))}

          {projects.length === 0 && (
            <tr>
              <td colSpan={6} className={styles.empty}>
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {totalPages > 1 && (
        <nav className={styles.pagination}>
          <PageLink page={page - 1} disabled={page === 1}>
            ← Prev
          </PageLink>
          <span>
            Page {page} of {totalPages}
          </span>
          <PageLink page={page + 1} disabled={page === totalPages}>
            Next →
          </PageLink>
        </nav>
      )}
    </section>
  );
}

/* helper */
function PageLink({
  page,
  disabled,
  children,
}: {
  page: number;
  disabled: boolean;
  children: React.ReactNode;
}) {
  if (disabled) return <span className={styles.pageDisabled}>{children}</span>;
  return (
    <Link href={{ query: { page } }} className={styles.pageLink}>
      {children}
    </Link>
  );
}
