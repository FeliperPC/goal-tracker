"use client";
import { finishGoalAction, removeGoalAction } from "@/lib/goal/goal-actions";
import { CheckCheck, Pencil, Trash, X } from "lucide-react";
import { useState, useTransition } from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import DialogConfirmation from "../Dialogs/DialogConfirmation";
import { redirect } from "next/navigation";

export default function GoalActions({ goalId }: { goalId: number }) {
  const [isPending, startTransition] = useTransition();
  const [action, setAction] = useState<"finish" | "delete">("finish");
  const [isOpen, setIsOpen] = useState(false);

  function handlefinishGoalAction() {
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
        setIsOpen(false);
        startTransition(async () => {
          await finishGoalAction(goalId);
        });
        break;
      default:
        setIsOpen(false);
        startTransition(async () => {
          await removeGoalAction(goalId);
        });
    }
  }

  function handleEditGoal() {
    redirect(`dashboard/submit/${goalId}`);
  }

  return (
    <div className="flex gap-2 justify-end">
      <button
        className="rounded-xl p-2 shadow-md border border-gray-800/20 cursor-pointer"
        disabled={isPending}
        onClick={handleEditGoal}
      >
        <Pencil className="size-5 text-gray-500" />
      </button>
      <button
        className="rounded-xl p-2 text-secondary bg-primary shadow-md flex items-center gap-2 border border-(--secondary)/20 cursor-pointer"
        disabled={isPending}
        onClick={handlefinishGoalAction}
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
        className="rounded-xl p-2  bg-red-500/20 shadow-md text-red-600 flex items-center gap-2 border border-red-500/20 cursor-pointer"
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
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirmation}
        btnConfirmColor={
          action == "delete"
            ? "bg-red-500/20 text-red-600"
            : "text-secondary bg-primary/70"
        }
        btnConfirmTitle={action == "delete" ? "Delete" : "Finish goal"}
        btnConfirmIcon={action == "delete" ? Trash : CheckCheck}
      >
        <div className="flex justify-between items-center text-gray-900">
          <h2 className={`text-xl font-semibold`}>
            {action == "delete" ? "Delete goal" : "Finish goal"}
          </h2>
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <X />
          </button>
        </div>
        <p className="text-sm text-gray-800">
          Are you sure you want to finish this goal?
          <br />
          <span>
            This will set the <strong>goal and its tasks as done</strong>.
          </span>
        </p>
      </DialogConfirmation>
    </div>
  );
}
