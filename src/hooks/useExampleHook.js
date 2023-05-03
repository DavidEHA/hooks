import { useState } from "react";

export const useExampleHook = () => {
  const [answer, setAnswer] = useState();
  const add = (x, y) => {
    setAnswer(x + y);
  };
  const sub = (x, y) => {
    setAnswer(x - y);
  };
  return { answer, add, sub };
};


