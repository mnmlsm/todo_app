import React from "react";

import TaskList from "../TaskList";
import Footer from "../Footer";

const todoData = ["Completed task", "Editing task", "Active task"];
const statusList = ["completed", "editing", ""];

function Main() {
  return (
    <section className="main">
      <TaskList listTodos={todoData} taskStatusList={statusList} />
      <Footer />
    </section>
  );
}
export default Main;
