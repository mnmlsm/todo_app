import React from 'react'
import PropTypes, { number } from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

import Timer from '../Timer'
import './Task.css'

export default class Task extends React.Component {
  state = {
    timerId: null,
  }

  static defaultProps = {
    taskName: '',
    onDeleted: () => {},
  }

  static propProps = {
    taskName: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    timeOfCreation: PropTypes.instanceOf(Date),
    timer: PropTypes.objectOf(number),
  }

  deleteTimer = (interval) => {
    this.setState({
      timerId: interval,
    })
  }

  render() {
    const { taskName, onDeleted, onToggleDone, done, timeOfCreation, timer } = this.props

    let itemStatus = ''

    if (done) {
      itemStatus = 'completed'
    }

    return (
      <li className={itemStatus}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />
          <label>
            <span className="title" onClick={onToggleDone}>
              {taskName}
            </span>
            <Timer timer={timer} onDeleteTask={this.deleteTimer} />
            <span className="created">created {formatDistanceToNow(timeOfCreation, { includeSeconds: true })} ago</span>
          </label>
          <button className="icon icon-edit" hidden={true} />
          <button
            className="icon icon-destroy"
            onClick={() => {
              onDeleted()
              clearInterval(this.state.timerId)
            }}
          />
        </div>
      </li>
    )
  }
}
