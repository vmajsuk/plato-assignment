import { client } from "./base";

export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskParams {
  userId?: string;
}

export async function fetchTasks(params?: TaskParams) {
  const rsp = await client.get<Task[]>("/todos", { params });

  return rsp.data;
}
