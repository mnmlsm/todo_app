import React from "react";

import "./TaskList.css";

import Task from "../Task/Task";

function TaskList(props) {
  const tasks = props.listTodos.map((taskName, index) => {
    return (
      <Task
        taskName={taskName}
        key={taskName[0]}
        status={props.taskStatusList[index]}
      />
    );
  });

  return <ul className="todo-list">{tasks}</ul>;
}

export default TaskList;
