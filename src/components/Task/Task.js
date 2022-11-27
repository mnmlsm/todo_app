import React from "react";

import "./Task.css";

export default class Task extends React.Component {
  render() {
    const { taskName, onDeleted, onToggleDone, done } = this.props;

    let itemStatus = "";

    if (done) {
      itemStatus = "completed";
    } 

    return (
      <li className={itemStatus}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={onToggleDone}
          />
          <label onClick={onToggleDone}>
            <span className="description">{taskName}</span>
            {/* <span className="created">created 5 minutes ago</span> */}
          </label>
          <button
            className="icon icon-edit"
            hidden={done}
          ></button>
          <button
            className="icon icon-destroy"
            onClick={() => {
              onDeleted();
            }}
          ></button>
        </div>
        {/* {edit && (
          <input type="text" className="edit" defaultValue={taskName}></input>
        )} */}
      </li>
    );
  }
}
