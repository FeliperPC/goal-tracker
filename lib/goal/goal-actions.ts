"use server";
import prisma from "@/lib/prisma";
import { Status, Task } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function updateGoal(taskId: number, value: Status) {
  const data = {
    status: value,
  };

  const taskOnUpdate = await prisma.task.update({
    where: {
      id: Number(taskId),
    },
    data,
  });

  const tasks = await prisma.task.findMany({
    where: { goalId: taskOnUpdate.goalId },
  });

  const allDone = tasks.every((t) => t.status === "DONE");
  if (allDone) {
    return await getGoalUpdated(taskOnUpdate);
  }

  revalidatePath("/")
  return await prisma.goal.findFirst({
    where: {
      id: taskOnUpdate.goalId,
    },
    include: { tasks: true },
  });
}

export async function getGoalUpdated(taskOnUpdate: Task) {
  return await prisma.goal.update({
    where: { id: taskOnUpdate.goalId },
    include: { tasks: true },
    data: { status: "DONE" },
  });
}
