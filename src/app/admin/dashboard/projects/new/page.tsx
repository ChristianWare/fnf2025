import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import styles from "../[id]/Project.module.css";

export default async function NewProject() {
  /* fetch companies & users for dropdowns */
  const [companies, users] = await Promise.all([
    prisma.company.findMany({ select: { id: true, name: true } }),
    prisma.user.findMany({ select: { id: true, name: true } }),
  ]);

  /* ------------- server action ------------- */
  async function create(formData: FormData) {
    "use server";

    const data = {
      name: (formData.get("name") as string).trim(),
      description: (formData.get("description") as string) || null,
      companyId: formData.get("company") as string,
      userId: formData.get("owner") as string,
      startDate: new Date(formData.get("startDate") as string),
      endDate: formData.get("endDate")
        ? new Date(formData.get("endDate") as string)
        : null,
      status: "NOT_STARTED" as const,
    };

    if (!data.name || !data.companyId || !data.userId) {
      throw new Error("All required fields must be filled");
    }

    await prisma.project.create({ data });
    revalidatePath("/admin/dashboard/projects");
    redirect("/admin/dashboard/projects");
  }

  /* ------------- UI ------------- */
  return (
    <section className={styles.container}>
      <h1>New project</h1>

      <form action={create} className={styles.form}>
        <label>
          Name
          <input name='name' required />
        </label>

        <label>
          Description
          <textarea name='description' rows={3} />
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
          Owner
          <select name='owner' required defaultValue=''>
            <option value='' disabled>
              Select user…
            </option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name ?? u.id}
              </option>
            ))}
          </select>
        </label>

        <label>
          Start date
          <input
            name='startDate'
            type='date'
            defaultValue={new Date().toISOString().slice(0, 10)}
            required
          />
        </label>

        <label>
          End date
          <input name='endDate' type='date' />
        </label>

        <button type='submit' className={styles.saveBtn}>
          Create
        </button>
      </form>
    </section>
  );
}
