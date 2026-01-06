import { Suspense } from "react";
import GoalProvider from "../components/Goals/GoalProvider";
import GoalStatusGroup from "../components/Goals/GoalStatusGroup";
import Footer from "../components/Home/Footer";
import InfoCard from "../components/Home/InfoCard";
import InfoCardSkeleton from "../components/Skeletons/infoCardSkeleton";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 px-2">
      <Suspense fallback={<InfoCardSkeleton/>}>
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
