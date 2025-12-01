import { z } from 'zod'

export const createTaskSchema = z.object({
  name : z.string().min(1, "Name is required"),
  status : z.enum(["TODO", "DONE"]).default("TODO"),
  goalId : z.number().int().positive()
})

export const updateTaskSchema = createTaskSchema.partial()