import { Goal } from "@/types/types";

export default function GoalCard({goal}:{goal:Goal}){
  return(
    <div className="flex flex-col border border-slate-300 py-2 px-4 bg-slate-100/50 rounded-xl shadow text-lg gap-3 h-30 justify-center">
      <div>
        <p>{goal.name}</p>
        <p className="text-sm text-gray-600">{goal.description}</p>
      </div>
      {
        goal.id%2 ?
        <div className="py-2 bg-[var(--primary)] h-2 rounded-2xl"></div>
        :
        <div className="py-2 border border-slate-400 h-2 rounded-2xl"></div>
      }
    </div>
  )
}