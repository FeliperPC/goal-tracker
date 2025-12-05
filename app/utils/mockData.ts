import { Goal } from "@/types/types";

export const mock: Goal[] = [
  {
    id: 1,
    name: "Improve my skills",
    description: "Enhance my overall technical abilities",
    status: "TODO",
    createdAt: "2025-01-01T10:00:00.000Z",
    tasks: [
      {
        id: 1,
        name: "Study design patterns",
        goalId: 1,
        createdAt: new Date("2025-01-01T12:00:00.000Z"),
        status: "TODO"
      },
      {
        id: 2,
        name: "Practice algorithms (LeetCode)",
        goalId: 1,
        createdAt: new Date("2025-01-01T14:00:00.000Z"),
        status: "DONE"
      }
    ]
  },
  {
    id: 2,
    name: "Read more books",
    description: "Read at least one book per month",
    status: "DONE",
    createdAt: "2025-01-02T10:00:00.000Z",
    tasks: [
      {
        id: 3,
        name: "Finish 'Clean Code'",
        goalId: 2,
        createdAt: new Date("2025-01-02T12:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 4,
        name: "Start 'Atomic Habits'",
        goalId: 2,
        createdAt: new Date("2025-01-02T15:00:00.000Z"),
        status: "TODO"
      }
    ]
  },
  {
    id: 3,
    name: "Exercise regularly",
    description: "Work out three times per week",
    status: "DONE",
    createdAt: "2025-01-03T10:00:00.000Z",
    tasks: [
      {
        id: 5,
        name: "Gym session: upper body",
        goalId: 3,
        createdAt: new Date("2025-01-03T11:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 6,
        name: "Run 5km",
        goalId: 3,
        createdAt: new Date("2025-01-03T16:00:00.000Z"),
        status: "TODO"
      }
    ]
  },
  {
    id: 4,
    name: "Save more money",
    description:
      "Build an emergency fund equivalent to three months of expenses",
    status: "TODO",
    createdAt: "2025-01-04T10:00:00.000Z",
    tasks: [
      {
        id: 7,
        name: "Reduce unnecessary expenses",
        goalId: 4,
        createdAt: new Date("2025-01-04T13:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 8,
        name: "Put R$300 into savings",
        goalId: 4,
        createdAt: new Date("2025-01-04T18:00:00.000Z"),
        status: "TODO"
      }
    ]
  },
  {
    id: 5,
    name: "Build a personal project",
    description: "Create and deploy a complete full-stack application",
    status: "TODO",
    createdAt: "2025-01-05T10:00:00.000Z",
    tasks: [
      {
        id: 9,
        name: "Plan system features",
        goalId: 5,
        createdAt: new Date("2025-01-05T11:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 10,
        name: "Build backend API",
        goalId: 5,
        createdAt: new Date("2025-01-05T15:00:00.000Z"),
        status: "TODO"
      },
      {
        id: 11,
        name: "Design UI in Figma",
        goalId: 5,
        createdAt: new Date("2025-01-05T17:00:00.000Z"),
        status: "TODO"
      }
    ]
  },
  {
    id: 6,
    name: "Improve my English",
    description: "Practice speaking, vocabulary and writing weekly",
    status: "TODO",
    createdAt: "2025-01-06T10:00:00.000Z",
    tasks: [
      {
        id: 12,
        name: "Watch an English lesson on YouTube",
        goalId: 6,
        createdAt: new Date("2025-01-06T11:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 13,
        name: "Practice speaking for 15 minutes",
        goalId: 6,
        createdAt: new Date("2025-01-06T14:00:00.000Z"),
        status: "TODO"
      }
    ]
  },
  {
    id: 7,
    name: "Wake up earlier",
    description: "Start waking up at 6 AM consistently",
    status: "DONE",
    createdAt: "2025-01-07T10:00:00.000Z",
    tasks: [
      {
        id: 14,
        name: "Wake up at 6 AM",
        goalId: 7,
        createdAt: new Date("2025-01-07T06:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 15,
        name: "Avoid phone before bed",
        goalId: 7,
        createdAt: new Date("2025-01-07T21:00:00.000Z"),
        status: "DONE"
      }
    ]
  },
  {
    id: 8,
    name: "Organize my schedule",
    description: "Maintain a structured weekly routine",
    status: "TODO",
    createdAt: "2025-01-08T10:00:00.000Z",
    tasks: [
      {
        id: 16,
        name: "Create weekly schedule",
        goalId: 8,
        createdAt: new Date("2025-01-08T12:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 17,
        name: "Review daily tasks",
        goalId: 8,
        createdAt: new Date("2025-01-08T18:00:00.000Z"),
        status: "TODO"
      }
    ]
  },
  {
    id: 9,
    name: "Grow my portfolio",
    description: "Add at least three new high-quality projects",
    status: "TODO",
    createdAt: "2025-01-09T10:00:00.000Z",
    tasks: [
      {
        id: 18,
        name: "Design portfolio layout",
        goalId: 9,
        createdAt: new Date("2025-01-09T11:00:00.000Z"),
        status: "TODO"
      },
      {
        id: 19,
        name: "Add project: Task Manager",
        goalId: 9,
        createdAt: new Date("2025-01-09T12:00:00.000Z"),
        status: "DONE"
      }
    ]
  },
  {
    id: 10,
    name: "Study every day",
    description: "Dedicate at least one hour per day to studying",
    status: "DONE",
    createdAt: "2025-01-10T10:00:00.000Z",
    tasks: [
      {
        id: 20,
        name: "Study JavaScript for 1h",
        goalId: 10,
        createdAt: new Date("2025-01-10T11:00:00.000Z"),
        status: "DONE"
      },
      {
        id: 21,
        name: "Review React concepts",
        goalId: 10,
        createdAt: new Date("2025-01-10T16:00:00.000Z"),
        status: "TODO"
      }
    ]
  }
];
