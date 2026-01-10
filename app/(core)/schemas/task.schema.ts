import { z } from "zod";

export const createTaskSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  status: z.enum(["TODO", "DONE"]).default("TODO"),
});

export const updateTaskStatusSchema = createTaskSchema.partial();
