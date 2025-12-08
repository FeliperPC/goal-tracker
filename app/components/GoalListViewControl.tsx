"use client";

import { useRouter, usePathname } from "next/navigation";

export default function GoalListViewControl() {
  const router = useRouter();
  const pathname = usePathname();

  const currentFilter = pathname.split("/").pop();

  function navigate(filter: "todo" | "done") {
    router.push(`/${filter}`);
  }

  return (
    <div className="flex justify-between gap-4">
      <button
        type="button"
        className={currentFilter === "todo" ? `btn-primary` : `btn-not-active`}
        onClick={() => navigate("todo")}
      >
        To do
      </button>

      <button
        type="button"
        className={currentFilter === "done" ? `btn-primary` : `btn-not-active`}
        onClick={() => navigate("done")}
      >
        Done
      </button>
    </div>
  );
}
