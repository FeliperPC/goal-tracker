import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function Logo({grow}:{grow?:boolean}){
  return(
    <div className="flex items-center gap-2">
        <Check className="mb-1 bg-primary rounded p-1 text-white shadow-md" />
        <div>
          <span className={cn("font-extrabold text-foreground", grow ? "text-2xl lg:text-3xl" : "text-xl")}>Goal</span>
          <span className={cn("ml-1", grow ? "text-md lg:text-2xl" : "text-sm")}>TRACKER</span>
        </div>
      </div>
  )
}