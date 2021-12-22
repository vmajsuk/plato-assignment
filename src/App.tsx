import React from "react";

import { useQuery } from "react-query";
import { fetchUsers } from "./api";

function App() {
  const { data, isLoading, error } = useQuery("users", fetchUsers);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
      {data && (
        <div>
          {data.map((user) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
