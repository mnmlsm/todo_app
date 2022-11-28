import React from "react";
import PropTypes from "prop-types";
import "./TaskList.css";

import Task from "../Task/Task";

export default class TaskList extends React.Component {
  static defaultProps = {
    listTodos: [],
    onDeleted: () => {},
    onToggleDone: () => {},
  };

  static propTypes = {
    listTodos: PropTypes.arrayOf(PropTypes.object),
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
  };

  render() {
    const { listTodos, onDeleted, onToggleDone } = this.props;
    const tasks = listTodos.map((task) => {
      return (
        <Task
          taskName={task.label}
          timeOfCreation={task.timeOfCreation}
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
