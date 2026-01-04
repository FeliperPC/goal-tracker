import { getAllGoals } from "@/lib/goal/goal-select";
import Goals from "./Goals";

export default async function GoalProvider() {
  const goals = await getAllGoals();
  return <Goals goals={goals} />;
}