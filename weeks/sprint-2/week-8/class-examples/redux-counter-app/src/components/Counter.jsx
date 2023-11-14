import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../reducers/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div>
      <h1>Counter: {count} </h1>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrementByAmount}>Increment by {5}</button>
    </div>
  );
};
