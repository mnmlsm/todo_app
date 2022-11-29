import React from 'react'
import './App.css'

import NewTaskForm from './components/NewTaskForm'
import Main from './components/Main'

export default class App extends React.Component {
  maxId = 0

  state = {
    todoData: [],
    filter: 'all',
    label: '',
  }

  createTodoItem(label, timeOfCreation) {
    return {
      label,
      id: this.maxId++,
      done: false,
      timeOfCreation,
    }
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newData,
      }
    })
  }

  addItem = (label) => {
    this.setState(({ todoData }) => {
      const newItemToAdd = this.createTodoItem(label, new Date())
      const newDataToAdd = [newItemToAdd, ...todoData]

      return {
        todoData: newDataToAdd,
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx]
      const newItem = { ...oldItem, done: !oldItem.done }

      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ]

      return {
        todoData: newData,
      }
    })
  }

  deleteCompletedTasks = () => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((el) => !el.done)
      return {
        todoData: newData,
      }
    })
  }

  onLabelChange = (label) => {
    this.setState({
      label,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.label !== '') {
      this.addItem(this.state.label)
      this.setState({
        label: '',
      })
    }
  }

  filter = (items, filter) => {
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

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render() {
    const visibleItems = this.filter(this.state.todoData, this.state.filter)

    return (
      <div className="app">
        <NewTaskForm
          onLabelChange={this.onLabelChange}
          onSubmit={this.onSubmit}
          currentLabel={this.state.label}
        />
        <Main
          todoData={visibleItems}
          itemsToBeDone={this.state.todoData}
          deleteItem={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onClearCompleted={this.deleteCompletedTasks}
          onFilterChange={this.onFilterChange}
          filter={this.state.filter}
        />
      </div>
    )
  }
}
