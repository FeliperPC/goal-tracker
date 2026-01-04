import GoalStatusGroup from "./components/Goals/GoalStatusGroup";
import InfoCard from "./components/Home/InfoCard";
import { Suspense } from "react";
import Footer from "./components/Home/Footer";
import GoalProvider from "./components/Goals/GoalProvider";

export default async function Todo() {
  return (
    <div className="flex flex-col gap-4 px-2">
      <Suspense fallback={<div>Loading info card...</div>}>
        <InfoCard />
      </Suspense>
      <Suspense fallback={<div>Loading goals overview...</div>}>
        <GoalStatusGroup />
      </Suspense>
      <Suspense fallback={<div>Loading goals...</div>}>
        <GoalProvider />
      </Suspense>
      <Footer />
    </div>
  );
}
