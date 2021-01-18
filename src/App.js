import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, asyncIncrement } from './features/counter/counterSlice';

function App() {
  const counter = useSelector(state => state.value)
  const dispatch = useDispatch()

  function incrementHandler() {
    dispatch({type: 'counter/increment'})
  }
  function decrementHandler() {
    dispatch(decrement())
  }
  function AsyncIncrementHandler() {
    dispatch(asyncIncrement())
  }
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={AsyncIncrementHandler}>Async Increment</button>
    </div>
  );
}

export default App;
