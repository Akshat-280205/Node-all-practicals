import React, { useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";

function App() {
  // State for the counter (Task 2)
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      {/* Task 1: Welcome Message */}
      <WelcomeMessage />

      {/* Task 2: Counter App */}
      <h2>Counter App</h2>
      <p>Current value: {count}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

