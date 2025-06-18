import React, { useState } from "react";

function Counter() {
  // state to hold  the counter value
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        width: "200px",
        color: "white",
        background: "black",
      }}
    >
      <h3 style={{
        fontSize: "22px",
      }}>Counter Component</h3>
      {/* display the current count */}
      <p>Counter: {count}</p>
      <button
        onClick={function () {
          // increment the count by 1 when the button is clicked
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={function () {
          setCount(count - 2);
        }}
      >
        Decrement
      </button>

      <button
        onClick={function () {
          setCount(count * 2);
        }}
      >
        duplicate
      </button>

      <button
        onClick={function () {
          setCount(count / 2);
        }}
      >
        divide
      </button>
    </div>
  );
}

export default Counter;
