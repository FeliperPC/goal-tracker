import { Suspense } from "react";
import HeaderComponent from "../components/Home/HeaderComponent";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 py-2 lg:px-20 lg:py-10">
      <Suspense>
        <HeaderComponent />
        {children}
        <Toaster duration={5000} richColors />
      </Suspense>
    </div>
  );
}
