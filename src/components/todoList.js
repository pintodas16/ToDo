import React from "react";
import TodoShow from "./todoShow";
import "./todoList.css";

function TodoList({ allTodo, onDelete, onUpdate }) {
  const renderedTodo = allTodo.map((todo) => {
    return (
      <TodoShow
        clasname="todo-content"
        key={todo.id}
        todo={todo}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });
  return <div className="todoList">{renderedTodo}</div>;

  // console.log(allTodo);
}

export default TodoList;
