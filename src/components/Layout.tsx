import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    maxWidth: "80%",
    width: "100%",
  },
}));

export const Layout: React.FC = ({ children }) => {
  const s = useStyles();

  return (
    <div className={s.root}>
      <Paper className={s.content}>
        <Box px={2} py={6}>
          {children}
        </Box>
      </Paper>
    </div>
  );
};
