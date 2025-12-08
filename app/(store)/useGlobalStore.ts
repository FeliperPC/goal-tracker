"use client"

import { Goal, Status } from "@/types/types"
import { create } from "zustand"

interface GlobalState {
  goals: Goal[]
  updateTaskGoal: (goalId:number,taskId:number,status:Status) => void
  setGoals:(goal:Goal[])=>void
}

export const useGlobalStore = create<GlobalState>((set) => ({
  goals: [],
  updateTaskGoal: (goalId, taskId, status) =>
    set((state) => ({
      goals: state.goals.map((g) =>
        g.id !== goalId
          ? g
          : {
              ...g,
              tasks: g.tasks.map((t) =>
                t.id !== taskId ? t : { ...t, status }
              ),
            }
      ),
    })),
  setGoals: (goals:Goal[]) => set({ goals }),
}),
)
