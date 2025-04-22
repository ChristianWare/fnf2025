import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";
import styles from "./Payments.module.css";

export const revalidate = 60; // refresh list once a minute

type PageProps = { searchParams?: { page?: string } };

export default async function PaymentsPage({ searchParams }: PageProps) {
  /* ---------- pagination ---------- */
  const page = Math.max(1, Number(searchParams?.page ?? 1));
  const perPage = 20;
  const skip = (page - 1) * perPage;

  /* ---------- database queries ---- */
  const [payments, total] = await Promise.all([
    prisma.payment.findMany({
      skip,
      take: perPage,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        amount: true,
        method: true,
        status: true,
        transactionId: true,
        createdAt: true,
        invoice: {
          select: {
            id: true,
            company: { select: { id: true, name: true } },
          },
        },
      },
    }),
    prisma.payment.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  /* ---------- UI ------------------ */
  return (
    <section className={styles.container}>
      <Link href='/admin/dashboard' className={styles.back}>
        Back to Dashboard →
      </Link>
      <h1 className={styles.heading}>Payments</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Company</th>
            <th>Invoice</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Received</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td>{p.id.slice(0, 6)}…</td>
              <td>
                <Link
                  href={`/admin/dashboard/companies/${p.invoice.company.id}`}
                >
                  {p.invoice.company.name}
                </Link>
              </td>
              <td>
                <Link href={`/admin/dashboard/invoices/${p.invoice.id}`}>
                  {p.invoice.id.slice(0, 6)}…
                </Link>
              </td>
              <td>{currency.format(p.amount)}</td>
              <td className={styles.method}>{p.method.replace("_", " ")}</td>
              <td>
                <span className={styles.statusBadge} data-status={p.status}>
                  {p.status}
                </span>
              </td>
              <td>{format(p.createdAt, "MMM d, yyyy")}</td>
            </tr>
          ))}

          {payments.length === 0 && (
            <tr>
              <td colSpan={7} className={styles.empty}>
                No payments recorded.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ---------- pagination -------- */}
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

/* helper for pagination */
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
