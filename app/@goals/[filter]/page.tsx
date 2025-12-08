"use client";
import { useGlobalStore } from "../../(store)/useGlobalStore";
import { usePathname } from "next/navigation";
import { GoalCard } from "@/app/components/GoalCard";

export default function Goal() {
  const goals = useGlobalStore((s) => s.goals);
  const pathname = usePathname()
  const filter = pathname.split("/").pop()?.toLowerCase()
  return (
    <div className="overflow-auto flex flex-col gap-3">
      {goals
        .filter((goal) => goal.status.toLowerCase() == filter)
        .map((goal) => (
          <GoalCard goal={goal} key={goal.id} />
        ))}
    </div>
  );
}
