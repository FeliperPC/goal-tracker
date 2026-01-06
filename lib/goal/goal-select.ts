import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

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
    include: { tasks: true },
    where: { userId },
  });
}
