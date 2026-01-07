"use server";

import FormSubmit from "@/app/components/Goals/FormSubmit";
import { getGoalById } from "@/lib/goal/goal-select";

export default async function EditGoalPage({
  params,
}: {
  params: Promise<{ goalId: number }>;
}) {
  const id = (await params).goalId;
  const goal = await getGoalById(Number(id));
  if(!goal){
    return null
  }
  return <FormSubmit goal={goal} />;
}
