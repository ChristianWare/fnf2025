/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import styles from "../[id]/Invoice.module.css";

export default async function NewInvoice() {
  /* fetch dropdown data */
  const [companies, projects] = await Promise.all([
    prisma.company.findMany({ select: { id: true, name: true } }),
    prisma.project.findMany({ select: { id: true, name: true } }),
  ]);

  /* -------------- server action -------------- */
  async function create(formData: FormData) {
    "use server";

    const amount = Number(formData.get("amount"));
    const dueDate = formData.get("dueDate")
      ? new Date(formData.get("dueDate") as string)
      : null;
    const companyId = formData.get("company") as string;
    const projectId = formData.get("project")
      ? (formData.get("project") as string)
      : null;
    const status = (formData.get("status") as any) || "PENDING";

    if (!amount || !dueDate || !companyId) {
      throw new Error("All required fields must be filled");
    }

    await prisma.invoice.create({
      data: { amount, dueDate, companyId, projectId, status },
    });

    revalidatePath("/admin/dashboard/invoices");
    redirect("/admin/dashboard/invoices");
  }

  /* -------------- UI -------------- */
  return (
    <section className={styles.container}>
      <h1>New invoice</h1>

      <form action={create} className={styles.form}>
        <label>
          Amount (USD)
          <input name='amount' type='number' step='0.01' min='0' required />
        </label>

        <label>
          Due date
          <input name='dueDate' type='date' required />
        </label>

        <label>
          Company
          <select name='company' required defaultValue=''>
            <option value='' disabled>
              Select company…
            </option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Project (optional)
          <select name='project' defaultValue=''>
            <option value=''>— none —</option>
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select name='status' defaultValue='PENDING'>
            {["DRAFT", "PENDING", "PAID", "OVERDUE", "CANCELLED"].map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <button type='submit' className={styles.saveBtn}>
          Create
        </button>
      </form>
    </section>
  );
}
