"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GoalListViewControl() {
  const pathname = usePathname();
  const currentFilter = pathname.split("/").pop();

  return (
    <div className="flex justify-between gap-4">
      <Link
        className={`text-center ${currentFilter === "" ? `btn-primary` : `btn-not-active`}`}
        href={"/"}
      >
        <span>To do</span>
      </Link>
      <Link
        className={`text-center ${currentFilter === "done" ? `btn-primary` : `btn-not-active`}`}
        href={"/done"}
      >
        Done
      </Link>
    </div>
  );
}
