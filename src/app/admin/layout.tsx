import { ReactNode } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import styles from "./AdminLayout.module.css";
import Contact2 from "@/components/Contact2/Contact2";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  // 1. Unauthenticated → to /login
  if (!session) redirect("/login?callbackUrl=/admin");

  // 2. Authenticated but not an admin → home page
  if (session.user.role !== "ADMIN") redirect("/");

  // 3. Happy path – render nested pages
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
        <Contact2 />
    </section>
  );
}
