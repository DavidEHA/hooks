import { useState } from "react";

const UseStateHook = () => {
  const [first, setfirst] = useState(0);

  const handleIncrease = () => {
    setfirst(first + 1);
    // setfirst(first + 1);
    // setfirst((prevValue) => {
    //   return prevValue + 1;
    // });
    // setfirst((prevValue) => {
    //   return prevValue + 1;
    // });
  };

  const handleDecrease = () => {
    setfirst(first - 1);
  };

  console.log(first);
  console.log("render")

  return (
    <>
      {first}
      <button onClick={handleIncrease}> +1</button>
      <button onClick={handleDecrease}> -1</button>
    </>
  );
};

export default UseStateHook;
