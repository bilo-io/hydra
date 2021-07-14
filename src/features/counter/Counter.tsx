import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter () {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const countUp = () => dispatch(increment())
  const countDown = () => dispatch(decrement())

  const setIncrement = (e: any) => setIncrementAmount(e.target.value)

  const handleIncrementByAmount = () => dispatch(incrementByAmount(incrementValue))
  const handleIncrementAsync = () => dispatch(incrementAsync(incrementValue))
  const handleIncrementIfOdd = () => dispatch(incrementIfOdd(incrementValue))

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={countUp}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={countDown}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={setIncrement}
        />
        <button
          className={styles.button}
          onClick={handleIncrementByAmount}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={handleIncrementAsync}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={handleIncrementIfOdd}
        >
          Add If Odd
        </button>
      </div>
    </div>
  )
}
