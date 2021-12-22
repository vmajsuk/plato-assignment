import React from "react";
import { useQuery } from "react-query";
import { RouteComponentProps as RCP } from "react-router-dom";
import { fetchTasks } from "~/api";

interface TasksParams {
  userId: string;
}

export const Tasks: React.FC<RCP<TasksParams>> = ({
  match: {
    params: { userId },
  },
}) => {
  const tasks = useQuery(["tasks", userId], () => fetchTasks({ userId }));

  return (
    <div>
      {tasks.isLoading && <div>Loading...</div>}
      {tasks.error && <div>Error: {JSON.stringify(tasks.error)}</div>}
      {tasks.data && (
        <div>
          {tasks.data.map((task) => (
            <div key={task.id}>{task.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
