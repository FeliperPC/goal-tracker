"use client";

import { Goal } from "@/types/types";
import GoalCard from "./GoalCard";
import { useState } from "react";

export default function TaskClient({ goals }: { goals: Goal[] }) {
  const [showDoneTasks, setShowDoneTasks] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-4">
        <button
          type="button"
          className={showDoneTasks ? `btn-not-active`: `btn-primary`}
          onClick={()=>setShowDoneTasks(false)}
        >
          To do
        </button>
        <button
          type="button"
          className={showDoneTasks ? `btn-primary`: `btn-not-active`}
          onClick={()=>setShowDoneTasks(true)}
        >
          Done
        </button>
      </div>
      <div className="overflow-auto flex flex-col gap-3">
        {goals
          .filter((goal) => goal.status == (showDoneTasks ? "DONE" : "TODO"))
          .map((goal) => (
            <GoalCard goal={goal} key={goal.id} />
          ))}
      </div>
    </div>
  );
}
