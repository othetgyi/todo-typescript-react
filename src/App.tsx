import React from "react";
import { Todo, TodoListItem } from "./TodoListItem";

const todos: Todo[] = [
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
  return (
    <ul>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </ul>
  );
}

export default App;
