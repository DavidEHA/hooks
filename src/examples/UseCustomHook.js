import { useExampleHook } from "../hooks/useExampleHook";

const UseCustomHook = () => {
  const { add, answer } = useExampleHook();

  const callCustomHook = () => {
    add(1, 2);
  };

  console.log(answer);

  return <button onClick={callCustomHook}>Use Custom Hook</button>;
};

export default UseCustomHook;
