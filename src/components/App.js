import React from "react";
import "./../styles/App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  function incCount() {
    setCount(count + 1);
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>
      <button onClick={incCount}>Click me</button>
    </div>
  );
};

export default App;
