import { getAuthenticatedUserGoals } from "@/lib/goal/goal-select";
import Goals from "./Goals";

export default async function GoalProvider() {
  const goals = await getAuthenticatedUserGoals();
  return <Goals goals={goals} />;
}