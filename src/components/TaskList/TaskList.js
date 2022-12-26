import React from 'react'
import PropTypes from 'prop-types'
import './TaskList.css'

import Task from '../Task/Task'

const TaskList = ({ listTodos, onDeleted, onToggleDone, timer }) => {
  const tasks = listTodos.map((task) => (
    <Task
      taskName={task.label}
      timeOfCreation={task.timeOfCreation}
      key={task.id}
      onDeleted={() => {
        onDeleted(task.id)
      }}
      onToggleDone={() => {
        onToggleDone(task.id)
      }}
      done={task.done}
      timer={timer}
    />
  ))

  return <ul className="todo-list">{tasks}</ul>
}

TaskList.propTypes = {
  listTodos: PropTypes.arrayOf(PropTypes.object),
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
}

TaskList.defaultProps = {
  listTodos: [],
  onDeleted: () => {},
  onToggleDone: () => {},
}

export default TaskList
