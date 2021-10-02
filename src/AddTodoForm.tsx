import React, { useState } from "react";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState("");

  return (
    <form>
      <input type="text" />
      <button type="submit">Add Todo</button>
    </form>
  );
};
