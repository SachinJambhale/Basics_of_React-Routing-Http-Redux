import React, { useReducer } from "react";
import CounterContext from "./CounterContext";
import Parent from "./Parent";
const ReducerContextDemo = () => {
  // action:-
  // an action is an object having 'type property.
  // optionally an action have 'payload property.

  // Action:-
  // const inAction={type:"increment"}
  // const inAction={type:"increment",payload:10}

  const initialstate = { count: 0 };

  const reducer = (state = initialstate, action) => {
    switch (action.type) {
      case "increment": {
        // mutable
        // state.count=state.count+1
        //immutable
        return { ...state, count: state.count + 1 };
      }
      case "decrement": {
        return { ...state, count: state.count - 1 };
      }
      case "reset": {
        return initialstate;
      }
      case "incrementByAmount": {
        return { ...state, count: state.count + parseFloat(action.payload) };
      }
    }
  };

  // const [state, dispatch] = useReducer(reducer, initialstate);
  const [counter, setCounter] = useReducer(reducer, initialstate);
  return (
    <>
      <h2>Reducer Context</h2>
      <CounterContext.Provider value={[counter, setCounter]}>
        <Parent />
      </CounterContext.Provider>
    </>
  );
};

export default ReducerContextDemo;
