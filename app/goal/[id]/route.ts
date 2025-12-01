import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'
import { updateGoalSchema } from '@/app/(core)/schemas/goal.schema'
import { ZodError } from 'zod'

export async function GET(
  _request:Request,
  {params}:{params:Promise<{id:string}>}
) {
  try{
    const {id} = (await params)
    const goal = await prisma.goal.findMany({
      where:{
        id: parseInt(id)
      }
    })
    return NextResponse.json(goal)
  } catch(error){
    console.log("Error fetching goal: ",error)
    return NextResponse.json(
      {error: "Failed fetching goal"},
      {status: 500}
    )
  }
}

export async function DELETE(
  _request:Request,
  {params}:{params:Promise<{id:string}>}
){
  try{
    const {id} = await params
    const goalOnDelete = await prisma.goal.delete({
      where:{
        id: parseInt(id)
      }
    })
    return NextResponse.json(goalOnDelete)
  }
  catch(error){
    console.log("Error deleting goal: ",error)
    return NextResponse.json(
      {error: "Error deleting goal"},
      {status: 500}
    )
  }
}

export async function PATCH(
  request:Request,
  {params}:{params:Promise<{id:string}>
}) {
  try{
    const {id} = await params
    const body = await request.json()
    const data = updateGoalSchema.parse(body)
    const goalOnUpdate = await prisma.goal.update({
      where:{
        id: Number(id)
      },
      data,
    })
    return NextResponse.json(goalOnUpdate)
  } catch(error){
    if(error instanceof ZodError){
      return NextResponse.json(
        {message: "Validation failed: ", errors: error.cause},
        {status:400}
      )
    }
    return NextResponse.json(
      {error: "Error updating goal"},
      {status: 500}
    )
  }
}