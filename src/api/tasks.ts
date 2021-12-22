import { client, wait } from "./base";

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

export async function completeTask(_taskId: number) {
  await wait(300);

  if (Math.random() > 0.3) {
    return { success: true };
  } else {
    throw new Error("Emulated request from network");
  }
}
