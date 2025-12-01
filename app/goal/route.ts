import {prisma} from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request : Request){
  const body = await request.json()
  const goal = await prisma.goal.create({
    data: {
      name: body.name,
      status: body.status,
    }
  })
  return NextResponse.json(goal)
}