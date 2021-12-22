import {
  List,
  CircularProgress,
  ListItemButton,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import React from "react";
import {
  useHistory,
  useLocation,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useQuery } from "react-query";
import * as api from "~/api";
import { Tasks } from "./Tasks";
import { Box } from "@mui/system";

export const Users: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const users = useQuery("users", api.fetchUsers);

  if (users.isLoading) return <CircularProgress />;

  if (users.error || !users.data) return <div>Error view</div>;

  return (
    <>
      <Box mb={2}>
        <Typography variant="h3" align="center" children="Onboarding tracker" />
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <List>
            {users.data.map((user) => (
              <ListItemButton
                key={user.id}
                selected={location.pathname === `/users/${user.id}`}
                onClick={() => history.push(`/users/${user.id}`)}
              >
                <ListItemText primary={user.name} />
              </ListItemButton>
            ))}
          </List>
        </Grid>

        <Grid item xs={6}>
          <Switch>
            <Route path="/users/:userId" component={Tasks} />
            {users.data?.[0].id && (
              <Redirect to={`/users/${users.data?.[0].id}`} />
            )}
          </Switch>
        </Grid>
      </Grid>
    </>
  );
};
