"use server";
import { Quote } from "@/types/types";
import { dateInfo } from "../../utils/callendarInfo";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import getDailyQuote from "@/lib/utils/actions";

export default async function InfoCard() {
  const user = await currentUser();
  const data: Quote[] = await getDailyQuote();
  return (
    <section>
      <Card className="bg-primary shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">Hi {user?.firstName} !</CardTitle>
          <CardDescription className="text-slate-300">
            Here&apos;s an inspiration for today
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
