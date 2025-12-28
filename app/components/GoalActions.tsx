"use client";
import { finishGoal, removeGoal } from "@/lib/goal/goal-actions";
import { CheckCheck, Pencil, Trash } from "lucide-react";
import { useState, useTransition } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export default function GoalActions({ goalId }: { goalId: number }) {
  const [isPending, startTransition] = useTransition();
  const [action, setAction] = useState<"finish" | "delete">("finish");

  function handleFinishGoal() {
    setAction("finish");
    startTransition(async () => {
      await finishGoal(goalId);
    });
  }

  function handleDeleteGoal() {
    setAction("delete");
    startTransition(async () => {
      await removeGoal(goalId);
    });
  }
  return (
    <div className="flex gap-2 justify-end">
      <button
        className="rounded-xl p-2  bg-gray-500/20 shadow-md"
        disabled={isPending}
      >
        <Pencil className="size-5 text-gray-500" />
      </button>
      <button
        className="rounded-xl p-2 text-(--secondary) bg-[var(--primary)]/20 shadow-md flex items-center gap-2"
        disabled={isPending}
        onClick={handleFinishGoal}
      >
        {isPending && action == "finish" ? (
          <>
            <span className="text-sm">Completing goal…</span>
            <LoadingSpinner />
          </>
        ) : (
          <CheckCheck className="size-5" />
        )}
      </button>
      <button
        className="rounded-xl p-2  bg-red-500/20 shadow-md text-red-600 flex items-center gap-2"
        disabled={isPending}
        onClick={handleDeleteGoal}
      >
        {isPending && action == "delete" ? (
          <>
            <span className="text-sm">Removing goal…</span>
            <LoadingSpinner color="red" />
          </>
        ) : (
          <Trash className="size-5" />
        )}
      </button>
    </div>
  );
}
