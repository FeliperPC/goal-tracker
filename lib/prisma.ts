import { PrismaClient } from "../app/generated/prisma/client"

// it allows keep a single prisma instance in a constant
const globalForPrisma = global as unknown as { prisma: PrismaClient };
import { withAccelerate } from "@prisma/extension-accelerate"


export const prisma = globalForPrisma.prisma || new PrismaClient({
  log:["query"],
  datasourceUrl: process.env.DATABASE_URL,
}).$extends(withAccelerate())

// development mode saves in the global, avoding creating more instances
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
