import { PrismaClient } from "@prisma/client";

export class PrismaService {
  private static instance: PrismaClient;

  public static GetInstance() {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaClient();
    }

    return PrismaService.instance;
  }
}
