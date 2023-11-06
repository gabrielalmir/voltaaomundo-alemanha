import { PrismaService } from "@/services/prisma";
import { NextResponse } from "next/server";

import crypto from "crypto";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ id: null, email: null, error: "Missing email or password" }, { status: 400 });
  }

  const prisma = new PrismaService();

  const API_KEY = process.env.API_KEY;
  const encryptedPassword = crypto.createHash("sha256").update(password + API_KEY).digest("hex");

  const user = await prisma.user.findUnique({
    where: {
      email,
      password: encryptedPassword,
    },
  });

  if (!user) {
    return NextResponse.json({ id: null, email: null, error: "Invalid email or password" }, { status: 400 });
  }

  return NextResponse.json({ id: user.id, email: user.email, error: null });
}
