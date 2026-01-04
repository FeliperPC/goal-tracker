import { Badge } from "@/components/ui/badge";
import { getAllGoals } from "@/lib/goal/goal-select";
import { Goal } from "@/types/types";

export default async function GoalStatusGroup(){
  const goals = await getAllGoals()
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
        <Badge className="w-20">{goalStatus.todo} to do</Badge>
        <Badge className="w-20" variant="outline">{goalStatus.done} done</Badge>
      </div>
    </div>
  )
}