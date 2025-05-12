import styles from "./Users.module.css";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { format } from "date-fns";
import RoleToggleButton from "./components/RoleToggleButton/RoleToggleButton";

export const revalidate = 60; // regenerate list every minute

/* ────────── Types ────────── */
type SearchParams = { page?: string };
type PageProps = { searchParams?: Promise<SearchParams> }; // ← Promise!

/* ────────── Page ────────── */
export default async function UsersPage({ searchParams }: PageProps) {
  /* ---------- pagination ---------- */
  const { page: rawPage } = (await searchParams) ?? {}; // ← await
  const page = Math.max(1, Number(rawPage ?? 1));
  const pageSize = 20;
  const offset = (page - 1) * pageSize;

  /* ---------- db queries ---------- */
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      skip: offset,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    }),
    prisma.user.count(),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  /* ---------- render ------------- */
  return (
    <section className={styles.container}>
      <Link href='/admin/dashboard' className={styles.back}>
        Back to Dashboard →
      </Link>
      <h1 className={styles.heading}>Users</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className={styles.tBody}>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name ?? "—"}</td>
              <td>{u.email}</td>
              <td>
                <span className={styles.roleBadge} data-role={u.role}>
                  {u.role}
                </span>
              </td>
              <td>{format(u.createdAt, "MMM d, yyyy")}</td>
              <td>
                <RoleToggleButton userId={u.id} currentRole={u.role} />
              </td>
            </tr>
          ))}

          {users.length === 0 && (
            <tr>
              <td colSpan={4} className={styles.empty}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* ---------- pagination footer ---------- */}
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

/* ---------- helper component ---------- */
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
