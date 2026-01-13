import Logo from "@/app/components/Home/Logo";
import SingInSkeleton from "@/app/components/Skeletons/singInSkeleton";
import { SignIn } from "@clerk/nextjs";
import { connection } from "next/server";
import { Suspense } from "react";

export default async function SignInComponent() {
  await connection()
  return (
    <section className="display flex flex-col justify-start h-screen items-center gap-8 py-20">
      <div className="flex flex-col gap-2 justify-center items-center border-b border-b-gray-800/15 pb-8 mx-10">
        <Logo grow />
        <span className="px-4 text-sm text-center text-foreground/70">
          Track your goals, build better habits, and make progress every day.
        </span>
      </div>
      <Suspense fallback={<SingInSkeleton />}>
        <SignIn />
      </Suspense>
    </section>
  );
}
