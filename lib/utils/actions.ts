"use server";
export default async function getDailyQuote() {
  const response = await fetch("https://zenquotes.io/api/today/", {
    next: { revalidate: 86400 },
  });
  return await response.json();
}
