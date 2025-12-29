import { Sparkles } from "lucide-react";

export default function SubmitPage() {
  const goalMotivations = [
    "Every great goal starts with a single step.",
    "Small actions, taken consistently, lead to big results.",
    "Don’t wait for the perfect moment. Start now.",
    "Defining a goal is the first step toward becoming who you want to be.",
    "Turn intention into action. Name your goal.",
    "Written goals are far more likely to be achieved.",
  ];
  return (
    <div className="px-2">
      <header className="flex gap-2 flex-col">
        <div className="text-xl font-semibold text-(--secondary) flex items-center gap-2">
          <Sparkles className="size-5" />
          Create goal
        </div>
        <p className="italic ml-7 text-gray-800">
          {goalMotivations[Math.floor(Math.random() * goalMotivations.length)]}
        </p>
      </header>
    </div>
  );
}
