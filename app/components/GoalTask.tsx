import { Goal, Status, Task } from "@/types/types";
import TaskItem from "./TaskItem";
import { updateGoal } from "../../lib/goal/goal-actions";

export default function GoalTask({ tasks, goalStatus }: { tasks: Task[]; goalStatus:string }) {
  async function hanldeChangeStatus(taskId:number, value:Status) {
    const res = await updateGoal(taskId, value)
    return res as Goal
  }
  return (
    <div className="flex flex-col gap-2">
      {
        tasks.map((task:Task)=>(
          <TaskItem task={task} key={task.id} onUpdateGoal={hanldeChangeStatus} goalStatus={goalStatus}/>
        ))
      }
    </div>
  )
}