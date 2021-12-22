import React from "react";
import { useQuery } from "react-query";

import { fetchUsers } from "./api";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { Tasks } from "./components/Tasks";

function App() {
  const users = useQuery("users", fetchUsers);
  const history = useHistory();

  return (
    <div>
      {users.isLoading && <div>Loading...</div>}
      {users.error && <div>Error: {JSON.stringify(users.error)}</div>}
      {users.data && (
        <div>
          {users.data.map((user) => (
            <div
              key={user.id}
              onClick={() => history.push(`/users/${user.id}`)}
            >
              {user.name}
            </div>
          ))}
        </div>
      )}
      <Switch>
        <Route path="/users/:userId" component={Tasks} />
        {users.data?.[0].id && <Redirect to={`/users/${users.data?.[0].id}`} />}
      </Switch>
    </div>
  );
}

export default App;
