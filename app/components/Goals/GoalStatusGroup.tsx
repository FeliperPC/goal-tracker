import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAuthenticatedUserGoals } from "@/lib/goal/goal-select";
import { Goal } from "@/types/types";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function GoalStatusGroup() {
  const goals = await getAuthenticatedUserGoals();
  const goalStatus = {
    done: 0,
    todo: 0,
  };
  goals.forEach((goal: Goal) => {
    if (goal.status == "DONE") {
      goalStatus["done"]++;
      return;
    }
    goalStatus["todo"]++;
  });
  return (
    <div className="flex gap-2 items-center w-full">
      <div className="text-sm flex gap-2 bg-slate-100 py-2 px-3 justify-between rounded-xl items-center border border-gray-300/80 flex-3">
        <p className="font-semibold lg:text-lg">Goals Overview</p>
        <div className="flex gap-2">
          <Badge className="w-20 lg:text-lg lg:w-30">
            {goalStatus.todo} to do
          </Badge>
          <Badge className="w-20 lg:text-lg lg:w-30" variant="outline">
            {goalStatus.done} done
          </Badge>
        </div>
      </div>
      <Button variant={"secondary"}
        asChild
        className="hidden lg:flex h-12 gap-2 flex-1 text-primary shadow-primary/60 shadow-sm"
      >
        <Link href="dashboard/submit">
          <Plus className="size-6" />
          <span className="text-xl font-semibold">Add new goal</span>
        </Link>
      </Button>
    </div>
  );
}
