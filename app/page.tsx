import PhrasesCard from "./components/PhrasesCard";
import StatusCard from "./components/StatusCard";

export default function Home() {
  return (
    <div>
      <header>
        <h1>Goal Tracker logo</h1>
      </header>
      <PhrasesCard />
      <div>
        <StatusCard>To do</StatusCard>
        <StatusCard>Done</StatusCard>
      </div>
    </div>
  );
}
