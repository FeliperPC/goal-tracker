import { Quote } from "@/types/types"

export default async function PhrasesCard() {
  const response = await fetch('https://zenquotes.io/api/today/',{
    cache:'no-store' // why ?
  })

  const data: Quote[] = await response.json()
  return (
    <p>{data[0].q}</p>
  )
}