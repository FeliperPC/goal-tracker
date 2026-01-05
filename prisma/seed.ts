import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

async function main() {
   console.log("🌱 Reseting db...");

  await prisma.task.deleteMany();
  await prisma.goal.deleteMany();

  console.log("🌱 Initializing seed...");
  const goal1 = await prisma.goal.create({
    data: {
      name: "Learn Prisma",
      description: "Study Prisma with Next.js",
      status: "TODO",
      userId: "user_37FXbmJtlKE3ZsEseZwwJ3BYBsj",
      tasks: {
        create: [
          { name: "Read the documentation", status: "TODO" },
          { name: "Create the first project", status: "DONE" },
        ],
      },
    },
  });
  const goal2 = await prisma.goal.create({
    data: {
      name: "Personal Project",
      description: "Build an app with Next.js",
      status: "TODO",
      userId: "user_37FXbmJtlKE3ZsEseZwwJ3BYBsj",
      tasks: { create: [{ name: "Define project scope", status: "TODO" }] },
    },
  });
  const goal3 = await prisma.goal.create({
    data: {
      name: "Full Stack Project",
      description: "Build a complete app with Next.js",
      status: "TODO",
      userId: "userIdTest",
      tasks: {
        create: [
          { name: "Define project scope", status: "DONE" },
          { name: "Design the database schema", status: "TODO" },
          { name: "Build initial UI", status: "TODO" },
        ],
      },
    },
  });
  const goal4 = await prisma.goal.create({
    data: {
      name: "Learn Tailwind",
      description: "Build responsive layouts",
      status: "DONE",
      userId: "user_37FXbmJtlKE3ZsEseZwwJ3BYBsj",
      tasks: {
        create: [
          { name: "Study basic utility classes", status: "DONE" },
          { name: "Layouts with Grid and Flexbox", status: "DONE" },
          { name: "Implement dark mode", status: "DONE" },
        ],
      },
    },
  });
  const goal5 = await prisma.goal.create({
    data: {
      name: "Authentication with Clerk",
      description: "Implement login and route protection",
      status: "TODO",
      userId: "another user id",
      tasks: {
        create: [
          { name: "Read Clerk documentation", status: "TODO" },
          { name: "Configure providers", status: "TODO" },
          { name: "Protect private routes", status: "TODO" },
        ],
      },
    },
  });
  const goal6 = await prisma.goal.create({
    data: {
      name: "Next.js Performance",
      description: "Improve performance and caching",
      status: "DONE",
      userId: "user_37FXbmJtlKE3ZsEseZwwJ3BYBsj",
      tasks: {
        create: [
          { name: "Understand Next.js cache", status: "DONE" },
          { name: "Use revalidatePath", status: "DONE" },
          { name: "Avoid unnecessary re-renders", status: "DONE" },
        ],
      },
    },
  });
  console.log("✅ Seed finished");
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
