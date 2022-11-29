import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

import TaskFilter from '../TaskFilter/TaskFilter'

export default class Footer extends React.Component {
  static defaultProps = {
    listTodos: [],
    onClearCompleted: () => {},
    onFilterChange: () => {},
    filter: 'all',
  }

  static propTypes = {
    listTodos: PropTypes.arrayOf(PropTypes.object),
    onClearCompleted: PropTypes.func,
    onFilterChange: PropTypes.func,
    filter: PropTypes.oneOf(['all', 'active', 'completed']),
  }

  render() {
    const { listTodos, onClearCompleted, onFilterChange, filter } = this.props

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
}
