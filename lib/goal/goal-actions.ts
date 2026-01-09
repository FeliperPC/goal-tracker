"use server";

import { createGoalSchema } from "@/app/(core)/schemas/goal.schema";
import prisma from "@/lib/prisma";
import { FormState, Status } from "@/types/types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { addTasks, updateTasks } from "../task/task-actions";
import { createTaskSchema } from "@/app/(core)/schemas/task.schema";

export async function finishGoalAction(goalId: number) {
  try {
    await prisma.task.updateMany({
      where: { goalId, status: "TODO" },
      data: { status: "DONE" },
    });
    await prisma.goal.update({
      where: { id: goalId },
      data: { status: "DONE" },
    });
    revalidatePath("/dashboard");
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

export async function removeGoalAction(goalId: number) {
  try {
    await prisma.goal.delete({
      where: { id: goalId },
    });
    revalidatePath("/dashboard");
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
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "Unauthorized. You must be logged in to create a goal.",
      };
    }
    const formDataValues = Object.fromEntries(formData.entries());

    const validatedGoalData = createGoalSchema.safeParse({
      name: formDataValues.name,
      description: formDataValues.description,
      status: formDataValues.goalStatus,
    });

    if (!validatedGoalData.success) {
      const errors = validatedGoalData.error.flatten().fieldErrors;
      return {
        success: false,
        errors: errors,
        message: "Invalid data",
      };
    }

    const tasksArray = JSON.parse(formDataValues.tasks as string);
    const result: boolean[] = [];
    tasksArray.forEach((task: any) => {
      result.push(
        createTaskSchema.safeParse({
          name: task.name,
          status: task.status,
        }).success
      );
    });

    if (result.includes(false)) {
      return {
        success: false,
        errors: { error: ["Tasks must have a valid name."] },
        message: " Invalid task data provided.",
      };
    }

    const { name, description, status } = validatedGoalData.data;
    if (formDataValues.id) {
      const newGoal = await prisma.goal.update({
        where: { id: Number(formDataValues.id) },
        data: {
          name,
          description: description as string,
          status: status.toUpperCase() as Status,
        },
      });

      const taskInsertResult = await updateTasks(tasksArray, newGoal.id);

      if (!taskInsertResult.success) {
        return {
          success: false,
          message: "Goal updated but failed to update tasks.",
        };
      }

      revalidatePath("/dashboard");

      return {
        success: true,
        message: "Goal updated successfully!",
      };
    }
    const newGoal = await prisma.goal.create({
      data: {
        name,
        description: description as string,
        status: status.toUpperCase() as Status,
        userId,
      },
    });

    const taskInsertResult = await addTasks(tasksArray, newGoal.id);

    if (!taskInsertResult.success) {
      await removeGoalAction(newGoal.id);
      return {
        success: false,
        message: "Goal created but failed to add tasks.",
      };
    }

    revalidatePath("/dashboard");

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
