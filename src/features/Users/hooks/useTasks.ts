import { useQuery, useQueryClient } from "react-query";

import * as api from "~/api";

export function useTasks(userId?: number | undefined) {
  const key = ["tasks", userId];
  const queryClient = useQueryClient();
  const tasks = useQuery(key, () => api.fetchTasks({ userId }), {
    enabled: typeof userId === "number",
  });

  const completeTask = async (taskId: number) => {
    try {
      const data = queryClient.getQueryData<api.Task[]>(key) || [];
      await api.completeTask(taskId);
      queryClient.setQueryData(
        key,
        data.map((task) =>
          task.id !== taskId ? task : { ...task, completed: true }
        )
      );
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return { tasks, completeTask };
}
