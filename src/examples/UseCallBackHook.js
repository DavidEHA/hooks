import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallBackHook = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  const callbackFunction = useCallback(() => {
    console.log("firstValue : ", firstValue);
  }, [firstValue]);

  const changeFirstValue = (event) => {
    const newValue = event.target.value;
    setFirstValue(newValue);
  };
  const changeSeconValue = (event) => {
    const newValue = event.target.value;
    setSecondValue(newValue);
  };

  console.log("secondValue: ", secondValue);
  return (
    <>
      <ChildComponent callbackFunction={callbackFunction} />
      <form>
        <input onChange={changeFirstValue} />
        <input onChange={changeSeconValue} />
      </form>
    </>
  );
};

export default UseCallBackHook;
