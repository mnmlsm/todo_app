import React from "react";

import "./Footer.css";

import TaskFilter from "../TaskFilter/TaskFilter";

export default class Footer extends React.Component {
  render() {
    const { listTodos, onClearCompleted, onFilterChange, filter } = this.props;

    const leftTaskCount =
      listTodos.length - listTodos.filter((el) => el.done).length;

    return (
      <footer className="footer">
        <span className="todo-count">{leftTaskCount} items left</span>
        <TaskFilter onFilterChange={onFilterChange} filter={filter} />
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      </footer>
    );
  }
}
