import { Task } from "@/types/types";

export default function TaskItem({task}:{task:Task}){
  return (
    <div>
      {task.name}
    </div>
  )
}