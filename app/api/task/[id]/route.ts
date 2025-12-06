import { updateTaskSchema } from '@/app/(core)/schemas/task.schema'
import {prisma} from '../../../../lib/prisma'
import { NextResponse } from 'next/server'
import { ZodError } from 'zod'

export async function GET(
  _request: Request,
  {params}: {params:Promise<{id:string}>}
){
  try{
    const {id} = (await params)
    const task = await prisma.task.findMany({
      where:{
        id: Number(id)
      }
    })
    return NextResponse.json(task)
  } catch(error){
    return NextResponse.json(
      {error: "Failed fetching task"},
      {status : 500}
    )
  }
}

export async function DELETE(
  _request: Request,
  {params}:{params:Promise<{id:string}>}
){
  try{
    const {id} = await params
    const taskOnDelete = await prisma.task.delete({
      where:{
        id: Number(id)
      }
    })
    return NextResponse.json(taskOnDelete)
  } catch(error){
    return NextResponse.json(
      {error : "Failed deleting task"},
      {status : 500}
    )
  }
}

export async function PATCH(
  request:Request,
  {params} : {params:Promise<{id:string}>}
){
  try{
    const {id} = await params
    const body = await request.json()
    const data = updateTaskSchema.parse(body)
    const taskOnUpdate = await prisma.task.update({
      where:{
        id: Number(id)
      },
      data,
    })
    return NextResponse.json(taskOnUpdate)
  } catch(error){
    if(error instanceof ZodError){
      return NextResponse.json(
        {message: "Validation failed: ", errors: error.cause},
        {status: 400}
      )
    }
    return NextResponse.json(
      {error: "Failed updating task"},
      {status:500}
    )
  }
}