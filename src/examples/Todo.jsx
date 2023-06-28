import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showError, setShowError] = useState(false);

  const handleError = () => {
    setShowError(true);
    setInputValue("");
  };

  const addTodo = () => {
    const isEmpty = inputValue.trim() === "";
    const alreadyExist = todos.find(
      (todo) => todo.toLowerCase() === inputValue.toLowerCase()
    );

    if (isEmpty || alreadyExist) return handleError();

    setTodos((prevTodos) => [...prevTodos, inputValue]);
    setShowError(false);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    addTodo();
  };

  return (
    <div className="container">
      <h1 className="header">Lista de tareas</h1>
      <div className="form-control">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Agregar</button>
      </div>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={todo} className="list-item">
            {todo}
            <button onClick={() => deleteTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {showError && <p className="error">Tarea inválida</p>}
    </div>
  );
};
export default Todo;
