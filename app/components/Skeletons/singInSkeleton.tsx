import { Skeleton } from "@/components/ui/skeleton";

export default function SignInSkeleton() {
  return (
    <div className="w-[335px] rounded-xl border border-slate-200/60 bg-white/50 p-6 space-y-5">
      <Skeleton className="h-6 w-[200px] mx-auto" />

      <div className="space-y-2">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-4 w-20 mx-auto" />
      </div>

      <Skeleton className="h-4 w-[100px]" />

      <Skeleton className="h-10 w-full rounded-md" />

      <Skeleton className="h-10 w-full rounded-md" />

      <div className="pt-2">
        <Skeleton className="h-3 w-[140px] mx-auto" />
      </div>
    </div>
  );
}
