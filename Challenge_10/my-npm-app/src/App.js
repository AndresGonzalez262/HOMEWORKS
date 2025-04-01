import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBy, decrement, pushToStack, popFromStack } from './store/slices/counterSlice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);
  const stack = useSelector((state) => state.counter.stack);

  const handleIncrement = () => {
    const value = parseInt(prompt('Enter the value to increment:'), 10);
    if (!isNaN(value)) {
      dispatch(incrementBy(value));
    } else {
      alert('Please enter a valid number.');
    }
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handlePush = () => {
    const value = prompt('Enter a value to push to stack:');
    if (value && value.trim()) {
      dispatch(pushToStack(value));
    } else {
      alert('Please enter a valid value.');
    }
  };

  const handlePop = () => {
    if (stack.length > 0) {
      dispatch(popFromStack());
    } else {
      alert('Stack is empty!');
    }
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment by Value</button>
      <button onClick={handleDecrement}>Decrement</button>

      <h2>Stack</h2>
      <button onClick={handlePush}>Push to Stack</button>
      <button onClick={handlePop}>Pop from Stack</button>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
