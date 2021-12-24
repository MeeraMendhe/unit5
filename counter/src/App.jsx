import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const set = (value) => {
    if (value === 1 || value === -1) {
      setCount(count + value);
    } else {
      setCount(count * value);
    }
  };
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={() => set(1)}>Increase</button>
      <button onClick={() => set(-1)}>Decrease</button>
      <button onClick={() => set(2)}>Double</button>
    </div>
  );
}
