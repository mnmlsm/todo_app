import React from "react";

import TaskList from "../TaskList";
import Footer from "../Footer";

export default class Main extends React.Component {

  state = {
    todoData: [
      { label: "What to do task 1", id: 0 },
      { label: "What to do task 2", id: 1 },
      { label: "What to do task 3", id: 2 },
      { label: "What to do task 4", id: 3 },
      { label: "What to do task 5", id: 4 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newData,
      };
    });
  };

  render() {
    let { todoData, deleteItem } = this.state;

    return (
      <section className="main">
        <TaskList listTodos={todoData} onDeleted={deleteItem} />
        <Footer  />
      </section>
    );
  }
}
