import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import React from "react";

interface Props {
  title: React.ReactNode;
  users: React.ReactNode;
  tasks: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title, users, tasks }) => (
  <>
    <Box mb={2}>{title}</Box>

    <Grid container spacing={2}>
      <Grid item xs={6}>
        {users}
      </Grid>

      <Grid item xs={6}>
        {tasks}
      </Grid>
    </Grid>
  </>
);
