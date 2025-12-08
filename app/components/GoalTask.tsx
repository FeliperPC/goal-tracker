import { Status, Task } from "@/types/types";
import TaskItem from "./TaskItem";
import { changeTaskStatus } from "../actions";
import { useState } from "react";

export default function GoalTask({ tasks }: { tasks: Task[]; }) {
  async function hanldeChangeStatus(taskId:number, value:Status) {
    const res = await changeTaskStatus(taskId, value)
    return res
  }
  return (
    <div className="flex flex-col gap-2">
      {
        tasks.map((task:Task)=>(
          <TaskItem task={task} key={task.id} onChangeTaskStatus={hanldeChangeStatus}/>
        ))
      }
    </div>
  )
}