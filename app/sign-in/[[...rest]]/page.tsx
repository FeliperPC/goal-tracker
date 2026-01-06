import Logo from "@/app/components/Home/Logo";
import { SignIn } from "@clerk/nextjs";

export default function SignInComponent() {
  return (
    <section className="display flex flex-col justify-start h-screen items-center gap-5 py-20">
      <div className="flex flex-col gap-2 justify-center items-center border-b border-b-gray-800/20 pb-5 mx-10">
        <Logo grow />
        <span className="px-4 text-sm text-center text-foreground/80">
          Track your goals, build better habits, and make progress every day.
        </span>
      </div>
      <SignIn fallback={<div>Loading login ...</div>}/>
    </section>
  );
}
