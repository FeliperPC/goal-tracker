# Goal Tracker

A full-stack goal management application built with Next.js 16. Create goals, break them into tasks, and track your progress with an intuitive dashboard.

## Features

- **Authentication** -- User sign-in/sign-up powered by Clerk
- **Goal Management** -- Create, edit, delete, and mark goals as done
- **Task Tracking** -- Break goals into tasks with individual TODO/DONE status
- **Progress Bar** -- Visual progress indicator per goal based on completed tasks
- **Daily Inspiration** -- Displays a daily motivational quote from ZenQuotes API
- **Goals Overview** -- Summary badges showing how many goals are to-do vs. done
- **Responsive Design** -- Mobile-first layout with desktop enhancements
- **Animations** -- Smooth transitions using Framer Motion

## Tech Stack

| Layer        | Technology                            |
| ------------ | ------------------------------------- |
| Framework    | Next.js 16 (App Router, React 19)    |
| Language     | TypeScript                            |
| Database     | PostgreSQL                            |
| ORM          | Prisma 7                              |
| Auth         | Clerk                                 |
| Styling      | Tailwind CSS 4                        |
| UI Components| Radix UI + shadcn/ui                  |
| Animations   | Framer Motion                         |
| Validation   | Zod 4                                 |
| State        | Zustand                               |
| Notifications| Sonner (toast)                        |

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account (for authentication keys)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/<your-username>/goal-tracker.git
cd goal-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables -- create a `.env` file in the root:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/goal_tracker"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
```

4. Generate the Prisma client and apply migrations:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
goal-tracker/
├── app/
│   ├── (core)/schemas/      # Zod validation schemas
│   ├── components/          # UI components (Goals, Tasks, Home, Skeletons)
│   ├── dashboard/           # Dashboard pages (main view + goal submit form)
│   ├── sign-in/             # Clerk sign-in page
│   └── utils/               # Helper utilities
├── components/ui/           # shadcn/ui primitives
├── lib/
│   ├── goal/                # Goal server actions & queries
│   ├── task/                # Task server actions & queries
│   └── prisma.ts            # Prisma client singleton
├── prisma/
│   └── schema.prisma        # Database schema
└── types/                   # Shared TypeScript types
```

## Database Schema

The app uses two main models:

- **Goal** -- has a name, description, status (TODO/DONE), and belongs to a user
- **Task** -- belongs to a goal, has a name and status (TODO/DONE); deleted in cascade with its goal

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start development server             |
| `npm run build`   | Generate Prisma client & build       |
| `npm run start`   | Start production server              |
| `npm run lint`    | Run ESLint                           |
