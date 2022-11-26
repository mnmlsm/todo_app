import React from "react";

import "./TaskFilter.css";

export default class TaskFilter extends React.Component {
  state = {
    selected: false,
  };

  handleItemClick = (event) => {};

  render() {
    return (
      <ul className="filters" onClick={this.handleItemClick}>
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}
