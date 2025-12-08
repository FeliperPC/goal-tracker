"use client"

import { useEffect } from "react"
import { useGlobalStore } from "@/app/(store)/useGlobalStore"
import { Goal } from "@/types/types"

export default function GlobalProvider({goals,children}:{goals:Goal[], children:React.ReactNode}){
  const setGoals = useGlobalStore((s:any)=>s.setGoals);

  useEffect(() => {
    setGoals(goals);
  }, [goals]);

  return <>{children}</>;
}