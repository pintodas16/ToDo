import { useContext } from "react";
import React from "react";
import TodoShow from "./todoShow";
import "./todoList.css";
import TodoContext from "../context/todoContext";

function TodoList() {
  const { todos } = useContext(TodoContext);
  const renderedTodo = todos.map((todo) => {
    return <TodoShow clasname="todo-content" key={todo.id} todo={todo} />;
  });
  return <div className="todoList">{renderedTodo}</div>;

  // console.log(allTodo);
}

export default TodoList;
