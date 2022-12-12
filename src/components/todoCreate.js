import { useState, useContext } from "react";
import React from "react";
import TodoContext from "../context/todoContext";

function TodoCreate({ onCreate }) {
  const { createTodo } = useContext(TodoContext);
  const [todoTitle, setTodoTitle] = useState("");
  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoTitle.trim().length !== 0) {
      createTodo(todoTitle);
      setTodoTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input className="input" value={todoTitle} onChange={handleChange} />
      <button className="btn">Add</button>
    </form>
  );
}

export default TodoCreate;
