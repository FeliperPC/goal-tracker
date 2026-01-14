import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";

export async function getAuthenticatedUserGoals() {
  const { userId } = await auth();
  if (!userId) {
    return [];
  }
  return await getGoalsByUserId(userId);
}

export async function getGoalsByUserId(userId: string) {
  "use cache";
  return await prisma.goal.findMany({
    include: { tasks: { orderBy: { name: "asc" } } },
    where: { userId },
  });
}

export async function getGoalById(id: number) {
  const goal = await prisma.goal.findFirst({
    include: { tasks: true },
    where: { id },
  });

  if (!goal) {
    notFound();
  }

  return goal;
}
