import React from 'react'

import './Timer.css'

export default class Timer extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
  }

  setTimeoutId = null

  componentDidMount = () => {
    this.setState(() => {
      return {
        minutes: this.props.timer.minutes,
        seconds: this.props.timer.seconds,
      }
    })
  }
  componentDidUpdate = (prevProp, prevState) => {
    if (prevState !== this.state) {
      this.props.onDeleteTask(this.setTimeoutId)
    }
  }
  handleTimer = (timerState) => {
    if (timerState === 'start') {
      this.setTimeoutId = setInterval(() => {
        const { seconds, minutes } = this.state
        if (seconds > 0) {
          this.setState(({ seconds }) => ({
            seconds: seconds <= 10 ? `0${seconds - 1}` : `${seconds - 1}`,
          }))
        }
        if (seconds === '00') {
          if (minutes === '00') {
            clearInterval(this.setTimeoutId)
          } else {
            this.setState(({ minutes }) => ({
              minutes: minutes <= 10 ? `0${minutes - 1}` : `${minutes - 1}`,
              seconds: 59,
            }))
          }
        }
      }, 1000)
    } else if (timerState === 'pause') {
      clearTimeout(this.setTimeoutId)
    }
  }
  render() {
    const { minutes, seconds } = this.state

    return (
      <span className="timer">
        <button
          className="icon icon-play"
          onClick={() => {
            this.handleTimer('start')
          }}
        ></button>
        <button
          className="icon icon-pause"
          onClick={() => {
            this.handleTimer('pause')
          }}
        ></button>
        {`${minutes}:${seconds}`}
      </span>
    )
  }
}
