import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Check } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

export default function HeaderComponent() {
  return (
    <header className="flex justify-between items-center px-4 mt-2">
      <div className="flex items-center gap-1">
        <Check className="mb-1 size-6 bg-primary rounded-md p-1 text-white" />
        <div>
          <span className="font-extrabold text-foreground text-xl">Goal</span>
          <span className="text-sm ml-1">TRACKER</span>
        </div>
      </div>
      <Suspense>
        <div className="flex gap-1">
          <SignedOut>
            <SignInButton>
              <button
                type="button"
                className="bg-ceramic-white text-primary rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 border border-primary/50"
              >
                Sing in
              </button>
            </SignInButton>
            <SignUpButton>
              <button
                type="button"
                className="bg-primary text-slate-100 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              >
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Suspense>
    </header>
  );
}
