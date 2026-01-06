import { Skeleton } from "@/components/ui/skeleton";

export default function InfoCardSkeleton() {
  return (
    <section>
      <div className="bg-primary shadow-lg rounded-xl p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          {/* Title: Hi {user}! */}
          <Skeleton className="h-5 w-[160px] bg-white/50" />

          {/* Description */}
          <Skeleton className="h-4 w-[220px] bg-white/50" />

          {/* Date */}
          <Skeleton className="h-3 w-[140px] bg-white/50" />
        </div>

        {/* Content */}
        <div className="space-y-3 pt-2">
          {/* Quote */}
          <Skeleton className="h-4 w-full bg-white/50" />
          <Skeleton className="h-4 w-[90%] bg-white/50" />

          {/* Author */}
          <Skeleton className="h-3 w-[120px] bg-white/50" />
        </div>
      </div>
    </section>
  );
}
