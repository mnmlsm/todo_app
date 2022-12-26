import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

const NewTaskForm = ({ onLabelChange, onSubmit, currentLabel }) => {
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  return (
    <header className="header">
      <h1>todos</h1>
      <form
        className="new-todo-form"
        onSubmit={(event) => {
          onSubmit(event, minutes, seconds)
          setMinutes('')
          setSeconds('')
        }}
      >
        <input
          className="new-todo"
          placeholder="Task"
          autoFocus
          required
          onChange={(event) => {
            onLabelChange(event.target.value)
          }}
          value={currentLabel}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          type="number"
          required
          min={0}
          max={60}
          onChange={(event) => {
            setMinutes(event.target.value)
          }}
          value={minutes}
        ></input>
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          type="number"
          required
          min={0}
          max={60}
          onChange={(event) => {
            setSeconds(event.target.value)
          }}
          value={seconds}
        ></input>
        <button type="submit" />
      </form>
    </header>
  )
}

NewTaskForm.propTypes = {
  onLabelChange: PropTypes.func,
  onSubmit: PropTypes.func,
  currentLabel: PropTypes.string,
}

NewTaskForm.defaultProps = {
  onLabelChange: () => {},
  onSubmit: () => {},
  currentLabel: 'label',
}

export default NewTaskForm
