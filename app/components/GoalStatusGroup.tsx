import { Goal, Task } from "@/types/types";

export default function GoalStatusGroup({goals}:{goals:Goal[]}){
  const goalStatus = {
    done: 0,
    todo: 0
  }
  goals.forEach((goal:Goal)=>{
    if(goal.status == 'DONE'){
      goalStatus['done']++
      return
    }
    goalStatus['todo']++
  })
  return(
    <div className="text-sm flex gap-2 bg-slate-100 py-2 px-3 justify-between rounded-xl items-center border border-gray-300/80">
      <p className="font-semibold">Goals Overview</p>
      <div className="flex gap-2">
        <div className="px-2 py-1 rounded-4xl bg-[var(--primary)]/70 w-24 text-center shadow-lg">{goalStatus.todo} to do</div>
        <div className="px-2 py-1 rounded-4xl bg-[var(--primary)]/40 w-24 text-center shadow-md text-gray-600">{goalStatus.done} done</div>
      </div>
    </div>
  )
}