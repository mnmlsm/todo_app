import React from "react";
import PropTypes from "prop-types";

import TaskList from "../TaskList";
import Footer from "../Footer";
export default class Main extends React.Component {
  static defaultProps = {
    todoData: [],
    itemsToBeDone: [],
    deleteItem: () => {},
    onToggleDone: () => {},
    onClearCompleted: () => {},
    onFilterChange: () => {},
    filter: "all",
  };

  static propTypes = {
    todoData: PropTypes.arrayOf(PropTypes.object),
    itemsToBeDone: PropTypes.arrayOf(PropTypes.object),
    deleteItem: PropTypes.func,
    onToggleDone: PropTypes.func,
    onClearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
    filter: PropTypes.oneOf(["all", "active", "completed"]),
  };

  render() {
    let {
      todoData,
      itemsToBeDone,
      deleteItem,
      onToggleDone,
      onClearCompleted,
      onFilterChange,
      filter,
    } = this.props;

    return (
      <section className="main">
        <TaskList
          listTodos={todoData}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
        />
        <Footer
          listTodos={itemsToBeDone}
          onClearCompleted={onClearCompleted}
          onFilterChange={onFilterChange}
          filter={filter}
        />
      </section>
    );
  }
}
