import { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [color, setColor] = useState("red");

  const sum = (x, y) => {
    console.log("recalculate");
    return x + y;
  };

  const result = useMemo(
    () => sum(firstValue, secondValue),
    [firstValue, secondValue]
  );

  const changeFirstValue = (event) => {
    const newValue = event.target.value;
    setFirstValue(+newValue);
  };
  const changeSeconValue = (event) => {
    const newValue = event.target.value;
    setSecondValue(+newValue);
  };

  const changeColor = () => setColor("blue");

  console.log("render");
  console.log(color);

  return (
    <>
      {result}
      <form>
        <input onChange={changeFirstValue} />
        <input onChange={changeSeconValue} />
      </form>
      <button onClick={changeColor}>Update</button>
    </>
  );
};

export default UseMemoHook;
