// src/app/api/users/[id]/route.ts
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 1) enforce that the user is an ADMIN
  const session = await auth();
  if (!session?.user?.role || session.user.role !== "ADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  // 2) pull the flag from the body
  const { makeAdmin }: { makeAdmin: boolean } = await request.json();

  // 3) update the target user
  const updated = await prisma.user.update({
    where: { id: params.id },
    data: { role: makeAdmin ? "ADMIN" : "USER" },
  });

  return NextResponse.json({ id: updated.id, role: updated.role });
}
