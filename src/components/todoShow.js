import React from "react";
import "./todoshow.css";
import TodoEdit from "./todoEdit";
import { useState, useContext } from "react";
import TodoContext from "../context/todoContext";

function TodoShow({ todo }) {
  const { deleteTodoById } = useContext(TodoContext);
  const [editShow, setEditShow] = useState(false);

  const handleDelete = () => {
    // console.log(todo.id);
    deleteTodoById(todo.id);
  };
  const handleEdit = () => {
    setEditShow(!editShow);
  };
  const handleSubmit = () => {
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
