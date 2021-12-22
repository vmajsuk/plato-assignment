import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { RouteComponentProps as RCP } from "react-router-dom";

import * as api from "~/api";

import { Task } from "../Task";

interface TasksParams {
  userId: string;
}

export const Tasks: React.FC<RCP<TasksParams>> = ({
  match: {
    params: { userId },
  },
}) => {
  const key = ["tasks", userId];
  const tasks = useQuery(key, () => api.fetchTasks({ userId }));
  const queryClient = useQueryClient();

  const onCompleteTask = async (taskId: number) => {
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

  return (
    <div>
      {tasks.isLoading && <div>Loading...</div>}
      {tasks.error && <div>Error: {JSON.stringify(tasks.error)}</div>}
      {tasks.data && (
        <div>
          {tasks.data.map((task) =>
            task.completed ? (
              <Task isCompleted key={task.id} title={task.title} />
            ) : (
              <Task
                key={task.id}
                isCompleted={false}
                title={task.title}
                onComplete={() => onCompleteTask(task.id)}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};
