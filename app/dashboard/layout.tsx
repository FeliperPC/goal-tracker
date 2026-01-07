import { Suspense } from "react";
import HeaderComponent from "../components/Home/HeaderComponent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 py-2 bg-primary/10">
      <Suspense>
        <HeaderComponent />
        {children}
      </Suspense>
    </div>
  );
}
