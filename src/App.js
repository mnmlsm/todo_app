import React from "react";
import "./App.css";

import NewTaskForm from "./components/NewTaskForm";
import Main from "./components/Main";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NewTaskForm />
        <Main />
      </div>
    );
  }
}
