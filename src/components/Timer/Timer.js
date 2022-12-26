import React, { useState, useEffect, useRef } from 'react'

import './Timer.css'

const Timer = ({ timer }) => {
  const [countdownTimer, setCountdownTimer] = useState({ seconds: timer.seconds, minutes: timer.minutes })
  const [timerState, setTimerState] = useState('pause')
  const [isRunningTimer, setTimerRun] = useState(false)
  const setTimeoutId = useRef(null)

  useEffect(() => {
    return () => clearInterval(setTimeoutId.current)
  })

  useEffect(() => {
    updateTimer()
  })

  const updateTimer = () => {
    if (timerState === 'start') {
      setTimeoutId.current = setInterval(() => {
        if (countdownTimer.seconds > 0) {
          setCountdownTimer(({ seconds, minutes }) => ({
            seconds: seconds <= 10 ? `0${seconds - 1}` : `${seconds - 1}`,
            minutes: minutes,
          }))
        }
        if (countdownTimer.seconds === '00') {
          if (countdownTimer.minutes === '00') {
            clearInterval(setTimeoutId.current)
          } else {
            setCountdownTimer(({ minutes }) => ({
              minutes: minutes <= 10 ? `0${minutes - 1}` : `${minutes - 1}`,
              seconds: 59,
            }))
          }
        }
      }, 1000)
    } else if (timerState === 'pause') {
      clearTimeout(setTimeoutId.current)
    }
  }
  return (
    <span className="timer">
      <button
        disabled={isRunningTimer}
        className="icon icon-play"
        onClick={() => {
          setTimerState('start')
          setTimerRun(true)
        }}
      ></button>
      <button
        disabled={!isRunningTimer}
        className="icon icon-pause"
        onClick={() => {
          setTimerState('pause')
          setTimerRun(false)
        }}
      ></button>
      {`${countdownTimer.minutes}:${countdownTimer.seconds}`}
    </span>
  )
}
export default Timer
