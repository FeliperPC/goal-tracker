"use client";
import { finishGoal, removeGoal } from "@/lib/goal/goal-actions";
import { CheckCheck, Pencil, Trash } from "lucide-react";
import { useState, useTransition } from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import DialogConfirmation from "../Dialogs/DialogConfirmation";

export default function GoalActions({ goalId }: { goalId: number }) {
  const [isPending, startTransition] = useTransition();
  const [action, setAction] = useState<"finish" | "delete">("finish");
  const [isOpen, setIsOpen] = useState(false);
  const [onConfirm, setOnConfirm] = useState(false);

  function handleFinishGoal() {
    setAction("finish");
    setIsOpen(true);
  }

  function handleDeleteGoal() {
    setAction("delete");
    setIsOpen(true);
  }

  function handleConfirmation() {
    switch (action) {
      case "finish":
        startTransition(async () => {
          await finishGoal(goalId);
        });
        break;
      default:
        startTransition(async () => {
          await removeGoal(goalId);
        });
    }
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
      <DialogConfirmation
        isOpen={isOpen && action == "delete"}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirmation}
        btnConfirmColor="bg-red-500/20 text-red-600"
        btnConfirmTitle="Delete"
        btnConfirmIcon={Trash}
      >
        <h2 className="text-lg font-semibold">Delete goal</h2>
        <p className="text-sm text-gray-800">
          Are you sure you want to delete this goal?
          <br />
          <span>
            This will permanently{" "}
            <strong>delete the goal and all its tasks</strong>. This action
            cannot be undone.
          </span>
        </p>
      </DialogConfirmation>
    </div>
  );
}
