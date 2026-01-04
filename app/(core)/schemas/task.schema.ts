import { z } from 'zod'

export const createTaskSchema = z.object({
  name : z.string().min(3, "Name must be at least 3 characters long"),
  status : z.enum(["TODO", "DONE"]).default("TODO"),
  goalId : z.number().int().positive()
})

export const updateTaskSchema = createTaskSchema.partial()