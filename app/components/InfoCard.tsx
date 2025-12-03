import { Quote } from "@/types/types"
import { dateInfo } from "../utils/callendarInfo";

export default async function InfoCard() {
  const response = await fetch('https://zenquotes.io/api/today/',{
    cache:'no-store' // why ?
  })

  const data: Quote[] = await response.json()
  return (
    <div>
      <div className="px-6 py-8 w-full h-36 bg-[var(--secondary)] text-white flex flex-col justify-center rounded-2xl shadow-md gap-3">
        <p className="text-sm">{dateInfo.month}, {dateInfo.day} {dateInfo.year}</p>
        <div>
          <p className="text-lg font-semibold">{data[0].q}</p>
          <p className="text-sm text-end">{data[0].a}</p>
        </div>
      </div>
    </div>
  )
}