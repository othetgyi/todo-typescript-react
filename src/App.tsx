import React, { useState } from "react";
import { Todo, TodoListItem, ToggleTodo } from "./TodoListItem";

const initialTodos: Todo[] = [
  {
    text: "Wash dishes",
    complete: false,
  },
  {
    text: "Do laundry",
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </ul>
  );
}

export default App;
