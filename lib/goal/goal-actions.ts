"use server";

import { createGoalSchema } from "@/app/(core)/schemas/goal.schema";
import prisma from "@/lib/prisma";
import { FormState, Status } from "@/types/types";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

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
      message: "Failed on finish goal",
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
      message: "Failed to remove goal",
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

    const rawData = {
      id: formDataValues.id,
      name: formDataValues.name,
      description: formDataValues.description,
      status: formDataValues.status,
      tasks: JSON.parse((formDataValues.tasks as string) || "[]"),
    };

    const validated = createGoalSchema.safeParse(rawData);

    if (!validated.success) {
      return {
        success: false,
        errors: validated.error.flatten().fieldErrors,
        message: "Invalid form data.",
      };
    }

    const { id, name, description, status, tasks } = validated.data;

    await prisma.$transaction(async (tx) => {
      const goalData = {
        name,
        description,
        status: status.toUpperCase() as Status,
        userId,
      };

      let goalId: number;

      if (id) {
        goalId = Number(id);
        await tx.goal.update({ where: { id: goalId }, data: goalData });
        await tx.task.deleteMany({ where: { goalId } });
      } else {
        const newGoal = await tx.goal.create({ data: goalData });
        goalId = newGoal.id;
      }

      if (tasks.length > 0) {
        const data = tasks.map((task) => ({
          name: task.name,
          status: task.status as Status,
          goalId,
        }));
        await tx.task.createMany({
          data,
        });
        if (status.toUpperCase() === "DONE") {
          await tx.task.updateMany({
            where: { goalId: Number(id) },
            data: { status: "DONE" },
          });
        }
      }
    });
    revalidatePath("/dashboard");
    const successMessage = id
      ? "Goal updated successfully!"
      : "Goal created successfully!";
    return {
      success: true,
      message: successMessage,
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
