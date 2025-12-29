import { GoalCard } from "@/app/components/Goals/GoalCard";
import { getDoneGoals } from "@/lib/goal/goal-select";

export default async function Done() {
  const goals = await getDoneGoals();
  return (
    <div className="overflow-auto flex flex-col gap-3 mb-20">
      {goals.filter((goal) => goal.status==="DONE")
        .map((goal) => (
          <GoalCard goal={goal} key={goal.id} />
        ))}
    </div>
  );
}
