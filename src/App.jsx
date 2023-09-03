import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function Add() {
    count = count + 1;
    setCount(count);
  }

  function remove() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className="btn-container">
          <button onClick={Add}>Increment</button>
          <button onClick={remove}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
