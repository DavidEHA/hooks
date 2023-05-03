import { useEffect } from "react";


const ChildComponent = ({callbackFunction}) => {

useEffect(() => {
console.log("re-render")
}, [callbackFunction])

  console.log("render")
  return (
    <>
      Holi
    </>
  );
};

export default ChildComponent;
