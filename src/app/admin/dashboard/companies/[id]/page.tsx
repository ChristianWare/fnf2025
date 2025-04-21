import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import styles from "./Company.module.css";

export default async function CompanyEdit({
  params: { id },
}: {
  params: { id: string };
}) {
  const company = await prisma.company.findUnique({ where: { id } });
  if (!company) notFound();

  /* ---------- server actions defined inline ---------- */
  async function save(formData: FormData) {
    "use server";
    await prisma.company.update({
      where: { id },
      data: {
        name: formData.get("name") as string,
        website: (formData.get("website") as string) || null,
        phone: (formData.get("phone") as string) || null,
      },
    });
    revalidatePath("/admin/dashboard/companies");
    revalidatePath(`/admin/dashboard/companies/${id}`);
  }

  async function remove() {
    "use server";
    await prisma.company.delete({ where: { id } });
    revalidatePath("/admin/dashboard/companies");
    redirect("/admin/dashboard/companies");
  }

  return (
    <section className={styles.container}>
      <h1>Edit company</h1>

      <form action={save} className={styles.form}>
        <label>
          Name
          <input name='name' defaultValue={company.name} required />
        </label>

        <label>
          Website
          <input name='website' defaultValue={company.website ?? ""} />
        </label>

        <label>
          Phone
          <input name='phone' defaultValue={company.phone ?? ""} />
        </label>

        <button type='submit' className={styles.saveBtn}>
          Save changes
        </button>
      </form>

      <form action={remove}>
        <button type='submit' className={styles.deleteBtn}>
          Delete company
        </button>
      </form>

      {/* <p>
        Users: {company._count.users} &nbsp;|&nbsp; Projects:{" "}
        {company._count.projects}
      </p> */}
    </section>
  );
}
