import React from "react";

import "./Task.css";

function Task({ taskName, status }) {
  return (
    <li className={status}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{taskName}</span>
          {/* <span className="created">created 5 minutes ago</span> */}
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      {status === "editing" && (
        <input type="text" className="edit" defaultValue={taskName}></input>
      )}
    </li>
  );
}

export default Task;
