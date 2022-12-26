import React from 'react'
import PropTypes from 'prop-types'

import './TaskFilter.css'
import Task from '../Task/Task'

const TaskFilter = ({ filter, onFilterChange }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ]

  const buttonsToShow = buttons.map(({ name, label }) => {
    const isActive = filter === name
    const clazz = isActive ? 'selected' : ''
    return (
      <button
        type="button"
        key={name}
        className={clazz}
        onClick={() => {
          onFilterChange(name)
        }}
      >
        {label}
      </button>
    )
  })

  return (
    <ul className="filters">
      <li>{buttonsToShow}</li>
    </ul>
  )
}

Task.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
  onFilterChange: PropTypes.func,
}

Task.defaultProps = {
  filter: 'all',
  onFilterChange: () => {},
}

export default TaskFilter
