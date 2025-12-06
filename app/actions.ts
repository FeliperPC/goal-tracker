"use server"
import { prisma } from '../lib/prisma'
import { Status } from '@/types/types';

export async function getGoals() {
  return await prisma.goal.findMany({
    include: { tasks: true }
  });
}

export async function changeTaskStatus(taskId:number, value:Status){
  console.log(taskId);
  
  const data = {
    status:value
  }
  try{
    const taskOnUpdate = await prisma.task.update({
      where:{
        id: Number(taskId)
      },
      data,
    })
    return taskOnUpdate
  } catch(error){
    console.error(error);
    return null;
  }
}