"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const CompanySchema = z.object({
  name: z.string().min(2),
  website: z.string().url().optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
});

export async function updateCompany(id: string, formData: FormData) {
  const data = CompanySchema.parse({
    name: formData.get("name"),
    website: formData.get("website"),
    phone: formData.get("phone"),
  });

  await prisma.company.update({ where: { id }, data });
  revalidatePath("/admin/dashboard/companies");
  revalidatePath(`/admin/dashboard/companies/${id}`);
}

export async function deleteCompany(id: string) {
  await prisma.company.delete({ where: { id } });
  revalidatePath("/admin/dashboard/companies");
}
