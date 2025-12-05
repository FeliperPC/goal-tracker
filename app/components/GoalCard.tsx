import { Goal, Task } from "@/types/types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TaskItem from "./TaskItem";

export default function GoalCard({ goal }: { goal: Goal }) {
  const [showTasks, setShowTasks] = useState(false);
  return (
    <div className="flex flex-col border border-slate-300 px-4 py-4 bg-slate-100/50 rounded-xl shadow text-lg gap-3 justify-start">
      <header>
        <div className="flex justify-between">
          <p>{goal.name}</p>
          <AnimatePresence mode="wait">
            <motion.button
              key={showTasks ?"down":"up"}
              initial={{ opacity: 0, rotate: showTasks? -90 : 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: showTasks ? 90 : -90, scale: 0.5 }}
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
      {goal.status == "TODO" && (
        <div>
          {goal.id % 2 ? (
            <div className="py-2 bg-[var(--primary)] h-2 rounded-2xl"></div>
          ) : (
            <div className="py-2 border border-slate-400 h-2 rounded-2xl"></div>
          )}
        </div>
      )}
      <AnimatePresence>
        <motion.div
          key={Number(showTasks)}
          initial={{height:0, opacity:100}}
          animate={{
            height: "auto",
          }}
          exit={{
            height: "0px",
            opacity:0,
          }}
          className={`${showTasks ? 'block':'hidden'} flex flex-col gap-2`}
        >
          {goal.tasks?.map((task:Task)=>(
            <TaskItem task={task} key={task.id} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
