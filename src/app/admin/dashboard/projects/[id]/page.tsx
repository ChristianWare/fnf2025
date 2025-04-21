/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import styles from "./Project.module.css";

export default async function ProjectEdit({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = await prisma.project.findUnique({
    where: { id },
    include: { company: true, user: true },
  });
  if (!project) notFound();

  const companies = await prisma.company.findMany({
    select: { id: true, name: true },
  });
  const users = await prisma.user.findMany({
    select: { id: true, name: true },
  });

  /* ------------ server actions ------------- */
  async function save(formData: FormData) {
    "use server";
    await prisma.project.update({
      where: { id },
      data: {
        name: formData.get("name") as string,
        description: (formData.get("description") as string) || null,
        companyId: formData.get("company") as string,
        userId: formData.get("owner") as string,
        startDate: new Date(formData.get("startDate") as string),
        endDate: formData.get("endDate")
          ? new Date(formData.get("endDate") as string)
          : null,
        status: formData.get("status") as any,
      },
    });
    revalidatePath("/admin/dashboard/projects");
    revalidatePath(`/admin/dashboard/projects/${id}`);
  }

  async function remove() {
    "use server";
    await prisma.project.delete({ where: { id } });
    revalidatePath("/admin/dashboard/projects");
    redirect("/admin/dashboard/projects");
  }

  /* ------------ UI ------------- */
  return (
    <section className={styles.container}>
      <h1>Edit project</h1>

      <form action={save} className={styles.form}>
        <label>
          Name
          <input name='name' defaultValue={project.name} required />
        </label>

        <label>
          Description
          <textarea
            name='description'
            rows={3}
            defaultValue={project.description ?? ""}
          />
        </label>

        <label>
          Company
          <select name='company' required defaultValue={project.companyId}>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Owner
          <select name='owner' required defaultValue={project.userId}>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name ?? u.id}
              </option>
            ))}
          </select>
        </label>

        <label>
          Status
          <select name='status' defaultValue={project.status}>
            {[
              "NOT_STARTED",
              "IN_PROGRESS",
              "ON_HOLD",
              "COMPLETED",
              "CANCELLED",
            ].map((s) => (
              <option key={s} value={s}>
                {s.replace("_", " ")}
              </option>
            ))}
          </select>
        </label>

        <label>
          Start date
          <input
            name='startDate'
            type='date'
            defaultValue={project.startDate.toISOString().slice(0, 10)}
            required
          />
        </label>

        <label>
          End date
          <input
            name='endDate'
            type='date'
            defaultValue={
              project.endDate ? project.endDate.toISOString().slice(0, 10) : ""
            }
          />
        </label>

        <button type='submit' className={styles.saveBtn}>
          Save changes
        </button>
      </form>

      <form action={remove}>
        <button type='submit' className={styles.deleteBtn}>
          Delete project
        </button>
      </form>
    </section>
  );
}
