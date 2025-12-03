import Image from "next/image";
import { Plus } from "lucide-react";
import { mock } from "./utils/mockData";
import GoalCard from "./components/GoalCard";
import InfoCard from "./components/InfoCard";
import GoalStatusGroup from "./components/GoalStatusGroup";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <header className="flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="goal tracker logo"
          width={100}
          height={100}
          fill={false}
          >
        </Image>
      </header>
      <InfoCard />
      <GoalStatusGroup goals={mock} />
      <div className="flex justify-between gap-4">
        <button type="button" className="w-full bg-[var(--primary)] py-2 rounded-2xl text-[var(--dark)]">To do</button>
        <button type="button" className="w-full bg-[var(--primary)] py-2 rounded-2xl text-[var(--dark)]">Done</button>
      </div>
      <div className="overflow-auto flex flex-col gap-3">
        {mock.map((goal)=>(
          goal.status=='TODO' && <GoalCard goal={goal} key={goal.id}/>
        ))}
      </div>
      <button
        type="button"
        className="fixed bottom-0 right-0 mr-2 mb-4 rounded-[100%] bg-[var(--primary)] w-14 h-14 flex items-center justify-center text-[var(--dark)]">
        <Plus size={32}/>
      </button>
    </div>
  );
}
