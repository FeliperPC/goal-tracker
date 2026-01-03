import { z } from 'zod'

export const createGoalSchema = z.object({
  name: z.string().min(3, "Title is required").max(120, { message: "Title must be less than 120 characters" }),
  status: z.enum(["todo", "done","TODO", "DONE"]).default("TODO"),
  description: z.string().min(3, "Description is required")
})

export const updateGoalSchema = createGoalSchema.partial()