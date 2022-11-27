import React from "react";

import TaskList from "../TaskList";
import Footer from "../Footer";

export default class Main extends React.Component {
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
