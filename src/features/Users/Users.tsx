import { Typography } from "@mui/material";
import React from "react";
import { RouteComponentProps as RCP } from "react-router-dom";

import { useActiveUserId, useTasks, useUsers } from "./hooks";
import { Layout, UsersList, Tasks } from "./components";

interface Params {
  userId?: string;
}

export const Users: React.FC<RCP<Params>> = () => {
  const users = useUsers();
  const firstUserId = users.data?.[0].id;
  const { activeUserId, setActiveUserId } = useActiveUserId(firstUserId);
  const { tasks, completeTask } = useTasks(activeUserId);

  return (
    <Layout
      title={
        <Typography variant="h3" align="center" children="Onboarding tracker" />
      }
      users={
        <UsersList
          users={users}
          activeUserId={activeUserId}
          setActiveUserId={setActiveUserId}
        />
      }
      tasks={<Tasks tasks={tasks} completeTask={completeTask} />}
    />
  );
};
