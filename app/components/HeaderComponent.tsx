import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { Suspense } from "react";

export default function HeaderComponent() {
  return (
    <header className="flex justify-between items-center px-2">
      <Image
        src="/logo.png"
        alt="goal tracker logo"
        width={100}
        height={100}
      ></Image>
      <Suspense>
        <div className="flex gap-2">
          <SignedOut>
            <SignInButton>
              <button type="button" className="bg-ceramic-white text-(--secondary) rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 border border-(--secondary) shadow-lg">
                Sing in
              </button>
            </SignInButton>
            <SignUpButton>
              <button type="button" className="bg-(--secondary) text-slate-100 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 shadow-lg">
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
