import { useState, useContext } from "react";
import React from "react";

import "./todoshow.css";
import TodoContext from "../context/todoContext";

function TodoEdit({ todo, onSubmit }) {
  const { editTodoById } = useContext(TodoContext);
  const [editTitle, setEditTitle] = useState(todo.title);
  const handleChange = (event) => {
    setEditTitle(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    onSubmit();
    editTodoById(editTitle, todo.id);
  };
  return (
    <form className="todoEditForm" onSubmit={handleClick}>
      <input
        className="todoEditInput"
        value={editTitle}
        onChange={handleChange}
      />
    </form>
  );
}
export default TodoEdit;
