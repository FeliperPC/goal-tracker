export type Quote ={
  q: string,
  a: string,
  h:string,
}

export type Goal = {
    id: number,
    name: string,
    tasks?: Task[],
    description: string,
    status: string,
    createdAt: string
}

export type Task = {
  id: number;
  name: string;
  goalId: number;
  createdAt: Date;
  status: "TODO" | "DONE"
};

export type GoalsProgress = {
  inProgress : number;
  done: number;
  todo: number;
}