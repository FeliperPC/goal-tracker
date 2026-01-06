import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="fixed border bottom-0 left-0 z-50 w-full h-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-2 flex flex-col items-center justify-center gap-4 w-full h-full">
        <Button
          asChild
          className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground font-semibold text-md shadow-xl"
        >
          <Link href="dashboard/submit">
            <Plus className="size-5" />
            Add new goal
          </Link>
        </Button>
      </div>
    </div>
  );
}
