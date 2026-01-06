"use server";

import { revalidatePath } from "next/cache";
import { getTaskById } from "./task-select";
import prisma from "../prisma";
import { Task } from "@/types/types";

export async function updateTask(taskId: number) {
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

export async function addTasks(tasks: Task[], goalId: number) {
  const data: any = [];
  tasks.map(({ name, status }) => {
    data.push({
      name,
      status,
      goalId,
    });
  });
  try {
    await prisma.task.createMany({
      data,
    });
    return {
      success: true,
      message: "Tasks added successfully!",
    };
  } catch (error) {
    return {
      success: false,
      error: error,
      message: "Error on adding tasks",
    };
  }
}
