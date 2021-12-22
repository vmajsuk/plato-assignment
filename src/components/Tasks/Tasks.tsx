import React from "react";
import { useQuery } from "react-query";
import { RouteComponentProps as RCP } from "react-router-dom";

import { fetchTasks } from "~/api";

import { Task } from "../Task";

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
          {tasks.data.map((task) =>
            task.completed ? (
              <Task isCompleted key={task.id} title={task.title} />
            ) : (
              <Task
                key={task.id}
                isCompleted={false}
                title={task.title}
                onComplete={console.log}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};
