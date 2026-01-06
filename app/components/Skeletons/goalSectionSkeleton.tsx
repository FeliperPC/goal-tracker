import { Skeleton } from "@/components/ui/skeleton";

export default function GoalSectionSkeleton(){
  return(
    <div className="grid gap-4">
      <div className="flex gap-2">
        <Skeleton className="flex-1 h-10 rounded-lg" />
        <Skeleton className="flex-1 h-10 rounded-lg" />
      </div>
      <div className="grid gap-3">
        {Array.from({length:3}).map((_,index)=>(
          <div key={index} className="h-28 w-full border border-gray-800/10 rounded-xl py-6 px-3 gap-3 grid">
            <div className="grid gap-2">
              <Skeleton className="h-6 w-32"/>
              <Skeleton className="h-4 w-48"/>
            </div>
            <Skeleton className="h-6 w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}