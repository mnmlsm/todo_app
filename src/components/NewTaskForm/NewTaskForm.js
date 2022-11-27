import React from "react";

import "./NewTaskForm.css";
export default class NewTaskForm extends React.Component {
  render() {
    const { onLabelChange, onSubmit, currentLabel } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <form
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(event) => {
              onLabelChange(event.target.value);
            }}
            value={currentLabel}
          ></input>
        </form>
      </header>
    );
  }
}
