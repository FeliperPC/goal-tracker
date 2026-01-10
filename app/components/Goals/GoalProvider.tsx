import { getAuthenticatedUserGoals } from "@/lib/goal/goal-select";
import Goals from "./Goals";
import EmptyGoalsView from "./EmptyGoalsView";

export default async function GoalProvider() {
  const goals = await getAuthenticatedUserGoals();
  if(!goals.length){
    return <EmptyGoalsView />
  }
  return <Goals goals={goals} />;
}