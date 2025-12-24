"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, ChevronDown } from "lucide-react";
import GoalTask from "./GoalTask";
import { Goal, Task } from "@/types/types";
import { useEffect, useState } from "react";

export function GoalCard({ goal }: { goal: Goal }) {
  const [showTasks, setShowTasks] = useState(false);
  const [taskBarProgress, setTaskBarProgress] = useState(0);

  useEffect(() => {
    const goalTasksDoneLength = goal.tasks.filter(
      (task: Task) => task.status === "DONE"
    ).length;

    const percentage = goal.tasks.length
      ? Math.floor((goalTasksDoneLength * 100) / goal.tasks.length)
      : 0;

    setTaskBarProgress(percentage);
  }, [goal]);

  return (
    <div
      className="flex flex-col border border-slate-300 px-4 py-4 bg-slate-100/50 rounded-xl shadow text-lg gap-3 justify-start"
      key={goal.id}
    >
      <header>
        <div className="flex justify-between">
          <p>{goal.name}</p>
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
              {showTasks ? <ChevronUp /> : <ChevronDown />}
            </motion.button>
          </AnimatePresence>
        </div>
        <p className="text-sm text-gray-600">{goal.description}</p>
      </header>
      {goal.status === "TODO" && (
        <div className="py-2 border border-slate-400 h-2 rounded-2xl relative">
          <AnimatePresence>
            {taskBarProgress != 0 ? (
              <motion.div
                animate={{ width: `${taskBarProgress}%` }}
                transition={{ duration: 1 }}
                exit={{ width: '0%' }}
                className="py-2 border-slate-400 h-2 rounded-2xl absolute top-0 bg-[var(--primary)]"
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
          className={`${showTasks ? "block" : "hidden"}`}
        >
          <GoalTask tasks={goal.tasks} goalStatus={goal.status} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
