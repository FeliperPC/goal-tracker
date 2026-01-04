import { Status, Task } from "@/types/types";
import { Check } from "lucide-react";
import { useTransition } from "react";
import { updateTask } from "@/lib/task/task-actions";
import { LoadingSpinner } from "../LoadingSpinner";

export default function TaskItem({
  id,
  name,
  goalId,
  createdAt,
  status,
  goalStatus,
}: {
  id: number;
  name: string;
  goalId: number;
  createdAt: Date;
  status: Status;
  goalStatus: string;
}) {
  const [isPending, startTransition] = useTransition();

  function handleChange() {
    startTransition(async () => {
      await updateTask(id);
    });
  }

  return (
    <div className="flex gap-2 items-center relative">
      <button
        type="submit"
        disabled={goalStatus == "DONE"}
        className={`${
          status == "DONE"
            ? "bg-primary"
            : "border border-gray-700/50"
        } rounded-[100%] w-5 h-5 flex items-center justify-center disabled:bg-primary/40`}
        onClick={handleChange}
      >
        {status == "DONE" && <Check size={12} color="white" />}
      </button>
      <p
        className={`
        ${status === "DONE" ? "line-through" : "text-gray-800"}
        ${
          goalStatus === "DONE" ? "text-gray-400 line-through" : "text-gray-800"
        }
        text-sm`}
      >
        {name}
      </p>
      {isPending ? (
        <div className="absolute right-0">
          <LoadingSpinner />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
