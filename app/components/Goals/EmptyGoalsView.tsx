import { Button } from "@/components/ui/button";
import { ArrowDown, InboxIcon } from "lucide-react"
import Link from "next/link";

export default function EmptyGoalsView() {
  return (
    <div className="flex flex-col border border-slate-300 px-4 py-6  bg-slate-100/50 rounded-xl shadow gap-3 items-center">
      <InboxIcon className="size-10 text-gray-800 lg:size-12" />
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl text-gray-800 lg:text-3xl">No goals yet</h1>
        <p className="text-sm font-light text-gray-600 lg:text-lg">Start creating a goal.</p>
      </div>
      <ArrowDown className="text-gray-400 size-6 lg:size-8" />
      <Button asChild variant="link" className="lg:text-lg">
        <Link href={"/dashboard/submit"}>
          New goal
        </Link>
      </Button>
    </div>
  );
}
