import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age":
      return { ...state, age: state.age + 1 };
      case "decremented_age":
        return { ...state, age: state.age - 1 };
    default:
        throw Error("Unknown action: " + action.type);
    }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { age: 32, name:"Juan" });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decremented_age" });
        }}
      >
        Decrement age
      </button>
      <p>Hello! {state.name}, your age is: {state.age}.</p>
    </>
  );
};

export default UseReducerHook;
