"use client"

import { Goal } from "@/types/types"
import { create } from "zustand"

interface GlobalState {
  goals: Goal[]
  setGoals: (goals: Goal[]) => void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  goals: [],
  setGoals: (goals) => set({ goals }),
}))
