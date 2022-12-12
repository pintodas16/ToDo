import { useState } from "react";
import React from "react";

import "./todoshow.css";

function TodoEdit({ todo, onSubmit }) {
  const [editTitle, setEditTitle] = useState(todo.title);
  const handleChange = (event) => {
    setEditTitle(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    onSubmit(editTitle, todo.id);
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
