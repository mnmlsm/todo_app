import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

import TaskFilter from '../TaskFilter'

const Footer = ({ listTodos, onClearCompleted, onFilterChange, filter }) => {
  const leftTaskCount = listTodos.length - listTodos.filter((el) => el.done).length
  return (
    <footer className="footer">
      <span className="todo-count">{leftTaskCount} items left</span>
      <TaskFilter onFilterChange={onFilterChange} filter={filter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  listTodos: PropTypes.arrayOf(PropTypes.object),
  onClearCompleted: PropTypes.func,
  onFilterChange: PropTypes.func,
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
}

Footer.defaultProps = {
  onClearCompleted: () => {},
  onFilterChange: () => {},
  filter: 'all',
}
export default Footer
