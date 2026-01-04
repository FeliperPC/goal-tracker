"use client";
import { Button } from "@/components/ui/button";
import { Goal } from "@/types/types";
import { GoalCard } from "./GoalCard";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Goals({ goals }: { goals: Goal[] }) {
  const [goalStatusView, setGoalStatusView] = useState<"TODO" | "DONE">("TODO");
  return (
    <section className="grid gap-3">
      <div className="flex gap-2 justify-between">
        <Button
          onClick={() => setGoalStatusView("TODO")}
          className={cn(
            "w-fit flex-1 py-4",
            goalStatusView == "DONE" ? "bg-primary/50" : "bg-primary"
          )}
        >
          To do
        </Button>
        <Button
          onClick={() => setGoalStatusView("DONE")}
          className={cn("w-fit flex-1 py-4", goalStatusView == "TODO" ? "bg-primary/50" : "bg-primary")}
        >
          Done
        </Button>
      </div>
      <div className="overflow-auto flex flex-col gap-3 mb-20">
        {goals
          .filter((goal) => goal.status === goalStatusView)
          .map((goal) => (
            <GoalCard goal={goal} key={goal.id} />
          ))}
      </div>
    </section>
  );
}
