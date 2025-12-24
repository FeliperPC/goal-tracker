import GoalViewControl from "./components/GoalViewControl";
import GoalStatusGroup from "./components/GoalStatusGroup";
import InfoCard from "./components/InfoCard";
import { Suspense } from "react";

export default async function Todo() {
  return (
    <div className="flex flex-col gap-4 px-2">
      <InfoCard />
      <Suspense fallback={<div>Loading goals overview...</div>}>
        <GoalStatusGroup />
      </Suspense>
      <GoalViewControl />
    </div>
  );
}
