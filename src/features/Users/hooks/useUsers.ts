import { useQuery } from "react-query";

import * as api from "~/api";

export function useUsers() {
  const users = useQuery("users", api.fetchUsers);
  return users;
}
