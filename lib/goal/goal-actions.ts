"use server";

import { createGoalSchema } from "@/app/(core)/schemas/goal.schema";
import prisma from "@/lib/prisma";
import { FormState, Status } from "@/types/types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { addTasks } from "../task/task-actions";

export async function finishGoal(goalId: number) {
  try {
    await prisma.task.updateMany({
      where: { goalId, status: "TODO" },
      data: { status: "DONE" },
    });
    await prisma.goal.update({
      where: { id: goalId },
      data: { status: "DONE" },
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Goal set as done successfully!",
    };
  } catch (error) {
    return {
      success: false,
      errors: { error: ["Error on deleting goal"] },
      message: "Failed to delete goal",
    };
  }
}

export async function removeGoal(goalId: number) {
  try {
    await prisma.goal.delete({
      where: { id: goalId },
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Goal removed successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: { error: ["Error on deleting goal"] },
      message: "Failed to delete goal",
    };
  }
}

export async function addGoalAction(prevState: FormState, formData: FormData) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
      success: true,
      message: "Goal created successfully!",
    };
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Unauthorized. You must be logged in to create a goal.",
      };
    }
    const formDataValues = Object.fromEntries(formData.entries());

    const validatedData = createGoalSchema.safeParse({
      name: formDataValues.name,
      description: formDataValues.description,
      status: formDataValues.goalStatus,
    });

    if (!validatedData.success) {
      const errors = validatedData.error.flatten().fieldErrors;
      return {
        success: false,
        errors: errors,
        message: "Invalid data",
      };
    }

    const { name, description, status } = validatedData.data;

    const newGoal = await prisma.goal.create({
      data: {
        name,
        description: description as string,
        status: status.toUpperCase() as Status,
        userId: null,
      },
    });

    const tasksArray = JSON.parse(formDataValues.tasks as string);
    const taskInsertResult = await addTasks(tasksArray, newGoal.id);

    if (!taskInsertResult.success) {
      return {
        success: false,
        message: "Goal created but failed to add tasks.",
      };
    }

    revalidatePath("/");
    return {
      success: true,
      message: "Goal created successfully!",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: { error: ["Error on creating goal"] },
      message: "Failed to create goal",
    };
  }
}
