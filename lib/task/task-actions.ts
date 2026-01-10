"use server";

import { revalidatePath } from "next/cache";
import { getTaskById } from "./task-select";
import prisma from "../prisma";

export async function updateTaskStatus(taskId: number) {
  try {
    const task = await getTaskById(taskId);

    let data = {};

    if (task) {
      data = {
        status: task[0].status == "DONE" ? "TODO" : "DONE",
      };
    }

    await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data,
    });

    revalidatePath("/dashboard");
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