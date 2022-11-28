import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  static defaultProps = {};

  static propProps = {
    taskName: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    timeOfCreation: PropTypes.instanceOf(Date),
  };

  render() {
    const { taskName, onDeleted, onToggleDone, done, timeOfCreation } = this.props;

    let itemStatus = '';

    if (done) {
      itemStatus = 'completed';
    }

    return (
      <li className={itemStatus}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
          <label onClick={onToggleDone}>
            <span className="description">{taskName}</span>
            <span className="created">created {formatDistanceToNow(timeOfCreation, { includeSeconds: true })} ago</span>
          </label>
          <button className="icon icon-edit" hidden={done}></button>
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
