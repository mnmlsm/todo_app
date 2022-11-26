import React from "react";

import "./Task.css";

export default class Task extends React.Component {
  state = {
    done: false,
  };

  onTaskDoneClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done,
      };
    });
  };


  render() {
    const { taskName, onDeleted } = this.props;
    const { done } = this.state;

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
            onChange={this.onTaskDoneClick}
          />
          <label onClick={this.onTaskDoneClick}>
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
