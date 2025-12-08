import { Status, Task } from "@/types/types";
import { Check } from "lucide-react";
import { useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import { useGlobalStore } from "../(store)/useGlobalStore";

export default function TaskItem({
  task,
  onChangeTaskStatus,
}: {
  task: Task;
  onChangeTaskStatus: (taskId: number, value: Status) => Promise<Task | null>;
}) {
  const [goalTask, setGoalTask] = useState(task);
  const [isLoading, setIsLoading] = useState(false);
  const updateTaskStatus = useGlobalStore((s) => s.updateTaskGoal);

  async function handleChange() {
    setIsLoading(true);
    const task =
      goalTask.status == "TODO"
        ? await onChangeTaskStatus(goalTask.id, "DONE")
        : await onChangeTaskStatus(goalTask.id, "TODO");
    if (task) {
      setGoalTask(task);
      updateTaskStatus(task.goalId, task.id, task.status);
    }
    setIsLoading(false);
  }

  return (
    <div className="flex gap-2 items-center relative">
      <button
        className={`${
          goalTask.status == "DONE"
            ? "bg-[var(--secondary)]"
            : "border border-gray-700/50"
        } rounded-[100%] w-5 h-5 flex items-center justify-center`}
        onClick={handleChange}
      >
        {goalTask.status == "DONE" && <Check size={12} color="white" />}
      </button>
      <p
        className={`${
          goalTask.status == "DONE" && "line-through"
        } text-sm text-gray-800`}
      >
        {goalTask.name}
      </p>
      {isLoading ?
        <div className="absolute right-0">
          <LoadingSpinner />
        </div>
        :
        ''
      }
    </div>
  );
}
