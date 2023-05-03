import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [first, setfirst] = useState(0);

  const handleIncrease = () => {
    setfirst((prevValue) => {
      return prevValue + 1;
    });
  };

  const handleDecrease = () => {
    setfirst((prevValue) => {
      return prevValue - 1;
    });
  };

  useEffect(() => {
    
    console.log("enable")
  
    return () => {
      console.log("disabled")
    }
  }, [first])
  

  console.log("render")

  return (
    <>
      {first}
      <button onClick={handleIncrease}> +1</button>
      <button onClick={handleDecrease}> -1</button>
    </>
  );
};

export default UseEffectHook;
