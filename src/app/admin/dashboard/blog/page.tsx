import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import Link from "next/link";
import styles from "./Blog.module.css";

export const revalidate = 60;

export default async function BlogAdminPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      slug: true,
      published: true,
      createdAt: true,
    },
  });

  return (
    <section className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.heading}>Blog posts</h1>
        <Link href='/admin/dashboard/blog/new' className={styles.newBtn}>
          + New Post
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((p) => (
            <tr key={p.id}>
              <td>
                <Link href={`/admin/dashboard/blog/${p.slug}`}>{p.title}</Link>
              </td>
              <td>{p.published ? "Published" : "Draft"}</td>
              <td>{format(p.createdAt, "MMM d, yyyy")}</td>
            </tr>
          ))}
          {posts.length === 0 && (
            <tr>
              <td colSpan={3} className={styles.empty}>
                No posts yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
