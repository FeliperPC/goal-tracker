"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function finishGoal(goalId:number){
  await prisma.goal.update({
    where: { id: goalId },
    data: { status: "DONE" },
  });
  revalidatePath("/");
  return {
    success: true,
    message: "Goal set as done successfully!",
  };
}
