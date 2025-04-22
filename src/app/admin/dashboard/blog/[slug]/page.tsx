import { prisma } from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";
import Editor from "./Editor"; // ← our new client component
import styles from "./PostSlug.module.css";

export default async function EditPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post) notFound();

  async function save(formData: FormData) {
    "use server";
    await prisma.blogPost.update({
      where: { slug },
      data: {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        published: formData.get("published") === "on",
      },
    });
    redirect("/admin/dashboard/blog");
  }

  async function remove() {
    "use server";
    await prisma.blogPost.delete({ where: { slug } });
    redirect("/admin/dashboard/blog");
  }

  return (
    <section className={styles.container}>
      <h1>Edit post</h1>

      <form action={save} className={styles.form}>
        <label>
          Title
          <input
            name='title'
            defaultValue={post.title}
            required
            className={styles.titleInput}
          />
        </label>

        {/* hidden input to carry content HTML */}
        <input type='hidden' name='content' defaultValue={post.content} />

        {/* our client‑only editor */}
        <Editor initial={post.content} />

        <label className={styles.checkboxLabel}>
          <input
            type='checkbox'
            name='published'
            defaultChecked={post.published}
          />
          Published
        </label>

        <button type='submit' className={styles.saveBtn}>
          Save
        </button>
      </form>

      <form action={remove}>
        <button type='submit' className={styles.deleteBtn}>
          Delete
        </button>
      </form>
    </section>
  );
}
