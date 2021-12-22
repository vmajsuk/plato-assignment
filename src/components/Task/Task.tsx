import React from "react";
import s from "./Task.module.scss";

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

export const Task: React.FC<Props> = (props) => {
  if (props.isCompleted) {
    return <div className={s.completed}>{props.title}</div>;
  } else {
    return <div onClick={props.onComplete}>{props.title}</div>;
  }
};

// Playground to verify that props work
// const Playground = () => (
//   <div>
//     <Task title="Test" isCompleted />
//     <Task title="Test" isCompleted={false} onComplete={console.log} />
//   </div>
// );
