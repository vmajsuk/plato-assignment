import React, { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { fetchTasks, fetchUsers } from "./api";

function App() {
  const [userId, setUserId] = useState<number | undefined>();

  const users = useQuery("users", fetchUsers);

  const tasks = useQuery(["tasks", userId], () => fetchTasks({ userId }), {
    enabled: !!userId,
  });

  useEffect(() => {
    if (!userId && users.data?.length) setUserId(users.data[0].id);
  }, [userId, users.data]);

  return (
    <div>
      {users.isLoading && <div>Loading...</div>}
      {users.error && <div>Error: {JSON.stringify(users.error)}</div>}
      {users.data && (
        <div>
          {users.data.map((user) => (
            <div key={user.id} onClick={() => setUserId(user.id)}>
              {user.name}
            </div>
          ))}
        </div>
      )}
      ==== TASKS ====
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
}

export default App;
