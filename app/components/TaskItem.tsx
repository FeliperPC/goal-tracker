import { Goal, Status, Task } from "@/types/types";
import { Check } from "lucide-react";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useGlobalStore } from "../(store)/useGlobalStore";

export default function TaskItem({
  task,
  onUpdateGoal,
  goalStatus,
}: {
  task: Task;
  onUpdateGoal: (taskId: number, value: Status) => Promise<Goal>;
  goalStatus: string;
}) {
  const [goalTask, setGoalTask] = useState(task);
  const [isLoading, setIsLoading] = useState(false);
  const updatedGoal = useGlobalStore((s) => s.setGoal);

  async function handleChange() {
    setIsLoading(true);
    const goal =
      goalTask.status == "TODO"
        ? await onUpdateGoal(goalTask.id, "DONE")
        : await onUpdateGoal(goalTask.id, "TODO");
    setIsLoading(false);
    const task = goal.tasks.find((task) => task.id == goalTask.id);
    setGoalTask(task!!!);
    if (goal.tasks.every((task) => task.status == "DONE")) {
      setTimeout(() => {
        updatedGoal(goal);
      }, 5000);
    } else {
      updatedGoal(goal);
    }
  }

  return (
    <div className="flex gap-2 items-center relative">
      <button
        disabled={goalStatus == "DONE"}
        className={`${
          goalTask.status == "DONE"
            ? "bg-[var(--secondary)]"
            : "border border-gray-700/50"
        } rounded-[100%] w-5 h-5 flex items-center justify-center disabled:bg-[var(--primary)]/40`}
        onClick={handleChange}
      >
        {goalTask.status == "DONE" && <Check size={12} color="white" />}
      </button>
      <p
        className={`
        ${goalTask.status === "DONE" ? "line-through" : "text-gray-800"}
        ${
          goalStatus === "DONE" ? "text-gray-400 line-through" : "text-gray-800"
        }
        text-sm`}
      >
        {goalTask.name}
      </p>
      {isLoading ? (
        <div className="absolute right-0">
          <LoadingSpinner />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
