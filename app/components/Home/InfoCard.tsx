import { Quote } from "@/types/types";
import { dateInfo } from "../../utils/callendarInfo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function InfoCard() {
  await new Promise(resolve=>setTimeout(resolve,5000));
  const user = await currentUser();
  const response = await fetch("https://zenquotes.io/api/today/", {
    cache: "force-cache",
  });

  const data: Quote[] = await response.json();
  return (
    <section>
      <Card className="bg-primary shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Hi {user?.firstName} !</CardTitle>
          <CardDescription className="text-slate-300">
            Here's an inspiration for today
          </CardDescription>
          <CardAction className="text-sm text-slate-300">
            {dateInfo.month}, {dateInfo.day} {dateInfo.year}
          </CardAction>
        </CardHeader>
        <CardContent className="italic font-semibold text-white">
          <p>{data[0].q}</p>
          <p className="text-slate-300 text-sm">by {data[0].a}</p>
        </CardContent>
      </Card>
    </section>
  );
}
