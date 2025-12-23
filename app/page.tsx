import { Plus } from "lucide-react";
import { getGoals } from "./actions";
import GoalListViewControl from "./components/GoalListViewControl";
import GoalStatusGroup from "./components/GoalStatusGroup";
import InfoCard from "./components/InfoCard";


export default async function Todo(){
  const goals = await getGoals()
   if(!goals){
     throw new Error("Error fetching data");
   }
   return (
     <div className="flex flex-col gap-4">
       <InfoCard />
       <GoalStatusGroup goals={goals} />
       <GoalListViewControl />
       <button
         type="button"
         className="fixed bottom-0 right-0 mr-2 mb-4 rounded-[100%] bg-[var(--primary)] w-14 h-14 flex items-center justify-center text-[var(--dark)]">
         <Plus size={32}/>
       </button>
     </div>
   );
}