"use server";

import prisma from "@/lib/prisma";
import { FormState } from "@/types/types";
import { revalidatePath } from "next/cache";


export async function finishGoal(goalId:number){
  try{
    await prisma.task.updateMany({
      where:{goalId, status:'TODO'},
      data:{status:'DONE'}
    })
    await prisma.goal.update({
      where: { id: goalId },
      data: { status: "DONE" },
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Goal set as done successfully!",
    };
  } catch(error){
    return {
      success: false,
      errors: { error: ["Error on deleting goal"] },
      message: "Failed to delete goal",
    };
  }
}

export async function removeGoal(goalId:number){
  try{
    await prisma.goal.delete({
      where: { id: goalId },
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Goal removed successfully!",
    };
  } catch(error){
    console.log(error);
    return {
      success: false,
      errors: { error: ["Error on deleting goal"] },
      message: "Failed to delete goal",
    };
  }
}

export async function addGoalAction(prevState: FormState,
  formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());

  console.log(formData);
  
}

