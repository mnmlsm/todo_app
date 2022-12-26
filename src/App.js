import React, { useState } from 'react'
import './App.css'

import NewTaskForm from './components/NewTaskForm'
import Main from './components/Main'

const App = (props) => {
  const [todoData, setTodoData] = useState([])
  const [filter, setFilter] = useState('all')
  const [label, setLabel] = useState('')
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 })

  const createTodoItem = (label, timeOfCreation) => {
    return {
      label,
      id: label + timeOfCreation,
      done: false,
      timeOfCreation,
    }
  }

  const deleteItem = (id) => {
    setTodoData((oldTodoData) => {
      const idx = oldTodoData.findIndex((el) => el.id === id)
      return [...oldTodoData.slice(0, idx), ...oldTodoData.slice(idx + 1)]
    })
  }

  const addItem = (label) => {
    setTodoData((oldTodoData) => {
      const newItemToAdd = createTodoItem(label, new Date())
      return [newItemToAdd, ...oldTodoData]
    })
  }

  const onToggleDone = (id) => {
    setTodoData((oldTodoData) => {
      const idx = oldTodoData.findIndex((el) => el.id === id)
      const oldItem = oldTodoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }
      return [...oldTodoData.slice(0, idx), newItem, ...oldTodoData.slice(idx + 1)]
    })
  }

  const deleteCompletedTasks = () => {
    setTodoData((oldTodoData) => {
      return oldTodoData.filter((el) => !el.done)
    })
  }

  const onLabelChange = (label) => {
    setLabel(label)
  }

  const onSubmit = (e, minutes, seconds) => {
    e.preventDefault()
    if (label !== '') {
      addItem(label)
      setLabel('')
      setTimer({
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds,
      })
    }
  }

  const filterToShow = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'completed':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  const onFilterChange = (filter) => {
    setFilter(filter)
  }

  const visibleItems = filterToShow(todoData, filter)
  return (
    <div className="app">
      <NewTaskForm onLabelChange={onLabelChange} onSubmit={onSubmit} currentLabel={label} />
      <Main
        todoData={visibleItems}
        itemsToBeDone={todoData}
        deleteItem={deleteItem}
        onToggleDone={onToggleDone}
        onClearCompleted={deleteCompletedTasks}
        onFilterChange={onFilterChange}
        filter={filter}
        timer={timer}
      />
    </div>
  )
}
export default App
