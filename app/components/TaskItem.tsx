import { Task } from "@/types/types";
import { Check, Circle, CircleCheck } from "lucide-react";
import { useState } from "react";

export default function TaskItem({ task }: { task: Task }) {
  const [status, setStatus] = useState("TODO");

  function changeStatus() {
    if (status === "TODO") {
      setStatus("DONE");
      return;
    }
    setStatus("TODO");
  }

  return (
    <div className="flex gap-2 items-center">
      <button
        className={`${
          status == "DONE"
            ? "bg-[var(--secondary)]"
            : "border border-gray-700/50"
        } rounded-[100%] w-5 h-5 flex items-center justify-center`}
        onClick={changeStatus}
      >
        {status == "DONE" && <Check size={12} color="white" />}
      </button>
      <p
        className={`${
          status == "DONE" && "line-through"
        } text-sm text-gray-800`}
      >
        {task.name}
      </p>
    </div>
  );
}
