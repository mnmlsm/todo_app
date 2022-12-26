import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes, { string } from 'prop-types'

import Timer from '../Timer'
import './Task.css'

const Task = ({ taskName, onDeleted, onToggleDone, done, timeOfCreation, timer }) => {
  const [timerId, setTimerId] = useState(null)

  const deleteTimer = (interval) => {
    setTimerId(interval)
  }

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
          <Timer timer={timer} onDeleteTask={deleteTimer} />
          <span className="created">created {formatDistanceToNow(timeOfCreation, { includeSeconds: true })} ago</span>
        </label>
        <button className="icon icon-edit" hidden={true} />
        <button
          className="icon icon-destroy"
          onClick={() => {
            onDeleted()
            clearInterval(timerId)
          }}
        />
      </div>
    </li>
  )
}

Task.propTypes = {
  taskName: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
  timeOfCreation: PropTypes.instanceOf(Date),
  timer: PropTypes.objectOf(string),
}

Task.defaultProps = {
  taskName: '',
  onDeleted: () => {},
  onToggleDone: () => {},
  done: false,
  timeOfCreation: new Date(),
  timer: {},
}
export default Task
