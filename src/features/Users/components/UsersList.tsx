import { ListItemButton, ListItemText } from "@mui/material";

import { User } from "~/api";
import { List } from "~/components";

interface Props {
  activeUserId?: number;
  setActiveUserId: (nextId: number) => void;
  users: QueryResult<User[]>;
}

export const UsersList: React.FC<Props> = ({
  users,
  activeUserId,
  setActiveUserId,
}) => {
  // TODO: handle loading, error states
  if (users.isLoading || users.error || !users.data) return null;

  return (
    <List title="Users">
      {users.data?.map((user) => (
        <ListItemButton
          key={user.id}
          selected={activeUserId === user.id}
          onClick={() => setActiveUserId(user.id)}
        >
          <ListItemText primary={user.name} />
        </ListItemButton>
      ))}
    </List>
  );
};
