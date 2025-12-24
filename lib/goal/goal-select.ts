import prisma from "@/lib/prisma";

export async function getTodoGoals() {
  "use cache"
  return await prisma.goal.findMany({
    include: { tasks: true },
    where: {
      status: "TODO"
    }
  })
}

export async function getDoneGoals() {
  "use cache"
  return await prisma.goal.findMany({
    include: { tasks: true },
    where: {
      status: "DONE"
    }
  })
}

export async function getAllGoals() {
  "use cache"
  return await prisma.goal.findMany({
    include: { tasks: true },
  })
}