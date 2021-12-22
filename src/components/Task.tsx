import { makeStyles } from "@mui/styles";
import { Checkbox, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { cx } from "~/styles";

// Styles
const useStyles = makeStyles(() => ({
  task: {},
  completed: {
    textDecoration: "line-through",
  },
}));

// Types
interface CompletedTask {
  title: string;
  isCompleted: true;
}

interface TodoTask {
  title: string;
  isCompleted: false;
  onComplete: () => void;
}

type Props = CompletedTask | TodoTask;

// Implemetation
export const Task: React.FC<Props> = (props) => {
  const s = useStyles();

  return (
    <>
      {!props.isCompleted && (
        <ListItemIcon>
          <Checkbox
            disabled={props.isCompleted}
            checked={props.isCompleted}
            onChange={props.onComplete}
          />
        </ListItemIcon>
      )}

      <ListItemText
        className={cx(props.isCompleted && s.completed)}
        primary={props.title}
      />
    </>
  );
};

// Playground to verify that props work
// const Playground = () => (
//   <div>
//     <Task title="Test" isCompleted />
//     <Task title="Test" isCompleted={false} onComplete={console.log} />
//   </div>
// );
