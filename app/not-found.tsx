import Logo from "./components/Home/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 py-2 bg-primary/10 justify-center h-screen relative items-center">
      <div className="fixed w-full justify-center flex top-10">
        <Logo grow />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold mb-8 text-primary/60 text-shadow-2xs">404</h1>
        <div className="text-center">
          <h3 className="text-xl text-gray-800 font-semibold">
            Oops, This page Not Found !
          </h3>
          <p className="text-gray-500">The link might be corrupted</p>
        </div>
        <p className="text-sm font-light mt-2">
          or the page may have been removed
        </p>
      </div>
      <div className="text-center mt-8">
        <Button asChild>
          <Link href={"/dashboard"}>Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
