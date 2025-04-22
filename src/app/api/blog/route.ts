import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req: NextRequest) {
  const { title, content } = await req.json();
  const slug = slugify(title, { lower: true, strict: true });

  await prisma.blogPost.create({
    data: { title, content, slug, published: true },
  });

  return NextResponse.json({ ok: true });
}
