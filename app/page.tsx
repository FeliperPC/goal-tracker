import { Plus } from "lucide-react";
import { mock } from "./utils/mockData";
import InfoCard from "./components/InfoCard";
import GoalStatusGroup from "./components/GoalStatusGroup";
import TaskClient from "./components/TaskClient";
import HeaderComponent from "./components/HeaderComponent";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <HeaderComponent />
      <InfoCard />
      <GoalStatusGroup goals={mock} />
      <TaskClient goals={mock} />
      <button
        type="button"
        className="fixed bottom-0 right-0 mr-2 mb-4 rounded-[100%] bg-[var(--primary)] w-14 h-14 flex items-center justify-center text-[var(--dark)]">
        <Plus size={32}/>
      </button>
    </div>
  );
}
