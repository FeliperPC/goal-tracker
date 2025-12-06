export type Quote ={
  q: string,
  a: string,
  h:string,
}

export type Goal = {
    id: number,
    name: string,
    tasks: Task[],
    description: string,
    status: Status,
    createdAt: Date
}

export type Status = "TODO" | "DONE";

export type Task = {
  id: number;
  name: string;
  goalId: number;
  createdAt: Date;
  status: Status
};

export type GoalsProgress = {
  inProgress : number;
  done: number;
  todo: number;
}