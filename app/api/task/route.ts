import { NextResponse } from 'next/server'
import { prisma } from '../../lib/prisma'
import { ZodError } from 'zod'
import { createTaskSchema } from '../(core)/schemas/task.schema'

export async function GET(){
  try{
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
  } catch( error ){
    console.log("Error fetching tasks: ", error)
    return NextResponse.json(
      {error: "Failed fetching tasks"},
      {status: 500}
    )
  }
}

export async function POST(request:Request){
  try{
    const body = await request.json()
    const data = createTaskSchema.parse(body)
    const taskOnCreate = await prisma.task.create({
      data,
    })
    return NextResponse.json(taskOnCreate)
  } catch(error){
    if(error instanceof ZodError){
      return NextResponse.json(
        {message: "Validation failed: ", errors: error.cause},
        {status:400}
      )
    }
    return NextResponse.json(
      {erro: "Failed creating a task"},
      {status : 500}
    )
  }
}