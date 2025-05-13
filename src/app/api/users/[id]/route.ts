// src/app/api/users/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> } // ← must be Promise
) {
  const { id } = await params; // ← await it

  /* 1 — authorize */
  const session = await auth();
  if (session?.user?.role !== "ADMIN") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  /* 2 — read body */
  const { makeAdmin }: { makeAdmin: boolean } = await req.json();

  /* 3 — update user */
  const updated = await prisma.user.update({
    where: { id },
    data: { role: makeAdmin ? "ADMIN" : "USER" },
  });

  return NextResponse.json({ id: updated.id, role: updated.role });
}
