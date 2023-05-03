import { useState, useEffect } from "react";

const UseLayoutEffectHook = () => {
  const [textColor, setTextColor] = useState("white");

  const changeToRed = () => {
    setTextColor("red");
  };

  const changeToBlue = () => {
    setTextColor("blue");
  };

  useEffect(() => {
    setTextColor("red")
    console.log("enable");

    return () => {
      console.log("disabled");
    };
  }, [textColor]);
  console.log("render");

  return (
    <>
      <h3 style={{ color: textColor }}> {textColor}</h3>
      <button onClick={changeToRed} style={{ backgroundColor: "red" }}>
        Red
      </button>
      <button onClick={changeToBlue} style={{ backgroundColor: "blue" }}>
        Blue
      </button>
    </>
  );
};

export default UseLayoutEffectHook;
