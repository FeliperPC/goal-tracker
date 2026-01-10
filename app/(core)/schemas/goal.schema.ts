import { z } from "zod";

export const createGoalSchema = z.object({
  id: z.string().optional(),
  name: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(120, { message: "Title must be less than 120 characters" }),
  status: z.enum(["todo", "done", "TODO", "DONE"]),
  description: z
    .string()
    .min(3, "Description is must be at least 3 characters")
    .max(500, { message: "Description must be less than 500 characters" }),
  tasks: z.array(
    z.object({
      name: z.string().min(1),
      status: z.enum(["todo", "done", "TODO", "DONE"]),
    })
  ),
});

export const updateGoalSchema = createGoalSchema.partial();
