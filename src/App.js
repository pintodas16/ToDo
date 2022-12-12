import React from "react";
import TodoCreate from "./components/todoCreate";
import TodoList from "./components/todoList";
import "../src/components/todoCreate.css";

function App() {
  return (
    <div>
      <div className="create-container">
        <TodoCreate />
        <TodoList />
      </div>
    </div>
  );
}

export { App };
