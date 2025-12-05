import { z } from 'zod'

export const createGoalSchema = z.object({
  name: z.string().min(3, "Name is required"),
  status: z.enum(["TODO", "DONE"]).default("TODO"),
  description: z.string().min(3, "Description is required")
})

export const updateGoalSchema = createGoalSchema.partial()