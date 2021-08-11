import React from "react";

export interface Todo {
  text: string;
  complete: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
    </li>
  );
};
