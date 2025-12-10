"use client"

import { Goal, Status } from "@/types/types"
import { create } from "zustand"

interface GlobalState {
  goals: Goal[]
  setGoal:(goal:Goal)=>void
  setGoals:(goal:Goal[])=>void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  goals: [],
  setGoals: (goals:Goal[]) => set({ goals }),
  setGoal: (goal:Goal) =>
    set((state) => ({
      goals: state.goals.map((g) => (g.id === goal.id ? goal : g))
  }))
}),
)
