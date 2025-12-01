import { ZodError } from 'zod'
import { createGoalSchema } from '../(core)/schemas/goal.schema'
import {prisma} from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request : Request){
  try{
    const body = await request.json()
    const data = createGoalSchema.parse(body)
    const goal = await prisma.goal.create({
      data,
    })
    return NextResponse.json(goal, { status: 201 })
  } catch(error) {
    if(error instanceof ZodError){
      return NextResponse.json(
        {message: "Validation failed", errors: error.cause},
        {status:400}
      )
    }
    return NextResponse.json(
      { error: "Failed to create goal" },
      { status: 500 }
    )
  }
}

export async function GET(){
  try{
    const goals = await prisma.goal.findMany()
    return NextResponse.json(goals)
  } catch(error){
    console.log("Error getting goals: ",error)
    return NextResponse.json(
      {error: "Failed to fetch goals"},
      {status : 500}
    )
  }
}