"use client";
import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";
import Logo from "./Logo";

export default function HeaderComponent() {
  return (
    <header className="flex justify-between items-center px-4 mt-2">
      <Logo />
      <Suspense
        fallback={
          <div>
            <LoaderIcon className="size-4 animate-spin" />
          </div>
        }
      >
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Suspense>
    </header>
  );
}
