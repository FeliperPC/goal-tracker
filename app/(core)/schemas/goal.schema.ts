import { z } from 'zod'

export const createGoalSchema = z.object({
  name: z.string().min(3, "Title must be at least 3 characters").max(120, { message: "Title must be less than 120 characters" }),
  status: z.enum(["todo", "done","TODO", "DONE"]).default("TODO"),
  description: z.string().min(3, "Description is must be at least 3 characters").max(500, { message: "Description must be less than 500 characters" }),
})

export const updateGoalSchema = createGoalSchema.partial()