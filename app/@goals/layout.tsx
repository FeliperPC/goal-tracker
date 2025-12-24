import { Suspense } from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div className="px-2">{children}</div>
    </Suspense>
  );
}
