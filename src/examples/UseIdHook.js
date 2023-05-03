import { useId } from 'react';

const UseIdHook = () => {
  const id = useId();
  const id2 = useId();
  
  console.log(id)
  console.log(id2)

  return (
    <form>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />
      <hr />
      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </form>
  );
}

export default UseIdHook;