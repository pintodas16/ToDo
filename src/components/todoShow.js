import React from "react";
import "./todoshow.css";

function TodoShow({ todo, onDelete }) {
  const handleDelete = () => {
    console.log(todo.id);
    onDelete(todo.id);
  };
  return (
    <div className="show">
      <div className="content">{todo.title}</div>

      <div className="showButton">
        <button className="edit-btn">edit</button>
        <button className="del-btn" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
}
export default TodoShow;
