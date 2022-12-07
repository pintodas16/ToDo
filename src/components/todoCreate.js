import { useState } from "react";
import React from "react";

function TodoCreate({ onCreate }) {
  const [todoTitle, setTodoTitle] = useState("");
  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(todoTitle);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input className="input" value={todoTitle} onChange={handleChange} />
      <button className="btn">Add</button>
    </form>
  );
}

export default TodoCreate;
