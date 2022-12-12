import { createContext, useState } from "react";

const TodoContext = createContext();

const random = () => {
  let randomNumber = Math.trunc(Math.random() * 999);
  return randomNumber;
};

function Provider({ children }) {
  const [todos, setTodo] = useState([]);
  const createTodo = (todoTitle) => {
    const addTodo = [...todos, { id: random(), title: todoTitle }];
    setTodo(addTodo);
  };

  const editTodoById = (newTodoTitle, id) => {
    const updateTodo = todos.map((todo, index) => {
      console.log(todo.title);
      if (todo.id === id) {
        return { ...todo, title: newTodoTitle };
      }
      return todo;
    });
    setTodo(updateTodo);
  };

  const deleteTodoById = (id) => {
    const upDatedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodo(upDatedTodo);
  };

  const valueToShare = {
    todos: todos,
    createTodo: createTodo,
    editTodoById: editTodoById,
    deleteTodoById: deleteTodoById,
  };
  return (
    <TodoContext.Provider value={valueToShare}>{children}</TodoContext.Provider>
  );
}

export { Provider };
export default TodoContext;
