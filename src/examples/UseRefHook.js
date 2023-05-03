import { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef("Hi");
  const [otherInputRef, setOtherInputRef] = useState("Bye");
  const initialRef = inputRef.current;
  const newRef = inputRef.current.value;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(newRef ? newRef : initialRef);
    console.log(otherInputRef);
  };

  const handleOtherInput = (event) => {
    setOtherInputRef(event.target.value);
  };

  console.log("render");

  return (
    <>
      <form>
        <input ref={inputRef} />
        <input onChange={handleOtherInput} />
        <button onClick={handleOnSubmit}>Submit</button>
      </form>
    </>
  );
};

export default UseRefHook;
