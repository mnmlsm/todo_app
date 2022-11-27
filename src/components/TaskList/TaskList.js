import React from "react";

import "./TaskList.css";

import Task from "../Task/Task";

export default class TaskList extends React.Component {
  render() {
    const { listTodos, onDeleted, onToggleDone } = this.props;
    const tasks = listTodos.map((task) => {
      return (
        <Task
          taskName={task.label}
          key={task.id}
          onDeleted={() => {
            onDeleted(task.id);
          }}
          onToggleDone={() => {
            onToggleDone(task.id);
          }}
          done={task.done}
        />
      );
    });
    return <ul className="todo-list">{tasks}</ul>;
  }
}
