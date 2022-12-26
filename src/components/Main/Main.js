import React from 'react'
import PropTypes from 'prop-types'

import TaskList from '../TaskList'
import Footer from '../Footer'

const Main = ({
  todoData,
  itemsToBeDone,
  deleteItem,
  onToggleDone,
  onClearCompleted,
  onFilterChange,
  filter,
  timer,
}) => {
  return (
    <section className="main">
      <TaskList listTodos={todoData} onDeleted={deleteItem} onToggleDone={onToggleDone} timer={timer} />
      <Footer
        listTodos={itemsToBeDone}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
        filter={filter}
      />
    </section>
  )
}

Main.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object),
  itemsToBeDone: PropTypes.arrayOf(PropTypes.object),
  deleteItem: PropTypes.func,
  onToggleDone: PropTypes.func,
  onClearCompleted: PropTypes.func,
  onFilterChange: PropTypes.func,
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
}

Main.defaultProps = {
  todoData: [],
  itemsToBeDone: [],
  deleteItem: () => {},
  onToggleDone: () => {},
  onClearCompleted: () => {},
  onFilterChange: () => {},
  filter: 'all',
}

export default Main
