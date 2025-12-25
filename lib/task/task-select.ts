import prisma from "../prisma";

export async function getTaskById(taskId: number) {
  return await prisma.task.findMany({
    where: {
      id: taskId,
    },
  });
}
