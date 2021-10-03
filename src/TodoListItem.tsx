import React from "react";
import styled from "styled-components";

const TodoListItemStyles = styled.div`
  font-family: Arial;
  font-size: 20px;
  list-style: none;
`;
interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <TodoListItemStyles>
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
    </TodoListItemStyles>
  );
};
