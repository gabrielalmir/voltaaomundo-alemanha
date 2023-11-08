import { PrismaService } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = PrismaService.GetInstance();

export async function GET(request: NextRequest) {
  if (request.headers.get("token") !== process.env.API_KEY) {
    return NextResponse.redirect("/login");
  }

  const messages = await prisma.contactMessage.findMany({
    where: {
      active: true,
    }
  })

  return NextResponse.json({ messages });
}

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: null, error: "Missing name, email or message" }, { status: 400 });
  }

  const newMessage = await prisma.contactMessage.create({
    data: {
      name,
      email,
      message,
    },
  });

  return NextResponse.json({ message: newMessage }, { status: 201 });
}

export async function PUT(request: NextRequest) {
  if (!request.cookies.has('user')) {
    return NextResponse.redirect("/login");
  }

  const { id, active } = await request.json();

  if (!id || active === undefined) {
    return NextResponse.json({ message: null, error: "Missing id or active" }, { status: 400 });
  }

  await prisma.contactMessage.update({
    where: {
      id,
    },
    data: {
      active,
    },
  });

  return NextResponse.json({ success: true });
}
