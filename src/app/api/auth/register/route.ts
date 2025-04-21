// src/app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/auth";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, companyName } = await request.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create company
    const company = await prisma.company.create({
      data: {
        name: companyName,
      },
    });

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        companyId: company.id,
        role: "USER",
      },
    });

    try {
      // Log activity (non-critical)
      await prisma.activityLog.create({
        data: {
          action: "USER_REGISTERED",
          details: `User registered with company ${companyName}`,
          userId: user.id,
        },
      });
    } catch (error) {
      console.error("Error logging activity:", error);
    }

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}
