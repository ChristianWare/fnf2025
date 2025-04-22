import { prisma } from "@/auth"; // your global Prisma client
import { startOfMonth } from "date-fns";

export type Kpi = {
  id: string;
  label: string;
  value: number | string;
  href: string; // ← NEW
};

export async function getKpis(): Promise<Kpi[]> {
  // ❶ total users
  const totalUsers = await prisma.user.count();

  // ❷ active companies
  const totalCompanies = await prisma.company.count();

  // ❸ projects in progress
  const projectsInProgress = await prisma.project.count({
    where: { status: "IN_PROGRESS" },
  });

  // ❹ outstanding invoices
  const outstandingInvoices = await prisma.invoice.count({
    where: { status: "PENDING" },
  });

  // ❺ revenue this month
  const revenueResult = await prisma.payment.aggregate({
    _sum: { amount: true },
    where: { createdAt: { gte: startOfMonth(new Date()) } },
  });
  const revenueThisMonth = revenueResult._sum.amount ?? 0;

  // const totalPosts = await prisma.blogPost.count({
  //   where: { published: true },
  // });

  return [
    {
      id: "users",
      label: "Total Users",
      value: totalUsers,
      href: "/admin/dashboard/users",
    },
    {
      id: "companies",
      label: "Active Companies",
      value: totalCompanies,
      href: "/admin/dashboard/companies",
    },
    {
      id: "projects",
      label: "Projects In Progress",
      value: projectsInProgress,
      href: "/admin/dashboard/projects",
    },
    {
      id: "invoices",
      label: "Outstanding Invoices",
      value: outstandingInvoices,
      href: "/admin/dashboard/invoices",
    },
    {
      id: "revenue",
      label: "Revenue This Month",
      value: `$${revenueThisMonth.toLocaleString()}`,
      href: "/admin/dashboard/payments",
    },
    // {
    //   id: "blog",
    //   label: "Published Posts",
    //   value: totalPosts,
    //   href: "/admin/dashboard/blog",
    // },
  ];
}
