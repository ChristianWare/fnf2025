import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";
import styles from "./Invoices.module.css";

export const revalidate = 60; // refresh list every minute

type PageProps = { searchParams?: { page?: string } };

export default async function InvoicesPage({ searchParams }: PageProps) {
  /* ---------- pagination ------------ */
  const page = Math.max(1, Number(searchParams?.page ?? 1));
  const perPage = 20;
  const skip = (page - 1) * perPage;

  /* ---------- queries -------------- */
  const [invoices, total] = await Promise.all([
    prisma.invoice.findMany({
      skip,
      take: perPage,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        amount: true,
        status: true,
        dueDate: true,
        createdAt: true,
        company: { select: { id: true, name: true } },
        project: { select: { id: true, name: true } },
      },
    }),
    prisma.invoice.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const fmt = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const headers = [
    "ID",
    "Company",
    "Project",
    "Amount",
    "Status",
    "Due date",
    "Created",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.heading}>Invoices</h1>
        <Link href='/admin/dashboard/invoices/new' className={styles.newBtn}>
          + New Invoice
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id}>
              <td>
                <Link href={`/admin/dashboard/invoices/${inv.id}`}>
                  {inv.id.slice(0, 6)}…
                </Link>
              </td>
              <td>
                <Link href={`/admin/dashboard/companies/${inv.company.id}`}>
                  {inv.company.name}
                </Link>
              </td>
              <td>
                {inv.project ? (
                  <Link href={`/admin/dashboard/projects/${inv.project.id}`}>
                    {inv.project.name}
                  </Link>
                ) : (
                  "—"
                )}
              </td>
              <td>{fmt.format(inv.amount)}</td>
              <td>
                <span className={styles.statusBadge} data-status={inv.status}>
                  {inv.status}
                </span>
              </td>
              <td>{format(inv.dueDate, "MMM d, yyyy")}</td>
              <td>{format(inv.createdAt, "MMM d, yyyy")}</td>
            </tr>
          ))}

          {invoices.length === 0 && (
            <tr>
              <td colSpan={headers.length} className={styles.empty}>
                No invoices found.
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
