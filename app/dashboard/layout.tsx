import { Suspense } from "react";
import HeaderComponent from "../components/Home/HeaderComponent";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 py-2">
      <Suspense>
        <HeaderComponent />
        {children}
        <Toaster duration={5000} richColors />
      </Suspense>
    </div>
  );
}
