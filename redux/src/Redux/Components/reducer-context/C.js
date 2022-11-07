import React, { useContext, useState } from "react";
import CounterContext from "./CounterContext";
const C = () => {
  const [counter, setCounter] = useContext(CounterContext);
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h2>C Component {counter.count} </h2>
      <button onClick={() => setCounter({ type: "increment" })}>++</button>
      <button onClick={() => setCounter({ type: "decrement" })}>--</button>
      <button onClick={() => setCounter({ type: "reset" })}>Reset</button>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <button
        onClick={() =>
          setCounter({ type: "incrementByAmount", payload: amount })
        }
      >
        Add
      </button>
    </>
  );
};

export default C;
