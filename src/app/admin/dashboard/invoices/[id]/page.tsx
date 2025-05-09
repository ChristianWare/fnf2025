/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import styles from "./Invoice.module.css";

/* ──────────────── Types ──────────────── */
type Params = Promise<{ id: string }>;
type PageProps = { params: Params };

/* ──────────────── Page ───────────────── */
export default async function InvoiceEdit({ params }: PageProps) {
  const { id } = await params; // ← await the promised params

  /* ---------- fetch invoice ---------- */
  const invoice = await prisma.invoice.findUnique({
    where: { id },
    include: {
      company: { select: { id: true, name: true } },
      project: { select: { id: true, name: true } },
    },
  });
  if (!invoice) notFound();

  /* ---------- dropdown options ---------- */
  const [companies, projects] = await Promise.all([
    prisma.company.findMany({ select: { id: true, name: true } }),
    prisma.project.findMany({ select: { id: true, name: true } }),
  ]);

  /* ----------- server actions ----------- */
  async function save(formData: FormData) {
    "use server";

    const data = {
      amount: Number(formData.get("amount")),
      status: formData.get("status") as any,
      dueDate: new Date(formData.get("dueDate") as string),
      companyId: formData.get("company") as string,
      projectId: formData.get("project")
        ? (formData.get("project") as string)
        : null,
    };

    await prisma.invoice.update({ where: { id }, data });
    revalidatePath("/admin/dashboard/invoices");
    revalidatePath(`/admin/dashboard/invoices/${id}`);
  }

  async function remove() {
    "use server";
    await prisma.invoice.delete({ where: { id } });
    revalidatePath("/admin/dashboard/invoices");
    redirect("/admin/dashboard/invoices");
  }

  /* ----------- UI ----------- */
  return (
    <section className={styles.container}>
      <h1>Edit invoice</h1>

      <form action={save} className={styles.form}>
        <label>
          Amount&nbsp;(USD)
          <input
            name='amount'
            type='number'
            step='0.01'
            min='0'
            defaultValue={invoice.amount}
            required
          />
        </label>

        <label>
          Status
          <select name='status' defaultValue={invoice.status}>
            {["DRAFT", "PENDING", "PAID", "OVERDUE", "CANCELLED"].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label>
          Due date
          <input
            name='dueDate'
            type='date'
            required
            defaultValue={invoice.dueDate.toISOString().slice(0, 10)}
          />
        </label>

        <label>
          Company
          <select name='company' required defaultValue={invoice.companyId}>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Project&nbsp;(optional)
          <select name='project' defaultValue={invoice.projectId ?? ""}>
            <option value=''>— none —</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <button type='submit' className={styles.saveBtn}>
          Save changes
        </button>
      </form>

      <form action={remove}>
        <button type='submit' className={styles.deleteBtn}>
          Delete invoice
        </button>
      </form>
    </section>
  );
}
