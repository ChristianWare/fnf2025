import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";
import styles from "./Companies.module.css";

/** Revalidate the page (ISR) once every minute */
export const revalidate = 60;

/* ──────────────── Types ──────────────── */
type SearchParams = { page?: string };
type PageProps = { searchParams?: Promise<SearchParams> }; // ← Note the **Promise**

/* ──────────────── Page ───────────────── */
export default async function CompaniesPage({ searchParams }: PageProps) {
  /* ---------- pagination ---------- */
  const { page: rawPage } = (await searchParams) ?? {}; // ← await the params
  const page = Math.max(1, Number(rawPage ?? 1));
  const pageSize = 20;
  const skip = (page - 1) * pageSize;

  /* ---------- queries ---------- */
  const [companies, total] = await Promise.all([
    prisma.company.findMany({
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        website: true,
        phone: true,
        createdAt: true,
        _count: { select: { users: true, projects: true } },
      },
    }),
    prisma.company.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const headers = ["Name", "Website", "Phone", "Users", "Projects", "Joined"];

  /* ---------- JSX ---------- */
  return (
    <section className={styles.container}>
      <Link href='/admin/dashboard' className={styles.back}>
        Back to Dashboard →
      </Link>

      <div className={styles.headerRow}>
        <h1 className={styles.heading}>Active Companies</h1>
        <Link href='/admin/dashboard/companies/new' className={styles.newBtn}>
          + New Company
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
            <th /> {/* actions column */}
          </tr>
        </thead>

        <tbody>
          {companies.map((c) => (
            <tr key={c.id}>
              <td>
                <Link href={`/admin/dashboard/companies/${c.id}`}>
                  {c.name}
                </Link>
              </td>

              <td className={styles.wrap}>
                {c.website ? (
                  <Link
                    href={c.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {new URL(c.website).hostname.replace(/^www\./, "")}
                  </Link>
                ) : (
                  "—"
                )}
              </td>

              <td>{c.phone ?? "—"}</td>
              <td>{c._count.users}</td>
              <td>{c._count.projects}</td>
              <td>{format(c.createdAt, "MMM d, yyyy")}</td>

              <td>
                <Link
                  href={`/admin/dashboard/companies/${c.id}`}
                  className={styles.editLink}
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}

          {companies.length === 0 && (
            <tr>
              <td colSpan={headers.length + 1} className={styles.empty}>
                No companies found.
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

/* ────────── Pagination Link helper ────────── */
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
