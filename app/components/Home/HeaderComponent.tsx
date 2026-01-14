"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <Link href={"/dashboard"}>
      <header className="flex justify-between items-center px-4 mt-2">
        <Logo grow />
        <Suspense
          fallback={
            <div>
              <LoaderIcon className="size-4 animate-spin" />
            </div>
          }
        >
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </Suspense>
      </header>
    </Link>
  );
}
