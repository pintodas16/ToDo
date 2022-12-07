import React from "react";
import TodoShow from "./todoShow";

function TodoList({ allTodo }) {
  const renderedTodo = allTodo.map((todo) => {
    return <TodoShow key={todo.id} todo={todo} />;
  });
  return <div>{renderedTodo}</div>;

  // console.log(allTodo);
}

export default TodoList;
