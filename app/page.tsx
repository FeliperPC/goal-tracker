import GoalViewControl from "./components/Goals/GoalViewControl";
import GoalStatusGroup from "./components/Goals/GoalStatusGroup";
import InfoCard from "./components/Home/InfoCard";
import { Suspense } from "react";
import Footer from "./components/Home/Footer";

export default async function Todo() {
  return (
    <div className="flex flex-col gap-4 px-2">
      <InfoCard />
      <Suspense fallback={<div>Loading goals overview...</div>}>
        <GoalStatusGroup />
      </Suspense>
      <GoalViewControl />
      <Footer />
    </div>
  );
}
