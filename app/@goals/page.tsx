import { GoalCard } from "@/app/components/GoalCard";
import { getTodoGoals } from "@/lib/goal/goal-select";

export default async function Todo() {
  const goals = await getTodoGoals();
  return (
    <div className="overflow-auto flex flex-col gap-3 mb-20">
      {goals.filter((goal) => goal.status==="TODO")
        .map((goal) => (
          <GoalCard goal={goal} key={goal.id} />
        ))}
    </div>
  );
}
