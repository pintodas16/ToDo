import { useState } from "react";
import React from "react";
import TodoCreate from "./components/todoCreate";
import TodoList from "./components/todoList";
import "../src/components/todoCreate.css";
const random = () => {
  let randomNumber = Math.trunc(Math.random() * 999);
  return randomNumber;
};
function App() {
  const [todos, setTodo] = useState([]);
  const addTodo = (todoTitle) => {
    const createTodo = [...todos, { id: random(), title: todoTitle }];
    setTodo(createTodo);
  };

  // const updateTodo = (newTodo, id) => {
  //   const editTodo = todos.filter((todo, index) => {
  //     if (todo.id === id) {
  //       return [{ ...todo, title: newTodo }];
  //     }
  //     return todo;
  //   });
  //   setTodo(editTodo);
  // };

  const deleteTodoById = (id) => {
    const upDatedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(upDatedTodo);
  };
  return (
    <div>
      <div className="create-container">
        <TodoCreate onCreate={addTodo} />
        <TodoList allTodo={todos} onDelete={deleteTodoById} />
      </div>
    </div>
  );
}

export { App };
