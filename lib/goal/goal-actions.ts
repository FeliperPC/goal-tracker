"use server";
import prisma from "@/lib/prisma";
import { Status, Task } from "@/types/types";
import { revalidatePath } from "next/cache";
import { getTaskById } from "../task/task-select";

export async function updateGoal(taskId: number) {
  try {
    const task = await getTaskById(taskId);

    let data = {};

    if (task) {
      data = {
        status: task[0].status == "DONE" ? "TODO" : "DONE",
      };
    }

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
      await prisma.goal.update({
        where: { id: taskOnUpdate.goalId },
        include: { tasks: true },
        data: { status: "DONE" },
      });
      revalidatePath("/");
      return {
        success: true,
        message: "Goal is completed, it was updated successfully!",
      };
    }
    revalidatePath("/");
    return {
      success: true,
      message: "Goal updated successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: { error: ["Error on updating goal"] },
      message: "Failed to update goal",
    };
  }
}
