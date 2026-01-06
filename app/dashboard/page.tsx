import { Suspense } from "react";
import GoalProvider from "../components/Goals/GoalProvider";
import GoalStatusGroup from "../components/Goals/GoalStatusGroup";
import Footer from "../components/Home/Footer";
import InfoCard from "../components/Home/InfoCard";
import InfoCardSkeleton from "../components/Skeletons/infoCardSkeleton";
import GoalOverviewSkeleton from "../components/Skeletons/goalOverviewSkeleton";
import GoalSectionSkeleton from "../components/Skeletons/goalSectionSkeleton";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 px-2">
      <Suspense fallback={<InfoCardSkeleton/>}>
        <InfoCard />
      </Suspense>
      <Suspense fallback={<GoalOverviewSkeleton />}>
        <GoalStatusGroup />
      </Suspense>
      <Suspense fallback={<GoalSectionSkeleton />}>
        <GoalProvider />
      </Suspense>
      <Footer />
    </div>
  );
}
