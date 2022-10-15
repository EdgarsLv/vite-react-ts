import { increment, decrement, incrementByAmount } from '../../redux/slices/counterSlice'
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../redux/store'

function About() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(2))
  }
  return (
    <div>
      <h3>About</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to='/'>home</Link>
        <Link to='/contacts'>contacts</Link>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4>counter: {count}</h4>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <button onClick={handleIncrementByAmount}>decrement</button>
      </div>
    </div>
  )
}

export default About
