import { ListItem } from "@mui/material";

import * as api from "~/api";
import { List } from "~/components";

import { Task } from "./Task";

interface Props {
  tasks: QueryResult<api.Task[]>;
  completeTask: (taskId: number) => Promise<void>;
}

export const Tasks = ({ tasks, completeTask }: Props) => {
  // TODO: handle loading, error states
  if (tasks.isLoading || tasks.error || !tasks.data) return null;

  return (
    <List title="Tasks List">
      {tasks.data.map((task) => (
        <ListItem key={task.id}>
          {task.completed ? (
            <Task isCompleted title={task.title} />
          ) : (
            <Task
              isCompleted={false}
              title={task.title}
              onComplete={() => completeTask(task.id)}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};
