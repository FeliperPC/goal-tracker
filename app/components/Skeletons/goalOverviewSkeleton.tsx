import { Skeleton } from "@/components/ui/skeleton";

export default function GoalOverviewSkeleton(){
  return(
    <div className="flex gap-2 bg-slate-100 py-2 px-3 justify-between rounded-xl items-center border border-gray-300/80">
      <Skeleton className="h-6 w-36" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  )
}