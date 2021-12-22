import { List, CircularProgress, ListItem } from "@mui/material";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { RouteComponentProps as RCP } from "react-router-dom";

import * as api from "~/api";

import { Task } from "./Task";

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

  if (tasks.isLoading) return <CircularProgress />;

  if (tasks.error || !tasks.data) return <div>Error view</div>;

  return (
    <List>
      {tasks.data.map((task) => (
        <ListItem key={task.id}>
          {task.completed ? (
            <Task isCompleted title={task.title} />
          ) : (
            <Task
              isCompleted={false}
              title={task.title}
              onComplete={() => onCompleteTask(task.id)}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};
