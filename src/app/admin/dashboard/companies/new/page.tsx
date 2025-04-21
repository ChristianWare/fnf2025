import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import styles from "../[id]/Company.module.css";

export default function NewCompany() {
  /* ---------------- server action ----------------- */
  async function create(formData: FormData) {
    "use server";

    const rawName = (formData.get("name") as string).trim();
    const rawWebsite = (formData.get("website") as string).trim();
    const rawPhone = (formData.get("phone") as string).trim();

    /* --------- server‑side validation & fix -------- */
    if (!rawName || !rawWebsite || !rawPhone) {
      throw new Error("All fields are required");
    }

    const website =
      rawWebsite.startsWith("http://") || rawWebsite.startsWith("https://")
        ? rawWebsite
        : `https://${rawWebsite}`;

    /* Validate URL */
    try {
      // throws if invalid
      new URL(website);
    } catch {
      throw new Error("Website URL is not valid");
    }

    await prisma.company.create({
      data: { name: rawName, website, phone: rawPhone },
    });

    /* Refresh list & go back to table */
    revalidatePath("/admin/dashboard/companies");
    redirect("/admin/dashboard/companies");
  }

  /* ---------------- UI ---------------------------- */
  return (
    <section className={styles.container}>
      <h1>New company</h1>

      <form action={create} className={styles.form}>
        <label>
          Name
          <input name='name' required />
        </label>

        <label>
          Website
          <input
            name='website'
            required
            placeholder='example.com or https://example.com'
            /*
              optional protocol + domain + optional path/query
            */
            pattern='^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$'
            title='Enter a valid URL, e.g. example.com or https://example.com'
          />
        </label>

        <label>
          Phone
          <input name='phone' required placeholder='+1 555‑123‑4567' />
        </label>

        <button type='submit' className={styles.saveBtn}>
          Create
        </button>
      </form>
    </section>
  );
}
