import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from './features/counter/counterSlice';

function App() {
  const counter = useSelector(state => state.value)
  const dispatch = useDispatch()

  function incrementHandler() {
    dispatch(increment())
  }
  function decrementHandler() {
    dispatch(decrement())
  }
  
  return (
    <div>
      <div>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default App;
