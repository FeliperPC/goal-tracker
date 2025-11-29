import { PrismaClient } from "@prisma/client";

// it allows keep a single prisma instance in a constant
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Create a prisma client if there isn't any
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // opcional: this key shows queries in the terminal
  });

// development mode saves in the global, avoding creating more instances
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
