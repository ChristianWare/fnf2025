import { ReactNode } from "react";
import { auth } from "@/auth"; // NextAuth server helper
import { redirect } from "next/navigation"; // server-side redirect
import LayoutWrapper from "@/components/LayoutWrapper";

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
    <section
      style={{
        paddingTop: "5rem",
      }}
    >
      <LayoutWrapper>{children}</LayoutWrapper>
    </section>
  );
}
