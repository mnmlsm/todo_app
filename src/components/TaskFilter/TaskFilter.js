import React from "react";

import "./TaskFilter.css";

export default class TaskFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const clazz = isActive ? "selected" : "";

      return (
        <button
          type="button"
          key={name}
          className={clazz}
          onClick={() => {
            onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return (
      <ul className="filters">
        <li>{buttons}</li>
      </ul>
    );
  }
}
