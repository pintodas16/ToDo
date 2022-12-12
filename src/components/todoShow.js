import React from "react";
import "./todoshow.css";
import TodoEdit from "./todoEdit";
import { useState } from "react";

function TodoShow({ todo, onDelete, onUpdate }) {
  const [editShow, setEditShow] = useState(false);

  const handleDelete = () => {
    console.log(todo.id);
    onDelete(todo.id);
  };
  const handleEdit = () => {
    setEditShow(!editShow);
  };
  const handleSubmit = (newTodoTitle, id) => {
    onUpdate(newTodoTitle, id);
    setEditShow(false);
  };
  let content = todo.title;
  if (editShow) {
    content = <TodoEdit todo={todo} onSubmit={handleSubmit} />;
  }
  return (
    <div className="show">
      <div className="content">{content}</div>

      <div className="showButton">
        <button className="edit-btn " onClick={handleEdit}>
          edit
        </button>
        <button className="del-btn" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
}
export default TodoShow;
