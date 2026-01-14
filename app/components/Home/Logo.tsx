import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

export default function Logo({grow}:{grow?:boolean}){
  return(
    <div className="flex items-center gap-2">
        <CircleCheck className="shadow-md rounded-full text-primary" />
        <div>
          <span className={cn("font-extrabold text-foreground", grow ? "text-2xl lg:text-3xl" : "text-xl")}>Goal</span>
          <span className={cn("ml-1", grow ? "text-md lg:text-2xl" : "text-sm")}>TRACKER</span>
        </div>
      </div>
  )
}