import prisma from "@/lib/prisma";

export async function getTodoGoals() {
  "use cache"
  console.log("get todo goals called");
  
  return await prisma.goal.findMany({
    include: { tasks: true },
    where: {
      status: "TODO"
    }
  })
}

export async function getDoneGoals() {
  "use cache"
  console.log("get done goals called");
  return await prisma.goal.findMany({
    include: { tasks: true },
    where: {
      status: "DONE"
    }
  })
}

export async function getAllGoals() {
  "use cache"
  console.log("get all goals called");
  return await prisma.goal.findMany({
    include: { tasks: true },
  })
}