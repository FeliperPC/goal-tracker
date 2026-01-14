"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Goal, Task } from "@/types/types";
import { useMemo, useState } from "react";
import GoalActions from "./GoalActions";
import TaskItem from "../Tasks/TaskItem";
import { cn } from "@/lib/utils";

export function GoalCard({ goal }: { goal: Goal }) {
  const [showTasks, setShowTasks] = useState(false);

  const taskBarProgress = useMemo(() => {
    return calculateProgress();
  }, [goal.tasks]);

  function calculateProgress() {
    const tasksDoneQnty = goal.tasks.filter(
      (task: Task) => task.status === "DONE"
    ).length;
    return goal.tasks.length
      ? Math.floor((tasksDoneQnty * 100) / goal.tasks.length)
      : 0;
  }

  return (
    <div
      className="flex flex-col border border-slate-300 p-4 lg:p-6 bg-slate-100/50 rounded-xl shadow text-lg gap-3 justify-start h-fit"
      key={goal.id}
    >
      <header>
        <div className="flex justify-between">
          <p className="lg:text-xl">{goal.name}</p>
          <AnimatePresence mode="wait">
            <motion.button
              key={showTasks ? "down" : "up"}
              initial={{
                opacity: 0,
                rotate: showTasks ? -90 : 90,
                scale: 0.5,
              }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{
                opacity: 0,
                rotate: showTasks ? 90 : -90,
                scale: 0.5,
              }}
              transition={{ duration: 0.2 }}
              className="text-gray-600"
              onClick={() => setShowTasks(!showTasks)}
            >
              {showTasks ? (
                <ChevronUp className="hover:bg-primary/10 rounded-full p-1 size-8 cursor-pointer" />
              ) : (
                <ChevronDown className="hover:bg-primary/10 rounded-full p-1 size-8 cursor-pointer" />
              )}
            </motion.button>
          </AnimatePresence>
        </div>
        <p className="text-sm text-gray-600 lg:text-lg">{goal.description}</p>
      </header>
      {goal.status === "TODO" && (
        <div className="py-2 border border-slate-400 h-2 rounded-2xl relative">
          <AnimatePresence>
            {taskBarProgress != 0 ? (
              <motion.div
                animate={{ width: `${taskBarProgress}%` }}
                transition={{ duration: 1 }}
                exit={{ width: "0%" }}
                className="py-2 border-slate-400 h-2 rounded-2xl absolute top-0 bg-primary"
              ></motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
      )}
      <AnimatePresence>
        <motion.div
          key={Number(showTasks)}
          initial={{ height: 0, opacity: 100 }}
          animate={{
            height: "auto",
          }}
          exit={{
            height: "0px",
            opacity: 0,
          }}
          className={cn("lg:overflow-y-hidden", showTasks ? "block" : "hidden")}
        >
          <div className="flex flex-col gap-2 lg:overflow-hidden">
            {goal.tasks.map((task: Task) => (
              <TaskItem {...task} key={task.id} goalStatus={goal.status} />
            ))}
          </div>
          {goal.status == "TODO" && (
            <div className="mt-4">
              <GoalActions goalId={goal.id} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
