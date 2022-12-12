import React from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export default class NewTaskForm extends React.Component {
  state = {
    minutes: '',
    seconds: '',
  }

  static defaultProps = {
    onLabelChange: () => {},
    onSubmit: () => {},
    currentLabel: 'label',
  }

  static propTypes = {
    onLabelChange: PropTypes.func,
    onSubmit: PropTypes.func,
    currentLabel: PropTypes.string,
  }

  onMinutesInputChange = (value) => {
    this.setState({
      minutes: value,
    })
  }

  onSecondsInputChange = (value) => {
    this.setState({
      seconds: value,
    })
  }

  render() {
    const { onLabelChange, onSubmit, currentLabel } = this.props
    const { minutes, seconds } = this.state

    return (
      <header className="header">
        <h1>todos</h1>
        <form
          className="new-todo-form"
          onSubmit={(event) => {
            onSubmit(event, minutes, seconds)
            this.setState({
              minutes: '',
              seconds: '',
            })
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
              this.onMinutesInputChange(event.target.value)
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
              this.onSecondsInputChange(event.target.value)
            }}
            value={seconds}
          ></input>
          <button type="submit" />
        </form>
      </header>
    )
  }
}
